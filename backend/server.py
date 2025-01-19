from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os
from backend.GeminiAPI_DAO import GeminiAPI_DAO # use this when pushing to heroku
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173"]}})

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        # Handle preflight request (respond to OPTIONS request)
        return '', 200
    
    raw_data = request.data
    decoded_data = raw_data.decode('utf-8')

    json_data = json.loads(decoded_data)
    
    test = GeminiAPI_DAO("therapist")
    response = test.prompt_AI(json_data["prompt"])
    response = jsonify(response)

    return response


if __name__ == "__main__":
    app.run(debug=True)