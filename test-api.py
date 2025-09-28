import argparse
import json
import logging
import sys
import time
from datetime import datetime

import requests


# ---------- Utilities ----------
RESET = "\033[0m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
CYAN = "\033[96m"


def now():
    return datetime.utcnow().isoformat() + "Z"


def setup_logger(logfile: str):
    logger = logging.getLogger("test-api")
    logger.setLevel(logging.DEBUG)
    fmt = logging.Formatter("%(asctime)s %(levelname)s %(message)s")
    fh = logging.FileHandler(logfile)
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(fmt)
    logger.addHandler(fh)
    return logger


def pretty_print_state(step: str, message: str, color: str = CYAN):
    ts = now()
    print(f"{color}[{ts}] {step}:{RESET} {message}")


# ---------- Default payload & config ----------
DEFAULT_URL = "https://smile-forms.onrender.com"

DEFAULT_PAYLOAD = {
    "university_chapter": {
        "university": {
            "id": None,
            "name": "Indian Institute of Technology Delhi",
            "address": "Hauz Khas, New Delhi, Delhi 110016",
            "country": "India",
            "state": "Delhi",
            "pin_code": "110016",
            "website": "https://home.iitd.ac.in",
        },
        "point_of_contact": {
            "id": None,
            "contact": {"id": None, "linkedin": "https://linkedin.com/in/somepoc"},
        },
        "founding_members": [
            {
                "id": None,
                "contact": {
                    "id": None,
                    "name": "Rohit Kumar",
                    "email": "rohit@example.com",
                    "phone_number": "+911234567890",
                    "linkedin": "https://linkedin.com/in/rohitkumar",
                },
                "role": "President",
                "current_level_of_study": "Undergraduate",
                "discipline": "Electrical Engineering",
                "resume": "https://example.com/resume/rohit.pdf",
                "proof_of_association": None,
            },
            {
                "id": None,
                "contact": {
                    "id": None,
                    "name": "Ananya Singh",
                    "email": "ananya@example.com",
                    "phone_number": "+919876543210",
                    "linkedin": "https://linkedin.com/in/ananyasingh",
                },
                "role": "Vice President",
                "current_level_of_study": "Postgraduate",
                "discipline": "Computer Science",
                "resume": "https://example.com/resume/ananya.pdf",
                "proof_of_association": None,
            },
        ],
    }
}


# ---------- HTTP helpers ----------


def send_request(method: str, url: str, headers: dict, data=None, timeout=30):
    start = time.time()
    pretty_print_state("SENDING", f"{method} {url}")
    try:
        resp = requests.request(method, url, headers=headers, data=data, timeout=timeout)
        elapsed = time.time() - start
        pretty_print_state("RESPONSE", f"status={resp.status_code} time={elapsed:.2f}s")
        return resp, elapsed
    except requests.exceptions.RequestException as exc:
        elapsed = time.time() - start
        pretty_print_state("ERROR", f"request failed after {elapsed:.2f}s: {exc}", color=RED)
        raise


def poll_url(status_url: str, headers: dict, poll_interval: int, timeout: int, logger: logging.Logger):
    pretty_print_state("POLLING", f"{status_url} every {poll_interval}s up to {timeout}s", color=YELLOW)
    start = time.time()
    while True:
        try:
            resp, elapsed = send_request("GET", status_url, headers)
        except Exception as e:
            logger.exception("Polling request failed")
            return {"error": str(e)}

        if resp.status_code in (200, 201):
            try:
                data = resp.json()
            except Exception:
                data = {"_raw": resp.text}
            logger.debug("Poll response: %s", json.dumps(data))

            # Heuristic: if there's a status field, check for terminal states
            status = None
            for key in ("status", "state", "task_status"):
                if isinstance(data, dict) and key in data:
                    status = str(data[key]).lower()
                    break

            if status:
                pretty_print_state("STATUS", f"{status}")
                if status in ("completed", "done", "success", "finished", "failed", "error"):
                    return data
            else:
                # No explicit status field — assume operation finished if HTTP 200
                return data

        elif resp.status_code in (202,):
            pretty_print_state("STATUS", f"accepted (202), still processing", color=YELLOW)

        else:
            pretty_print_state("POLL_ERROR", f"status_code={resp.status_code}", color=RED)
            logger.error("Polling got unexpected status %s: %s", resp.status_code, resp.text)

        if time.time() - start > timeout:
            pretty_print_state("TIMEOUT", f"polling timed out after {timeout}s", color=RED)
            return {"error": "polling_timeout"}

        time.sleep(poll_interval)


# ---------- CLI / main flow ----------


def main():
    parser = argparse.ArgumentParser(description="Enhanced API test runner with state view and optional polling")
    parser.add_argument("--url", default=DEFAULT_URL, help="API base url or endpoint to POST to")
    parser.add_argument("--payload-file", help="Path to a JSON file with payload (overrides default payload)")
    parser.add_argument("--log", default="test-api.log", help="Log file path")
    parser.add_argument("--poll-interval", type=int, default=3, help="Polling interval (seconds)")
    parser.add_argument("--poll-timeout", type=int, default=60, help="Polling timeout (seconds)")
    parser.add_argument("--retries", type=int, default=1, help="Number of times to retry POST on network errors")
    parser.add_argument("--verbose", action="store_true", help="Enable verbose output")
    args = parser.parse_args()

    logger = setup_logger(args.log)
    if args.verbose:
        pretty_print_state("INFO", f"logging to {args.log}")

    # Load payload
    if args.payload_file:
        try:
            with open(args.payload_file, "r") as f:
                payload = json.load(f)
                pretty_print_state("PAYLOAD", f"Loaded payload from {args.payload_file}")
        except Exception as e:
            pretty_print_state("ERROR", f"Failed to read payload file: {e}", color=RED)
            logger.exception("Failed to load payload file")
            sys.exit(2)
    else:
        payload = DEFAULT_PAYLOAD
        pretty_print_state("PAYLOAD", "Using built-in default payload")

    headers = {"Content-Type": "application/json"}

    # Convert payload to string once (to measure send time properly)
    payload_data = json.dumps(payload)

    last_exception = None
    for attempt in range(1, args.retries + 1):
        pretty_print_state("ATTEMPT", f"{attempt}/{args.retries}")
        try:
            resp, elapsed = send_request("POST", args.url, headers, data=payload_data)
            logger.info("POST %s returned %s in %.2fs", args.url, resp.status_code, elapsed)

            # Basic handling of responses
            if resp.status_code >= 200 and resp.status_code < 300:
                try:
                    result = resp.json()
                except Exception:
                    result = {"_raw": resp.text}

                pretty_print_state("SUCCESS", f"HTTP {resp.status_code}", color=GREEN)
                logger.debug("Response JSON: %s", json.dumps(result))
                print(json.dumps(result, indent=2))

                # If the server returned a status/location for long running jobs, poll it
                status_url = None
                if isinstance(result, dict):
                    if "status_url" in result:
                        status_url = result["status_url"]
                    elif "location" in result:
                        status_url = result["location"]

                # Also check Location header
                if not status_url and resp.headers.get("Location"):
                    status_url = resp.headers.get("Location")

                if status_url:
                    pretty_print_state("FOLLOWUP", f"found status url: {status_url}")
                    poll_result = poll_url(status_url, headers, args.poll_interval, args.poll_timeout, logger)
                    pretty_print_state("POLL_RESULT", json.dumps(poll_result))
                    logger.info("Final poll result: %s", json.dumps(poll_result))

                sys.exit(0)

            else:
                # Non-2xx
                pretty_print_state("FAILURE", f"HTTP {resp.status_code}", color=RED)
                try:
                    err = resp.json()
                    print(json.dumps(err, indent=2))
                except Exception:
                    print(resp.text)
                logger.error("Request failed: %s", resp.text)
                last_exception = Exception(f"HTTP {resp.status_code}")

        except Exception as e:
            last_exception = e
            logger.exception("Request attempt failed")
            pretty_print_state("NETWORK_ERROR", str(e), color=RED)
            # retry loop continues

        # small backoff before next retry
        time.sleep(1)

    pretty_print_state("DONE", "All attempts finished, exiting with error", color=RED)
    if last_exception:
        logger.error("Last error: %s", str(last_exception))
    sys.exit(1)


if __name__ == "__main__":
    main()
