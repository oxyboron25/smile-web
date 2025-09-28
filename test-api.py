import argparse
import json
import logging
import sys
import time
from datetime import datetime
from pathlib import Path

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


# ---------- Default payload & files ----------
DEFAULT_URL = "https://smile-forms.onrender.com/forms/create"

DEFAULT_PAYLOAD = {
    "university": {
        "name": "Indian Institute of Technology Delhi",
        "address": "Hauz Khas, New Delhi, Delhi 110016",
        "district": "New Delhi",
        "state": "Delhi",
        "pin_code": "110016",
        "website": "https://home.iitd.ac.in",
    },
    "point_of_contact": {
        "contact": {
            "name": "Rohit Kumar",
            "email": "rohit@example.com",
            "phone_number": "+911234567890",
            "linkedin": "https://linkedin.com/in/rohitkumar",
        }
    },
    "founding_members": [
        {
            "contact": {
                "name": "Rohit Kumar",
                "email": "rohit@example.com",
                "phone_number": "+911234567890",
                "linkedin": "https://linkedin.com/in/rohitkumar",
            },
            "role": "president",
            "current_level_of_study": "ug_1",
            "discipline": "Electrical Engineering",
        },
        {
            "contact": {
                "name": "Ananya Singh",
                "email": "ananya@example.com",
                "phone_number": "+919876543210",
                "linkedin": "https://linkedin.com/in/ananyasingh",
            },
            "role": "vice_president",
            "current_level_of_study": "pg_1",
            "discipline": "Computer Science",
        },
    ],
}

# Optional default files (you can replace with actual file paths)
DEFAULT_FILES = {
    "founding_members[0][resume]": "/home/obliviousorion/Downloads/sample.pdf",
    "founding_members[0][proof_of_association]": None,
    "founding_members[1][resume]": "/home/obliviousorion/Downloads/sample.pdf",
    "founding_members[1][proof_of_association]": None,
}

# ---------- HTTP helpers ----------


def send_multipart_request(url: str, data: dict, files: dict):
    """Send multipart/form-data request with JSON data and files"""
    multipart_files = {}
    for k, path in files.items():
        if path:
            p = Path(path)
            if not p.exists():
                pretty_print_state("FILE_MISSING", f"{path} does not exist", color=RED)
                continue
            multipart_files[k] = (p.name, open(p, "rb"), "application/pdf")

    # 'data' field must be a JSON string
    form_data = {"data": json.dumps(data)}
    pretty_print_state("SENDING", f"POST {url} with multipart/form-data")
    try:
        resp = requests.post(url, data=form_data, files=multipart_files)
        pretty_print_state("RESPONSE", f"status={resp.status_code}")
        return resp
    finally:
        # close opened files
        for f in multipart_files.values():
            f[1].close()


# ---------- CLI / main flow ----------


def main():
    parser = argparse.ArgumentParser(description="API test runner for multipart/form-data")
    parser.add_argument("--url", default=DEFAULT_URL, help="API endpoint")
    parser.add_argument("--payload-file", help="JSON payload file (optional)")
    parser.add_argument("--log", default="test-api.log", help="Log file path")
    parser.add_argument("--files", nargs="*", help="File uploads in key=path format")
    args = parser.parse_args()

    logger = setup_logger(args.log)

    # Load payload
    if args.payload_file:
        with open(args.payload_file, "r") as f:
            payload = json.load(f)
            pretty_print_state("PAYLOAD", f"Loaded payload from {args.payload_file}")
    else:
        payload = DEFAULT_PAYLOAD
        pretty_print_state("PAYLOAD", "Using default payload")

    # Load files from CLI
    files = DEFAULT_FILES.copy()
    if args.files:
        for item in args.files:
            key, path = item.split("=", 1)
            files[key] = path

    resp = send_multipart_request(args.url, payload, files)
    try:
        print(json.dumps(resp.json(), indent=2))
    except Exception:
        print(resp.text)


if __name__ == "__main__":
    main()
