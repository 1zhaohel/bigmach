import { useState } from 'react'
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout'
import SwitchPovBtn from './components/SwitchPovBtn'
import DropdownBtn from './components/DropdownBtn'
import SidebarLink from './components/SidebarLink';

import "./output.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <SidebarLink text="Home" onClick={() => alert('Home clicked!')} />
    </div>
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
      <SidebarLink text={"switch pov"} onClick={() => console.log("hello ;D")}> </SidebarLink>

    </>
  )
}

export default App
