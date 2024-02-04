import React from "react";
import "./Notification.css";
import bellIcon from "./../assets/bell.png";

function Notification() {
    return ( <div className="notification-container">
    <img src={bellIcon} alt="notification" width={30} height={30}></img>
    </div> );
}

export default Notification;