import React from "react";
import "./css/chat.css";
class StudentChat extends React.Component {
  render() {
    return (
      <div class="chatClass">
        <div class="chat-box">
          <div class="chat-header">Chat</div>
          <div class="chat-messages">
            <div class="message sender-message">
              Hello Professor Mark! I have a question related to HTML
            </div>
            <div class="message receiver-message">Sure, What's that?</div>
          </div>
          <div class="chat-input">
            <input
              class="inputClass"
              type="text"
              placeholder="Type your message..."
            />
            <button class="sendButtonClass">Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentChat;
