from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import os
from datetime import datetime, timezone

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# OpenRouter client
client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)


def load_agenda():
    """
    Load agenda.txt content
    """
    with open("agenda.txt", "r", encoding="utf-8") as file:
        return file.read().split("\n\n")


def match_session(user_focus):
    """
    Match user interests with the most relevant session
    """
    agenda = load_agenda()

    best_match = agenda[0]
    highest_score = 0

    user_words = user_focus.lower().split()

    for session in agenda:
        score = 0

        for word in user_words:
            if word in session.lower():
                score += 1

        if score > highest_score:
            highest_score = score
            best_match = session

    return best_match


def generate_email(name, focus, matched_session):
    """
    Generate personalized invitation email
    """

    prompt = f"""
You are a professional B2B conference assistant.

STRICT RULES:
- ONLY use information from the provided session.
- DO NOT invent speakers.
- DO NOT invent times.
- DO NOT invent sessions.
- DO NOT hallucinate any details.
- Keep the email professional and concise.
- Mention why the session matches the visitor's interests.
- Mention the session title, speaker, and time naturally.
- Keep the email under 200 words.

Matched Session Details:
{matched_session}

Visitor Name:
{name}

Visitor Interest:
{focus}

Write a personalized professional invitation email.
"""

    try:
        response = client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"API Error: {str(e)}"


def send_draft_via_mcp(email_address, email_body):
    """
    Simulate MCP email draft sending
    """

    timestamp = datetime.now(timezone.utc)

    print("\n===== MCP EMAIL DRAFT =====")
    print(f"TO: {email_address}")
    print(f"TIME (UTC): {timestamp}")
    print("EMAIL BODY:")
    print(email_body)
    print("===========================\n")


@app.route("/generate-invite", methods=["POST"])
def generate_invite():
    """
    API endpoint to generate invitation email
    """

    try:
        data = request.json

        name = data.get("name")
        email = data.get("email")
        focus = data.get("focus")

        # Validation
        if not name or not email or not focus:
            return jsonify({
                "error": "name, email, and focus are required"
            }), 400

        # Match relevant session
        matched_session = match_session(focus)

        # Generate AI email
        email_body = generate_email(
            name,
            focus,
            matched_session
        )

        # Simulate MCP email draft
        send_draft_via_mcp(email, email_body)

        return jsonify({
            "matched_session": matched_session,
            "email_body": email_body
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)