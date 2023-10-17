import React from 'react';
import './css/chat.css';

function AdminChat() {
  return (
    <div className="chat-box">
      <div className="chat-header">Chat</div>
      <div className="chat-messages">
        <div className="message sender-message">
          Hello Alex! Could you add two-step authentication to your account?
        </div>
        <div className="message receiver-message">
          Sure, Administrator. I would do that.
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button className='sendButtonClass'>Send</button>
      </div>
    </div>
  );
}

export default AdminChat;
