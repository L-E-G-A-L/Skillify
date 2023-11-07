import React from "react";


const PcAdminChat = () => {
  return (
    <div className="chat-box">
      <div className="chat-header">Admin Chat</div>
      <div className="chat-messages">
        <div className="message sender-message">
          Welcome, administrator. We need to review the recent system updates.
        </div>
        <div className="message receiver-message">
          Yes, I'm available to discuss the updates.
        </div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input-text"
        />
        <button className="chat-button">Send</button>
      </div>
    </div>
  );
};

export default PcAdminChat;
