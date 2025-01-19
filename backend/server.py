from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import google.generativeai as genai
import os
# from GeminiAPI_DAO import GeminiAPI_DAO # use backend.GeminiAPI_DAP  when pushing to heroku
from backend.GeminiAPI_DAO import GeminiAPI_DAO
import json

app = Flask(__name__)
CORS(app) #, resources={r"/*": {"origins": ["http://localhost:5173"]}})
test = GeminiAPI_DAO("therapist")

@app.route("/chat", methods=["POST", "OPTIONS"])
# @cross_origin()
def chat():
    if request.method == "OPTIONS":
        # Handle preflight request (respond to OPTIONS request)
        return '', 200
    
    raw_data = request.data
    decoded_data = raw_data.decode('utf-8')

    json_data = json.loads(decoded_data)
    
    response = test.prompt_AI(json_data["prompt"])
    response = jsonify(response)

    return response


    


if __name__ == "__main__":
    app.run(debug=True)