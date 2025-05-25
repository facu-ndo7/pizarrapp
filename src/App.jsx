import "./App.css";
import Message from "./componentes/Message.jsx";
import AddMessage from "./componentes/AddMessage.jsx";
import Login from "./componentes/Login.jsx";
import Register from "./componentes/Register.jsx";
import { useState } from "react";

function App() {
  const [showAddMessage, setShowAddMessage] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
      
      {register
        ? <Register change={() => setRegister(false)} />
        : <Login change={() => setRegister(true)} />
      }


      {/* <button className="message-add" onClick={() => setShowAddMessage(true)}> Message </button>

      <Message />
      <Message />

      {showAddMessage && (<AddMessage onClose={() => setShowAddMessage(false)} /> )}  */}
    </>
  );
}

export default App;
