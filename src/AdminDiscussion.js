import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { v4 as uuidv4 } from "uuid";

function AdminDiscussion({ socket }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        senderSocketId: socket.id,
        userId: generateUserId(),
        message: currentMessage,
        time: new Date(Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.senderSocketId !== socket.id) {
        setMessageList((list) => [...list, data]);
      }
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const generateUserId = () => {
    return uuidv4();
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Admin Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              className="message"
              key={index}
              id={messageContent.senderSocketId === socket.id ? "you" : "other"}
            >
              <div className="wwww">
                <div className="message_content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type your message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="send_button" onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default AdminDiscussion;