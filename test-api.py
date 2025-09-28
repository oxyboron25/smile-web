import requests
import json

# API endpoint
url = "https://smile-forms.onrender.com"

# Payload (replace with real data or dynamically build it)
payload = {
    "university_chapter": {
        "university": {
            "id": None,
            "name": "Indian Institute of Technology Delhi",
            "address": "Hauz Khas, New Delhi, Delhi 110016",
            "country": "India",
            "state": "Delhi",
            "pin_code": "110016",
            "website": "https://home.iitd.ac.in"
        },
        "point_of_contact": {
            "id": None,
            "contact": {
                "id": None,
                "linkedin": "https://linkedin.com/in/somepoc"
            }
        },
        "founding_members": [
            {
                "id": None,
                "contact": {
                    "id": None,
                    "name": "Rohit Kumar",
                    "email": "rohit@example.com",
                    "phone_number": "+911234567890",
                    "linkedin": "https://linkedin.com/in/rohitkumar"
                },
                "role": "President",
                "current_level_of_study": "Undergraduate",
                "discipline": "Electrical Engineering",
                "resume": "https://example.com/resume/rohit.pdf",
                "proof_of_association": None
            },
            {
                "id": None,
                "contact": {
                    "id": None,
                    "name": "Ananya Singh",
                    "email": "ananya@example.com",
                    "phone_number": "+919876543210",
                    "linkedin": "https://linkedin.com/in/ananyasingh"
                },
                "role": "Vice President",
                "current_level_of_study": "Postgraduate",
                "discipline": "Computer Science",
                "resume": "https://example.com/resume/ananya.pdf",
                "proof_of_association": None
            }
        ]
    }
}

# Make POST request
headers = {"Content-Type": "application/json"}

try:
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    response.raise_for_status()  # Raise exception if request failed
    result = response.json()
    print("✅ Submitted successfully!")
    print("Response:", json.dumps(result, indent=2))
except requests.exceptions.RequestException as e:
    print("❌ Submission failed:", e)
