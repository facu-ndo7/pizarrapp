import React from "react";
import cerrar_ventana from "../iconos/cerrar_ventana.png";

function AddMessage({ onClose }) {
  return (
    <>
      <div className="add-container">
        <img src={cerrar_ventana} className="close-windows" onClick={onClose} />
        <h1 className="title-container">Message</h1>
        <p className="description-conteiner">Send what's on your mind!</p>

        <textarea cols={49} rows={3} className="message" />
        <button className="send-menssage">Send Message</button>
      </div>
    </>
  );
}

export default AddMessage;
