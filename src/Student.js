import React from "react";
import "./Student.css";

class Student extends React.Component {
  render() {
    return (
      <div>
        <header className="headerClass">
          <nav className="student-nav">
            <ul className="nav-list">
              <li>
                <a href="announcements">
                  <i className="material-icons">notifications</i>
                  <span className="notification-badge">2</span>
                </a>
              </li>
              <li>
                <a href="home">
                  <i className="material-icons">insert_drive_file</i>
                </a>
              </li>
              <li>
                <a href="profile.html">
                  <i className="material-icons">person</i>
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="material-icons">logout</i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="tiles">
          <div className="tile">
            <div className="tile-row">
              <h2>SE 5335 001</h2>
            </div>
            <div className="tile-row">
              <a href="announcements">
                <button className="student-btn">Announcements</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="courseModules">
                <button className="student-btn">Modules</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="assessments">
                <button className="student-btn">Assessments</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="grades">
                <button className="student-btn">Grades</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="studentDiscussion">
                <button className="student-btn">Discussions</button>
              </a>
            </div>
          </div>
          <div className="tile">
            <div className="tile-row">
              <h2>SE 5335 002</h2>
            </div>
            <div className="tile-row">
              <a href="announcements">
                <button className="student-btn">Announcements</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="courseModules">
                <button className="student-btn">Modules</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="assessments">
                <button className="student-btn">Assessments</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="grades">
                <button className="student-btn">Grades</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="studentDiscussion">
                <button className="student-btn">Discussions</button>
              </a>
            </div>
          </div>
          <div className="tile">
            <div className="tile-row">
              <h2>SE 5335 003</h2>
            </div>
            <div className="tile-row">
              <a href="announcements">
                <button className="student-btn">Announcements</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="courseModules">
                <button className="student-btn">Modules</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="assessments">
                <button className="student-btn">Assessments</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="grades">
                <button className="student-btn">Grades</button>
              </a>
            </div>
            <div className="tile-row">
              <a href="studentDiscussion">
                <button className="student-btn">Discussions</button>
              </a>
            </div>
          </div>
          <h2 className="chat">
            Need to talk to anyone? <a href="studentChat">Click here</a>
          </h2>
        </section>
        <footer className="footerClass">
          <p>&copy; 2023 Program Coordinator Website</p>
        </footer>
      </div>
    );
  }
}

export default Student;
