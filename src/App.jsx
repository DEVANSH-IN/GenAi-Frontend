// App.js
import Genai from "./components/genai/genai";
import './App.css';
import SecondInstance from "./components/2ndInstance/2ndinstance.jsx";
import CreateStack from './components/createNewStack/createStack.jsx'; // Corrected import path
import Popup from './components/pop-up-box/pop-up.jsx';
import { useState } from "react";



function App() {
  const [flag, setFlag] = useState(false);

  function play() {
    setFlag(!flag); // 
  }

  return (
    <div className="parent">
      <Genai />
      <div className="sub_header">
        <p className="myStacks">My Stacks</p>
        <CreateStack play={play} /> { }
      </div>
      <hr />
      {flag && <SecondInstance />} { }
    </div>
  );
}

export default App;
