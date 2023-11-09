import React,{ useState } from "react";
import "./PC.css";
import { Link } from "react-router-dom";
import ChatComponent from "./StudentChatbot";
import "./QAChat.css";

function ProgramCoordinator() {
  return (
    <div id='pc-main-div'>
      <div className="hero">
        <nav className="pc-nav">
          <h6 className="pc-h6">DASHBOARD</h6>
          <ul className="pc-nav-list pc-ul">
            <li className="pc-li">
              <a href={sessionStorage.getItem("userRole") === "admin" ? "/admin" : "/home"} className="pc-a">
                Home
              </a>
            </li>
            <li className="pc-li">
              <a href="profile" className="pc-a">
                Edit Profile
              </a>
            </li>
        
            <li className="pc-li">
              <a href="login" className="pc-a">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="pc-main">
        <section className="pc-functionality">
          <h2 className="pc-h2">
            Students concerns or inquiries related to the program
          </h2>
          <Link to="/Enquiry" className="pc-a">
          <button className="pc-toggle-button">Inquiries Inbox</button>
          </Link>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">Monitor Students Performance Data</h2>
          <Link to="/pcReports" className="pc-a">
          <button className="pc-toggle-button">Reports </button>
          </Link>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">
            Manage All Courses Syllabus, Objectives
          </h2>
          <Link to="/UpdateCourse" className="pc-a">
          <button className="pc-toggle-button">Update Course Content</button>
        </Link>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">Chat with StakeHolders</h2>
          <Link to="/pcdiscussion" className="pc-a">
          <button className="pc-toggle-button">Instructor</button>
        </Link>
        <Link to="/pcdiscussion" className="pc-a">
          <button className="pc-toggle-button">Administrator</button>
        </Link>
        </section>
      </main>
      <div className="chat">
          <ChatComponent />
        </div>
      <footer className="pc-footer">
        <p>&copy; 2023 Program Coordinator Website</p>
      </footer>
    </div>  
  );
}


export default ProgramCoordinator;
