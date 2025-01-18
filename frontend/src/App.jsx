import { useState } from 'react'
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout'
import SwitchPovBtn from './components/SwitchPovBtn'
import DropdownBtn from './components/DropdownBtn'
import Logo from './components/Logo'
import "./output.css"

function App() {
  const [count, setCount] = useState(0)

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

      <LoginButton />
      <LogoutButton />

      <p></p>
      {/* <SidebarLink text={"switch pov"} onClick={() => console.log("hello ;D")}> </SidebarLink> */}
      <p></p>
      {/* <TooltipWithHelperIcon></TooltipWithHelperIcon> */}

 
      <div className="space-y-4 p-6">
      <p className="font-black text-xl">This is black font</p>
      <p className="font-bold text-xl">This is bold font</p>
      <p className="font-extrabold text-xl">This is extrabold font</p>
      <p className="font-extralight text-xl">This is extralight font</p>
      <p className="font-light text-xl">This is light font</p>
      <p className="font-medium text-xl">This is medium font</p>
      <p className="font-regular text-xl">This is regular font</p>
      <p className="font-semibold text-xl">This is semibold font</p>
      <p className="font-thin text-xl">This is thin font</p>
    </div>    </>
  )
}

export default App
