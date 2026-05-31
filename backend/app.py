from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import os
from datetime import datetime, timezone

load_dotenv()

app = Flask(__name__)
CORS(app)


client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def load_agenda():
    with open("agenda.txt", "r", encoding="utf-8") as file:
        content = file.read()

    sessions = content.strip().split("\n\n")
    return [s.strip() for s in sessions if s.strip()]


def match_session(user_focus):
    agenda = load_agenda()

    prompt = f"""
You are an expert conference scheduling assistant.

Your task is to select the SINGLE most relevant session for a visitor.

STRICT RULES:
- You MUST choose ONLY from the provided sessions.
- Do NOT modify session text.
- Do NOT invent new sessions.
- Return ONLY the exact session text.
- Do NOT add explanations.

Visitor Interest:
{user_focus}

Available Sessions:
{chr(10).join(agenda)}

Return only the best matching session.
"""

    response = client.chat.completions.create(
        model="openai/gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content.strip()


def generate_email(name, focus, matched_session):
    prompt = f"""
You are a professional B2B conference assistant.

STRICT RULES:
- ONLY use information from the provided session.
- DO NOT invent speakers or times.
- Keep email under 200 words.
- Keep tone professional and concise.

Matched Session:
{matched_session}

Visitor Name:
{name}

Visitor Interest:
{focus}

Write a personalized invitation email.
"""

    try:
        response = client.chat.completions.create(
            model="openai/gpt-4o-mini",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"API Error: {str(e)}"


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

        # Step 1: Match session using LLM
        matched_session = match_session(focus)

        # Step 2: Generate email
        email_body = generate_email(name, focus, matched_session)

        # Step 3: Simulate MCP email draft
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