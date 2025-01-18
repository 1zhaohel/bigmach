import { useState } from "react";
import LoginButton from "./auth0/login";
import LogoutButton from "./auth0/logout";
import SwitchPovBtn from "./components/SwitchPovBtn";
import DropdownBtn from "./components/DropdownBtn";
import Logo from "./components/Logo";
import ChatWindow from "./components/ChatWindow";
import "./output.css";

function App() {
	return (
    <>
      <div className="bg-pink1 min-h-screen">
        <Logo />

        <DropdownBtn />
        <SwitchPovBtn
          btnText={"switch pov"}
          btnCb={() => console.log("hello ;D")}
        />

        <LoginButton />
        <LogoutButton />
        <ChatWindow />
      </div>
    </>
	);
}

export default App;
