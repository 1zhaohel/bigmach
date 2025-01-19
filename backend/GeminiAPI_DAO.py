from dotenv import load_dotenv
import google.generativeai as genai
import os
from dotenv import dotenv_values

class GeminiAPI_DAO:
    def __init__(self, mode: str):

        base_mode_setup = "Stay consise. Keep the character count between 200 and 250. "
        therapist_mode_setup = "You are a highly skilled and compassionate therapist specializing in conflict resolution. You possess deep expertise in communication, emotional regulation, and problem-solving strategies. Remember to prioritize the client's well-being and listen to their thoughts and feelings."
        logical_mode_setup = "You are a highly logical and objective therapist and your client has come to you to resolve a conflict in their life. The client wants to get specific and actionable next steps as opposed to helping them understand their emotions. You are straight to the point and will tell them the hard facts and truths as they are, while still being polite. You want to help address the root of the client's problems and explain to them how your suggestions target the bigger picture." 
        emotional_mode_setup = "You are a deeply empathetic and supportive therapist, and your client has come to you seeking emotional comfort and validation. Your primary goal is to help the client feel seen, heard, and understood, rather than focusing on logical problem-solving or action steps. You respond with warmth and compassion, helping the client explore and process their emotions at their own pace. You aim to create a safe, nonjudgmental space where the client feels free to share their feelings, and your responses are grounded in kindness, active listening, and unconditional support."

        # Load API key from .env.local file
        load_dotenv('.env')
        self.gemini_api_key = os.getenv('GEMINI_API_KEY')

        print(self.gemini_api_key)

        # Initialize GeminiAI API
        genai.configure(api_key=self.gemini_api_key)

        self.mode_setup = base_mode_setup
        if mode == "therapist":
            self.mode_setup += therapist_mode_setup
            # self.history = [{"role": "user", "parts": therapist_mode_setup},]
        elif mode == "logical":
            self.mode_setup += logical_mode_setup
            # self.history = [{"role": "user", "parts": logical_mode_setup},]
        elif mode == "emotional":
            self.mode_setup += emotional_mode_setup
            # self.history = [{"role": "user", "parts": emotional_mode_setup},]
        else:
            self.mode_setup += therapist_mode_setup
            # self.history = [{"role": "user", "parts": therapist_mode_setup},]

        self.model = genai.GenerativeModel("gemini-1.5-flash") #, system_instruction=therapist_mode_setup)

        # Initialize chat history based on therapist mode
        self.history = []

        # Sets up chat conversation with mode setup chat history
        self.chat = self.model.start_chat(
            history=self.history
            )
        

    def prompt_AI(self, prompt: str):
        # Sends prompt to AI and prints response using streamlining
        response = self.chat.send_message(prompt)
        # for chunk in response:
        #     print(chunk.text, end="")
        # print(response.text)
        return response.text
        
    
    def print_chat_history(self):
        # Prints the chat history
        # for message in self.chat.messages:
        #     print(message.text)
        print(self.chat.history)



# Defining main function
def main():

    inSession = "n"

    print("Welcome to Heart2Heartz!")
    print("Would you like to start a therapy session? (y/n)")
    inSession = input()

    while inSession == "y":
        print("-In Session-")
        
        print("Enter mode: therapist, logical, emotional.")
        prompt_mode = input()
        test = GeminiAPI_DAO(prompt_mode)

        print("Tell me about your problem. What can I help you with today?")
        while True:
            print()
            user_input = input()
            if user_input == "q":
                break
            print()
            test.prompt_AI(user_input)

        # test.prompt_AI("I'm so angry at my friend for not inviting me to their party.")
        # test.prompt_AI("Like why invite everyone else but not me?")
        # test.print_chat_history()

        inSession = input("Would you like to start a therapy session? (y/n)")
    
    print("Goodbye!")

# Using the special variable 
# __name__
if __name__=="__main__":
    main()
