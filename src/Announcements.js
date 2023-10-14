import React from "react";
import "./css/announcements.css";
class Announcements extends React.Component {
  render() {
    return (
      <div>
        <header className="announcementsHeaderClass">
          <nav class="announcementsNav">
            <ul className="announcementsnav-list navUl">
              <li className="announcementNavLiClass">
                <a href="announcements" className="announcementNavLiaClass">
                  <i className="material-icons">notifications</i>
                  <span className="notification-badge">2</span>
                </a>
              </li>
              <li>
                <a href="#" className="announcementNavLiaClass">
                  <i className="material-icons">insert_drive_file</i>
                </a>
              </li>
              <li className="announcementNavLiClass">
                <a href="profile" className="announcementNavLiaClass">
                  <i className="material-icons">person</i>
                </a>
              </li>
              <li className="announcementNavLiClass">
                <a href="login" className="announcementNavLiaClass">
                  <i className="material-icons">logout</i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="announcementContainer">
          <div className="announcement">
            <h2>Announcement #1</h2>
            <p>Exam-1 would be conducted on next Tuesday!</p>
          </div>
          <div className="announcement">
            <h2>Announcement #2</h2>
            <p>Assignment-1 is due on Sept 26, 2023 by 11:59PM</p>
          </div>
          <div className="announcement">
            <h2>Announcement #3</h2>
            <p>
              Please use external stylesheet for CSS part while building your
              project
            </p>
          </div>
          <div className="announcement">
            <h2>Announcement #4</h2>
            <p>There is no className today</p>
          </div>
          <div className="announcement">
            <h2>Announcement #5</h2>
            <p>Today's className will be onsite</p>
          </div>
        </div>
        <footer className="announcementFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Announcements;
