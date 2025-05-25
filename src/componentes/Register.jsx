import React from "react";
import { useRef } from "react";


function Register ({change}) {

    let userName = useRef();
    let userEmail = useRef();
    let userPassword = useRef();

    return(
        <>
            <div className="loginRegister-container">
                <h1 className="loginRegister-greeting">Welcome to Pizarrapp!</h1>
                <input type="text" placeholder="Create username" className="loginRegister-input" ref={userName}/>
                <input type="email" placeholder="Add your email" className="loginRegister-input" ref={userEmail}/>
                <input type="password" placeholder="Create Password" className="loginRegister-input" ref={userPassword}/>
                <button className="loginRegister-button" onClick={() => registerUser(userName, userEmail, userPassword)}>Register</button>
                <p className="loginRegister-question" onClick={() => change()}>Have you an account? Click Here</p>
            </div>
        </>
    )
}

function registerUser (name, email, password) {
    if (name.current.value === "" || email.current.value  === "" || password.current.value  === "") {
        alert("Complete todos los campos");
    } else {
        fetch("http://localhost:8080/API/registerUsers.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName": name.current.value,
                "userEmail": email.current.value,
                "userPassword": password.current.value
            })
        })
        .then(respuesta => {
            if(!respuesta.ok){
                alert("Fallo al enviar los datos");
            } else {
                alert("Bien ahi papá");
            }
        })
        .catch(error => {
            alert("Error al ejecutar fetch: " + error)
        })
    }
}


export default Register;