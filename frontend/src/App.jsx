import { useState } from 'react'
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout'
import SwitchPovBtn from './components/PromptButton'
import DropdownBtn from './components/DropdownBtn'
import Logo from './components/Logo'
import "./output.css"
import TypingBox from './components/TypingBox'

function App() {
  const [count, setCount] = useState(0)
  const [reply, setReply] = useState('')
  
  // temp event handlers
  const handleReplyChange = (e) => setReply(e.target.value)
  const handleSubmit = (e) => {
    console.log(reply)
    setReply("")
    e.preventDefault()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DropdownBtn />
      <SwitchPovBtn btnText={"switch pov"} btnCb={() => console.log("hello ;D")} />
      <TypingBox receiver='mee!' value={reply} handleReplyChange={handleReplyChange} handleSubmit={handleSubmit}/>

      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
