import React, { useState } from "react";
import "./Discussion.css";
import { useNavigate } from 'react-router-dom';
import "./QAChat.css";
import { Footer, QANav } from "./QADash";
import { Link } from "react-router-dom";

function DiscussionForum() {
  const [isInnerNavVisible, setIsInnerNavVisible] = useState(true);
  return (
    <html lang="en">
      <body className="disbody">
        <QANav
          title="Discussions"
          toggleInnerNav={() => setIsInnerNavVisible(!isInnerNavVisible)}
        />
        {isInnerNavVisible && <InnerNav />}
        <StudentContent />
        <IAPContent title="Instructor" />
        <IAPContent title="Admin" />
        <IAPContent title="Program Coordinator" />
        <Footer />
      </body>
    </html>
  );
}
function InnerNav() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  const handleChatButtonClick = () => {
    navigate('/persona');
    setShowChat(true);
  };
  return (
    <nav className="disnav">
      <ul className="disul">
        <li className="disli">
          <Link className="link" to="/qastudentdiscussion">
            <a className="disa">Student</a>
          </Link>
        </li>
        <li className="disli">
        <a className="disa" onClick={handleChatButtonClick}>Instructor</a>
        </li>
        <li className="disli">
          <a className="disa" href="#">
            Admin
          </a>
        </li>
        <li className="disli">
          <a className="disa" href="#">
            Program Coordinator
          </a>
        </li>
      </ul>
    </nav>
  );
}
function StudentContent() {
  return (
    <section id="students">
      <h2 className="dish2">Students</h2>
      <div className="discussion">
        <input type="checkbox" id="discussion1" />
        <label htmlFor="discussion1">Discussion 1</label>
        <div className="discussion-content">
          <p className="disp">This is the content of Discussion 1.</p>
        </div>
        <span className="delete-button-dis">Delete</span>
      </div>
      <div className="discussion">
        <input type="checkbox" id="discussion2" />
        <label htmlFor="discussion2">Discussion 2</label>
        <div className="discussion-content">
          <p className="disp">This is the content of Discussion 2.</p>
        </div>
        <span className="delete-button-dis">Delete</span>
      </div>
    </section>
  );
}
function IAPContent({ title }) {
  return (
    <section id={title}>
      <h2 className="dish2">{title}</h2>
    </section>
  );
}

export default DiscussionForum;
