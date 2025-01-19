import { useState } from "react";
import TypingBox from './TypingBox';
import PromptButton from './PromptButton';

const ChatWindow = () => {
  const [messages] = useState([
    { user: "yiping", text: "Okay asduashdkjahsdka", type: "received" },
    { text: "I am being bullied and I feel sad", type: "sent" },
    {
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
  ]);

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
            <TypingBox />
        </div>

        <div className="flex justify-center space-x-4 px-4 py-4">
            <PromptButton
            btnText={"from their pov"}
            btnCb={() => console.log("hello ;D")}
            />
            <PromptButton
            btnText={"from an outsider's pov"}
            btnCb={() => console.log("hello ;D")}
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

