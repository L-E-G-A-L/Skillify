import React from 'react';
import './InstructorChat.css';

function ChatApp() {
  return (
    <div className="instructorChat-chat-box">
      <div className="instructorChat-chat-header">
        Chat
      </div>
      <div className="instructorChat-chat-messages">
        <div className="instructorChat-sender-message">
          Hello Professor Mark! I have a few suggestions for course SE 5335 001?
        </div>
        <div className="instructorChat-receiver-message">
          Sure QA Officer, please let me know
        </div>
      </div>
      <div className="instructorChat-chat-input">
        <input type="text" placeholder="Type your message..." className='InsChat-input-text'/>
        <button className='InsChat-button'>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
