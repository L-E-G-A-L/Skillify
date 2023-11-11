import React, { useState, useEffect, useRef } from "react";
import { TextField, Button} from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import "./QAChat.css";
import axios from 'axios';
import { Footer, QANav } from "./QADash";

const socket = io("http://localhost:3001");

function PersonA() {
  const scrollRef = useRef();

  const [username, setUserName] = useState('');
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const userRole = sessionStorage.getItem('userRole');
    const user_id = sessionStorage.getItem('userId');

    // Scroll to bottom if new message received
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }

    // Setup Socket Events
    const setupEvents = () => {
      socket.on("receive_message", (e) => {
        const data = JSON.parse(e);

        const lastMessage = chatMessages.length
          ? chatMessages[chatMessages.length - 1]
          : null;

        if (
          !(
            lastMessage?.message === data.message &&
            lastMessage?.createdDate === data.createdDate
          )
        ) {
          chatMessages.push(data);
          setChatMessages([...chatMessages]);
        }
      });
    };

    axios
    .get(`https://sxt7404.uta.cloud/php/qausernamefetch.php?user_id=${user_id}&role=${userRole}`)
    .then((response) => {
      console.log(response.data);
      if (response.data.users && response.data.users.user_name) {
        const fetchedUserName = response.data.users.user_name;
        setUserName(fetchedUserName);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    setupEvents();
  }, [chatMessages]);

  // Send Messge
  const sendMessage = (e) => {
    e.preventDefault();

    const data = { username, message, createdDate: new Date() };

    socket.emit("send_message", JSON.stringify(data));

    setMessage("");
  };

  // Welcome User message
  const welcomeMessageView = () => (
    <div className="welcome-chat-container">
      Welcome {username}
    </div>
  );

  // Messages View

  const messagesView = () => (
    <div ref={scrollRef} className="message-chat-container">
      {chatMessages?.map(({ username: otherUsername, message, createdDate }, index) => {
        const self = otherUsername === username;
  
        return (
          <div key={username + index} className={`message-grid ${self ? 'message-self' : 'message-other'}`}>
            <div className={`message-text ${self ? 'textRight' : 'textLeft'}`}>
              {otherUsername}
            </div>
            <div className={`message-typography ${self ? 'message-self-typography' : 'message-other-typography'}`}>
              {message}
            </div>
            <div className={`message-text ${self ? 'textRight' : 'textLeft'}`}>
              {format(new Date(createdDate), 'hh:mm a')}
            </div>
          </div>
        );
      })}
    </div>
  );

  // Send Message Input
  const controlsView = () => (
    <div className="controls-container">
      <div className="text-field">
        <TextField
          autoFocus
          variant="standard"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </div>
      <div className="send-chat-button">
        <Button type="submit">Send</Button>
      </div>
    </div>
  );

  return (
    <form onSubmit={sendMessage} className="form">
    <QANav title="Chat" />
    <div className=".discussion-container">
      <div className="dialogContainer">
        {welcomeMessageView()}

        {messagesView()}

        {controlsView()}
      </div>
    </div>
    <Footer />
  </form>
);
}

export default PersonA;
