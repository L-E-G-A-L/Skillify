import React from "react";
import "./PCChat.css";

const Chat = () => {
  return (
    <div className="pc-chat-box">
      <div className="pc-chat-header">Chat</div>
      <div className="pc-chat-messages">
        <div className="message  pc-sender-message">
          Hello Administrator, can you provide me the access to view report.pdf?
        </div>
        <div className="message  pc-receiver-message">Sure</div>
      </div>
      <div className="pc-chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          className="pcchat-input-text"
        />
        <button className="pcchat-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;
