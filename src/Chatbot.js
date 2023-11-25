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

  const getBotResponse = async (userMessage) => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `User: ${userMessage}`,
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      const responseData = await response.json();
      const botResponse = responseData.choices[0].text;
      return botResponse;
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return 'Sorry, I couldn\'t understand your request. Please try again.';
    }
  };

  const handleUserInput = async () => {
    const userMessage = userInput.trim();
    if (userMessage === "") return;

    const updatedMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(updatedMessages);

    const botResponse = await getBotResponse(userMessage);

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