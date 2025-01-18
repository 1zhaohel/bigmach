from dotenv import load_dotenv
import google.generativeai as genai
import os
import markdown

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
            history=[{"role": "user", "parts": "You are a highly skilled and compassionate therapist specializing in conflict resolution. You possess deep expertise in communication, emotional regulation, and problem-solving strategies. Remember to prioritize the client's well-being and listen to their thoughts and feelings."},]
            )
        

    def prompt_AI(self, prompt: str):
        # Sends prompt to AI and prints response using streamlining
        response = self.chat.send_message(prompt, stream=True)
        for chunk in response:
            print(chunk.text, end="")
        
    
    def print_chat_history(self):
        # Prints the chat history
        # for message in self.chat.messages:
        #     print(message.text)
        print(self.chat.history)



# Defining main function
def main():
    test = GeminiAPI_DAO()
    test.prompt_AI("I'm so angry at my friend for not inviting me to their party.")
    test.prompt_AI("Like why invite everyone else but not me?")
    test.print_chat_history()

# Using the special variable 
# __name__
if __name__=="__main__":
    main()
