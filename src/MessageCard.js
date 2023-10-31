import React from "react";
import "./css/MessageCard.css";
const MessageCard = ({ message }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

export default MessageCard;
