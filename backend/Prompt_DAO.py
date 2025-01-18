from dotenv import load_dotenv
import google.generativeai as genai
import os
# import markdown

class Prompt_DAO:
    def __init__(self):
        
        # f = open("prompts.txt", "r")
        # self.htmlmarkdown = markdown.markdown(f.read())

        with open("prompts.txt", "r", encoding="utf-8") as file:
            lines = file.readlines()
        
        self.prompts = {}
        current_header = None
        content_buffer = []

        header_pattern = re.compile(r'^(#+)\s+(.*)')

        for line in lines:
            line = line.strip()
            if match := header_pattern.match(line):
                if current_header:
                    self.prompts[current_header] = "\n".join(content_buffer).strip()
                    content_buffer = []
                current_header = match.group(2)
            elif current_header:
                content_buffer.append(line)
        
        if current_header:
            self.prompts[current_header] = "\n".join(content_buffer).strip()


    def print_prompts(self):
        # Prints the prompts
        # print(self.htmlmarkdown, "hi")

        print(self.prompts)


# Defining main function
def main():
    test = Prompt_DAO()
    test.print_prompts()

# Using the special variable 
# __name__
if __name__=="__main__":
    main()
