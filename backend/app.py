from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import os
from datetime import datetime, timezone

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def load_agenda():
    with open("agenda.txt", "r", encoding="utf-8") as file:
        return file.readlines()


def match_session(user_focus):
    agenda = load_agenda()

    best_match = agenda[0]

    user_focus = user_focus.lower()

    for session in agenda:
        if any(word in session.lower() for word in user_focus.split()):
            best_match = session

    return best_match


def generate_email(name, focus, matched_session):
    prompt = f"""
You are a professional B2B conference assistant.

STRICT RULES:
- ONLY use information provided below.
- DO NOT invent speakers.
- DO NOT invent times.
- DO NOT invent sessions.
- DO NOT hallucinate any details.
- ONLY mention the matched session exactly as written.

Matched Session:
{matched_session}

Visitor Name:
{name}

Visitor Focus:
{focus}

Write a professional invitation email in under 200 words.
"""

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content


def send_draft_via_mcp(email_address, email_body):
    timestamp = datetime.now(timezone.utc)

    print("\n===== MCP EMAIL DRAFT =====")
    print(f"TO: {email_address}")
    print(f"TIME (UTC): {timestamp}")
    print("EMAIL BODY:")
    print(email_body)
    print("===========================\n")


@app.route("/generate-invite", methods=["POST"])
def generate_invite():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    focus = data.get("focus")

    matched_session = match_session(focus)

    email_body = generate_email(
        name,
        focus,
        matched_session
    )

    send_draft_via_mcp(email, email_body)

    return jsonify({
        "matched_session": matched_session,
        "email_body": email_body
    })


if __name__ == "__main__":
    app.run(debug=True)