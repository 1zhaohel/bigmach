from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os
import GeminiAPI_DAO
import json

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    raw_data = request.data
    decoded_data = raw_data.decode('utf-8')

    json_data = json.loads(decoded_data)
    
    test = GeminiAPI_DAO.GeminiAPI_DAO("therapist") # TODO: make this dynamic
    response = test.prompt_AI(json_data["prompt"])

    return json.dumps(response)


if __name__ == "__main__":
    app.run(debug=True)