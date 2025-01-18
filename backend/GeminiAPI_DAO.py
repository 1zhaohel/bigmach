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
        # Sets up chat conversation with empty chat history
        self.chat = self.model.start_chat(
            history=[]
            )
        

    def prompt_AI(self, prompt: str):
        # Sends prompt to AI and prints response using streamlining
        response = self.chat.send_message(prompt, stream=True)
        for chunk in response:
            print(chunk.text, end="")
        
        print(self.chat.history)



# Defining main function
def main():
    test = GeminiAPI_DAO()
    test.prompt_AI("Why is the sky blue?")
    test.prompt_AI("Can you make it more consise?")


# Using the special variable 
# __name__
if __name__=="__main__":
    main()
