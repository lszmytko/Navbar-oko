import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AiOutlineBell } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleIsLogged = () => {
    setIsLogged((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {isLogged ? (
        <Navbar>
          <button className="btn btn_login">Zaloguj się</button>
        </Navbar>
      ) : (
        <Navbar>
          <span>
            <AiOutlineBell className="icon" />
          </span>
          <span>
            <MdAccountCircle className="icon" />
          </span>
        </Navbar>
      )}
      <button onClick={handleIsLogged} className="btn btn_changeState">Change state</button>
    </>
  );
}

export default App;
