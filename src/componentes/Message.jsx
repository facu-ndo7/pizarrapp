import React from "react";
import facu from "../iconos/fotaza.jpg";

function Message () {
    return(
        <>
            <div className="message-container">

                <img src={facu} className="user-photo"/>

                <div className="message-content">
                    <h1 className="user-name">Facu-ndo7</h1>
                    <p className="user-hour">Sent about 1 hour ago</p>
                    <p className="user-message">HOLAAAAAA</p>
                </div>
            </div>
        </>
    )
}

export default Message;