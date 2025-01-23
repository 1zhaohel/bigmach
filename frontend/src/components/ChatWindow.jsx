
import { useState } from "react";
import TypingBox from './TypingBox';
import PromptButton from './PromptButton';
import { apiService } from "../apiService";

// TODO: ChatWindow accepts JSON data from the AI's response and then formats it accordingly
const ChatWindow = () => {
  const [messages, setMessages] = useState([
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
{ user: "  ", text: "                         ", type: "received" },
]);

const [userInput, setUserInput] = useState(""); // State to handle user input

const handleReplyChange = (e) => setUserInput(e.target.value); // Function to update user input

const handleSubmit = async () => {
  if (userInput.trim() === "") return; // Prevent sending empty messages

  const newMessage = { text: userInput, type: "sent" };
  setMessages((prevMessages) => [...prevMessages, newMessage]);
  setUserInput("");

  try {
    const response = await apiService.post({ prompt: userInput });
    const botMessage = { text: response, type: "received" };

    setMessages((prevMessages) => [...prevMessages, botMessage]);

  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const handlePovClick = async (povType) => {
  var prompt
  if (povType == "their-pov") {
    prompt = "Based on our recent conversation, please express how the other person may feel about the situation, helping me reflect but make it concise."
  } else if ( povType == "outside-pov") {
    prompt = "Based on our recent conversation, please express how an objective outsider may feel about the situation, helping me reflect but make it concise."
  }

  try {
    const response = await apiService.post({ prompt: prompt });
    const botMessage = { text: response, type: "received" };

    setMessages((prevMessages) => [...prevMessages, botMessage]);

  } catch (error) {
    console.error("Error sending message:", error);
  }
}

return (
<div className="flex items-center justify-center w-5/6 h-[98%] rounded-[15px] border border-dashed border-pink5 shadow-lg bg-pink7">
  <div className="flex flex-col w-full h-full">
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 max-h-[70vh]">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}
        >
          <div className="max-w-xs p-4 rounded-lg text-gray1">
            <div className={`font-semibold ${message.type === "sent" ? "text-right" : "text-left"}`}>{message.type === "sent" ? "you" : message.user}</div>
            <div className="text-sm">{message.text}</div>
          </div>
        </div>
      ))}
    </div>

    <div className='flex items-center justify-center'>
        <TypingBox 
          // receiver="yiping"
          value={userInput} // Passes the user input as a prop into TypingBox
          handleReplyChange={handleReplyChange} // Passes the handleReplyChange function as a prop into TypingBox
          handleSubmit={handleSubmit} // Passes the handleSubmit function as a prop into TypingBox
          // setUserInput={setUserInput} // Func to update user input
          // handleSendMessage={handleSendMessage} // Func to handle sending the message
        />
    </div>

    <div className="flex justify-center space-x-4 px-4 py-4">
        <PromptButton
        btnText={"from their pov"}
        btnCb={() => handlePovClick("their-pov")}
        />
        <PromptButton
        btnText={"from an outsider's pov"}
        btnCb={() => handlePovClick("outside-pov")}
        />
    </div>

  </div>
</div>
);
};

  {/* POV Buttons */}
  {/* <div className="flex justify-center space-x-4 px-4 py-4">
    <button className="px-4 py-2 bg-gray-200 rounded-md">from their pov</button>
    <button className="px-4 py-2 bg-gray-200 rounded-md">from an outsider's pov</button>
    <button className="px-4 py-2 bg-gray-200 rounded-md">from their pov</button>
  </div> */}

  {/* Footer */}
  {/* <div className="text-center text-sm text-gray-500 px-4 py-2">
    if you or someone else is in immediate danger, please seek professional help.
  </div> */}

export default ChatWindow;