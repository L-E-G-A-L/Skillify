import React from "react";
import "./PC.css";
import { Link } from "react-router-dom";

function ProgramCoordinator() {
  return (
    <div id='pc-main-div'>
      <div className="hero">
        <nav className="pc-nav">
          <h6 className="pc-h6">DASHBOARD</h6>
          <ul className="pc-nav-list pc-ul">
            <li className="pc-li">
              <a href="home" className="pc-a">
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
          <a href="reports" className="pc-a">
            <button className="pc-toggle-button">Reports</button>
          </a>
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
          <h2 className="pc-h2">Discussion Boards</h2>
          <a href="pcChat" className="pc-a">
            <button className="pc-toggle-button">Chat</button>
          </a>
        </section>
        
      </main>
      <footer className="pc-footer">
        <p>&copy; 2023 Program Coordinator Website</p>
      </footer>
    </div>  
  );
}

export default ProgramCoordinator;
