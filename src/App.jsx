import "./App.css";
import Message from "./componentes/Message.jsx";
import AddMessage from "./componentes/AddMessage.jsx";
import Login from "./componentes/Login.jsx";
import Register from "./componentes/Register.jsx";
import { useState } from "react";


function App() {
  const [showAddMessage, setShowAddMessage] = useState(false);
  const [register, setRegister] = useState(false);
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("estado") === "registrado"
  );

  return (
    <>
      {isRegistered ? (
        <>
          <button className="message-add" onClick={() => setShowAddMessage(true)}>Message</button>

          <Message />
          <Message />

          {showAddMessage && (
            <AddMessage onClose={() => setShowAddMessage(false)} />
          )}
        </>
      ) : (
        register ? (
          <Register change={() => setRegister(false)} onRegister={() => setIsRegistered(true)} />
        ) : (
          <Login change={() => setRegister(true)} onLogin={() => setIsRegistered(true)} />
        )
      )}
    </>
  );
}

export default App;
