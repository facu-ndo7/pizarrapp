import React from "react";

function Login ({change}) {
    return(
        <>
            <div className="loginRegister-container">
                <h1 className="loginRegister-greeting">Welcome back!</h1>
                <input type="text" placeholder="Username" className="loginRegister-input"/>
                <input type="password" placeholder="Password" className="loginRegister-input"/>
                <button className="loginRegister-button">Login</button>
                <p className="loginRegister-question" onClick={ () => change() }>New? Register here</p>
            </div>
        </>
    )
}

export default Login;