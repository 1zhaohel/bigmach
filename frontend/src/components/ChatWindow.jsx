import { useState } from "react";

const ChatWindow = () => {
  const [messages] = useState([
    { user: "yiping", text: "Okay asduashdkjahsdka", type: "received" },
    { user: "yiping", text: "I am being bullied and I feel sad", type: "sent" },
    {
      user: "sad yiping",
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      user: "sad yiping",
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      user: "sad yiping",
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
    {
      user: "sad yiping",
      text: "I am being bullied and I feel sad I am being bullied and I feel sad...",
      type: "sent",
    },
  ]);

  return (
    <div className="flex items-center justify-center w-4/6 h-5/6 rounded-[15px] border border-dashed border-pink5 shadow-lg bg-pink7">
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 max-h-[70vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-xs p-4 rounded-lg text-gray1">
                <div className="font-semibold">{message.user}</div>
                <div className="text-sm">{message.text}</div>
              </div>
            </div>
          ))}
        </div>
        {/* add input text component */}
       
      </div>
    </div>
  );
};

export default ChatWindow;

