import React from "react";
import "./PCChat.css";

const Chat = () => {
  return (
    <div className="pc-chat-box">
      <div className="pc-chat-header">Chat</div>
      <div className="pc-chat-messages">
        <div className="message  pc-sender-message">
          Hello , to improve the performance of the students, we have to think of a new plan of action.
        </div>
        <div className="message  pc-receiver-message">Sure, lets connect.</div>
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
