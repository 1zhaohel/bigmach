import { useState } from 'react'
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout'
import SwitchPovBtn from './components/PromptButton'
import DropdownBtn from './components/DropdownBtn'
import ToolboxModal from './components/ToolboxModal'
import "./output.css"
import TypingBox from './components/TypingBox'

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

  return (
    <>
      {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button> */}

      <button onClick={() => setOpen(true)}>open</button>
      <ToolboxModal isOpen={isOpen} onClose={handleClose} title="draft text message" content="this is content"/>
      
      <DropdownBtn />
      <SwitchPovBtn btnText={"switch pov"} btnCb={() => console.log("hello ;D")} />
      <TypingBox receiver='mee!' value={reply} handleReplyChange={handleReplyChange} handleSubmit={handleSubmit}/>

      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
