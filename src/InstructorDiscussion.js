import React from "react";
import "./InstructorDiscussion.css";

class InstructorDiscussion extends React.Component {
  render() {
    return (
      <div>
        <header className="id-header">
          <div id="header-content">
            <h1>Discussion Forum</h1>
            <a href="/instructor" id="home-button" className="id-a">
              Home
            </a>
          </div>
        </header>
        <nav className="id-nav">
          <ul className="id-ul">
            <li className="id-li">
              <a href="#" className="id-a">
                Student
              </a>
            </li>
            <li className="id-li">
              <a href="#" className="id-a">
                QA Officer
              </a>
            </li>
            <li className="id-li">
              <a href="#" className="id-a">
                Admin
              </a>
            </li>
            <li className="id-li">
              <a href="#" className="id-a">
                Program Coordinator
              </a>
            </li>
          </ul>
        </nav>
        <section className="id-section" id="students">
          <h2>Students</h2>
          <div className="instructorDiscussion-discussion">
            <input
              type="checkbox"
              id="discussion1"
              className="id-input-chkbx"
            />
            <label className="id-label" for="discussion1">
              Discussion 1
            </label>
            <div className="instructorDiscussion-discussion-content">
              <p>This is the content of Discussion 1.</p>
            </div>
            <span className="instructorDiscussion-delete-button">Delete</span>
          </div>
          <div className="instructorDiscussion-discussion">
            <input
              type="checkbox"
              id="discussion2"
              className="id-input-chkbx"
            />
            <label className="id-label" for="discussion2">
              Discussion 2
            </label>
            <div className="instructorDiscussion-discussion-content">
              <p>This is the content of Discussion 2.</p>
            </div>
            <span className="instructorDiscussion-delete-button">Delete</span>
          </div>
        </section>
        <section className="id-section" id="instructors">
          <h2>QA Officer</h2>
        </section>
        <section className="id-section" id="admin">
          <h2>Admin</h2>
        </section>
        <section className="id-section" id="coordinator">
          <h2>Program Coordinator</h2>
        </section>
        <footer className="id-footer">
          <p>&copy; 2023 Quality Assurance Website</p>
        </footer>
      </div>
    );
  }
}

export default InstructorDiscussion;
