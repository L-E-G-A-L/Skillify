import React from "react";
import "./PC.css";

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
              <a href="#" className="pc-a">
                Settings
              </a>
            </li>
            <li className="pc-li">
              <a href="#" className="pc-a">
                Help & Support
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
          <button className="pc-toggle-button">Inquiries Inbox</button>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">Monitor Students Performance Data</h2>
          <a href="reports" className="pc-a">
            <button className="pc-toggle-button">Reports</button>
          </a>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">
            Manage All Courses Syllabus, Objectives, Assessments
          </h2>
          <button className="pc-toggle-button">Update Course Content</button>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">Discussion Boards</h2>
          <a href="pcChat" className="pc-a">
            <button className="pc-toggle-button">Chat</button>
          </a>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">Reviews and Evaluations of the Programs</h2>
          <button className="pc-toggle-button">Evaluations Reports</button>
        </section>
        <section className="pc-functionality">
          <h2 className="pc-h2">StakeHolders</h2>
          <button className="pc-toggle-button">Instructors</button>
          <button className="pc-toggle-button">Administrators</button>
        </section>
      </main>
      <footer className="pc-footer">
        <p>&copy; 2023 Program Coordinator Website</p>
      </footer>
    </div>
  );
}

export default ProgramCoordinator;
