import React, { useState } from "react";
import "./Chatbot.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I assist you today?", isUser: false },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  function getBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes("profile")) {
      return "You can access your profile by clicking on your username at the top right.";
    } else if (userMessage.toLowerCase().includes("update")) {
      return "To update your profile, go to the 'Profile Settings' page and click 'Edit Profile'.";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "Sure, I can help you with your user profile. What do you need assistance with?";
    } else {
      return "I'm sorry, I couldn't understand your request. Please try again.";
    }
  }

  const handleUserInput = () => {
    const userMessage = userInput.trim();
    if (userMessage === "") return;

    const updatedMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(updatedMessages);

    const botResponse = getBotResponse(userMessage);

    setTimeout(() => {
      setMessages([...updatedMessages, { text: botResponse, isUser: false }]);
    }, 1000);

    setUserInput("");
  };

  return (
    <body className="chatbody">
      <div>
        <div
          className={`chat-popup-button ${isOpen ? "open" : ""}`}
          onClick={toggleChat}
        >
          <img src="Chatbot.png" alt="Robot Icon" className="robot-icon" />
        </div>
        {isOpen && (
          <div className="chat-container">
            <div className="chat-header" onClick={toggleChat}>
              <h2>User Profile Help</h2>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.isUser ? "user-message" : "bot-message"}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div>
              <input
                type="text"
                className="user-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button className="send-button" onClick={handleUserInput}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </body>
  );
};

export default ChatComponent;
