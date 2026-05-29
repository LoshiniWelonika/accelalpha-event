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





if __name__ == "__main__":
    app.run(debug=True)