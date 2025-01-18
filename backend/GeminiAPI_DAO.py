from dotenv import load_dotenv
import google.generativeai as genai
import os

class GeminiAPI_DAO:
    def __init__(self):

        # Load API key from .env.local file
        load_dotenv('.env.local')
        self.gemini_api_key = os.getenv('GEMINI_API_KEY')

        # Initialize GeminiAI API
        genai.configure(api_key=self.gemini_api_key)
        self.model = genai.GenerativeModel("gemini-1.5-flash")
        

    def prompt_AI(self, prompt: str):
        response = self.model.generate_content(prompt)
        print(response)

# Defining main function
def main():
    test = GeminiAPI_DAO()
    test.prompt_AI("Why is the sky blue?")


# Using the special variable 
# __name__
if __name__=="__main__":
    main()
