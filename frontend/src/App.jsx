import React, { useState, useEffect } from "react";
import LoginButton from "./auth0/login";
import LogoutButton from "./auth0/logout";
import PromptButton from "./components/PromptButton";
import DropdownBtn from "./components/DropdownBtn";
import Logo from "./components/Logo";
import ChatWindow from "./components/ChatWindow";
import SidebarLink from "./components/SidebarLink";
import InfoButton from "./components/InfoButton";
import ToolboxModal from "./components/ToolboxModal";
import "./output.css";

function App() {
  const [count, setCount] = useState(0)
  const [reply, setReply] = useState('')
  const [isOpen, setOpen] = useState(false)
  
  // temp event handlers
  const handleReplyChange = (e) => setReply(e.target.value)
  const handleSubmit = (e) => {
    console.log(reply)
    setReply("")
    e.preventDefault()
  }

  const handleClose = () => setOpen(false)

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        body: JSON.stringify({"prompt": "hello, how are you"}),
        headers: {
          "Content-Type": "application/json",
        }
      }
    ).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <div className="bg-pink1 h-screen w-screen flex flex-col">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 px-10">
        {/* Sidebar */}
        {/* <div className="flex flex-col grid grid-cols-2 gap-1 justify-center"> */}
        <div className="flex flex-col space-y-4 w-1/6">

          <div className='flex items-center space-x-4'>
            <DropdownBtn />
            <InfoButton />
          </div>
        
          
          <div className="bg-gray2 p-4 rounded-[15px] shadow-md w-52 ">
            <h3 className="mb-2 text-gray1">TOOLBOX</h3>
            <SidebarLink text="draft text message" onClick={() => alert('Draft clicked!')} />
            <SidebarLink text="generate takeaways" onClick={() => alert('Generate clicked!')} />
            <SidebarLink text="suggest actions" onClick={() => alert('Suggest clicked!')} />
          </div>
        </div>
        <ChatWindow />
      </div>
      <div className="pb-10">
        <p className="italic text-sm text-center text-gray1">heart2heart is designed to provide general guidance and support. It is not a substitute for professional mental health care or advice. Your safety and well-being are of utmost importance.</p>
      </div>
    </div>
  );
}

export default App;



// function App() {
//   const [count, setCount] = useState(0)
//   const [reply, setReply] = useState('')
//   const [isOpen, setOpen] = useState(false)

//   // temp event handlers
//   const handleReplyChange = (e) => setReply(e.target.value)
//   const handleSubmit = (e) => {
//     console.log(reply)
//     setReply("")
//     e.preventDefault()
//   }

//   const handleClose = () => setOpen(false)

//   return (
//     <>
//     <div>
//       <SidebarLink text="Home" onClick={() => alert('Home clicked!')} />
//     </div>
//       {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//         Toggle modal
//       </button> */}

//       <button onClick={() => setOpen(true)}>open</button>
//       <ToolboxModal isOpen={isOpen} onClose={handleClose} title="draft text message" content="this is content"/>

//       <DropdownBtn />
//       <SwitchPovBtn btnText={"switch pov"} btnCb={() => console.log("hello ;D")} />
//       <TypingBox receiver='mee!' value={reply} handleReplyChange={handleReplyChange} handleSubmit={handleSubmit}/>
//       <LoginButton />
//       <LogoutButton />

//       <p></p>
//       <SidebarLink text={"draft text message"} onClick={() => console.log("this is your text")}> </SidebarLink>

//       <InfoButton></InfoButton>

//       <div className="space-y-4 p-6">
//       <p className="font-black text-xl">This is black font</p>
//       <p className="font-bold text-xl">This is bold font</p>
//       <p className="font-extrabold text-xl">This is extrabold font</p>
//       <p className="font-extralight text-xl">This is extralight font</p>
//       <p className="font-light text-xl">This is light font</p>
//       <p className="font-medium text-xl">This is medium font</p>
//       <p className="font-regular text-xl">This is regular font</p>
//       <p className="font-semibold text-xl">This is semibold font</p>
//       <p className="font-thin text-xl">This is thin font</p>
//     </div>    </>
//   )
// }
