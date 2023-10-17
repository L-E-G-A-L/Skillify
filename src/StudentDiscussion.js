import React from "react";
import "./css/studentDiscussion.css";
class StudentDiscussion extends React.Component {
  render() {
    return (
      <div className="studentDiscussion">
        <header class="studentDiscussionHeaderClass">
          <div id="stuDiscussionheader-content">
            <h1>Discussion Forum</h1>
            <a href="student" id="stuDiscussionhome-button">
              Home
            </a>
          </div>

          <nav>
            <ul className="stuDisscussionNavul">
              <li className="stuDisscussionNavLi">
                <a href="#" className="studentDiscussionNava">
                  QA Officer
                </a>
              </li>
              <li>
                <a href="#" className="studentDiscussionNava">
                  Instructor
                </a>
              </li>
              <li className="stuDisscussionNavLi">
                <a href="#" className="studentDiscussionNava">
                  Admin
                </a>
              </li>
              <li className="stuDisscussionNavLi">
                <a href="#" className="studentDiscussionNava">
                  Program Coordinator
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section class="studentDiscussionSectionClass">
          <section id="students" className="studentDiscussionSection">
            <h2>QA Officer</h2>
            <div className="discussion">
              <input type="checkbox" id="discussion1" />
              <label htmlFor="discussion1">Discussion 1</label>
              <div className="discussion-content">
                <p>This is the content of Discussion 1.</p>
              </div>
              <span className="delete-button">Delete</span>
            </div>
            <div className="discussion">
              <input type="checkbox" id="discussion2" />
              <label htmlFor="discussion2">Discussion 2</label>
              <div className="discussion-content">
                <p>This is the content of Discussion 2.</p>
              </div>
              <span className="delete-button">Delete</span>
            </div>
          </section>
          <section id="instructors" className="studentDiscussionSection">
            <h2>Instructors</h2>
          </section>
          <section id="admin" className="studentDiscussionSection">
            <h2>Admin</h2>
          </section>
          <section id="coordinator" className="studentDiscussionSection">
            <h2>Program Coordinator</h2>
          </section>
        </section>
        <footer className="studentDiscussionFooterClass">
          <p>&copy; 2023 Quality Assurance Website</p>
        </footer>
      </div>
    );
  }
}

export default StudentDiscussion;
