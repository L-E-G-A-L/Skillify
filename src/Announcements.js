import React from "react";
import "./css/announcements.css";
import axios from "axios";
import MessageCard from "./MessageCard";
class Announcements extends React.Component {
  state = {
    announcements: [],
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");

    axios
      .get(
        `https://sxt7404.uta.cloud/php/announcements.php?course_id=${courseId}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ announcements: response.data });
      });
  }
  render() {
    return (
      <div>
        <header className="announcementsHeaderClass">
          <nav className="announcementsNav">
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
          {this.state.announcements.length > 0 ? (
            this.state.announcements.map((announcement) => (
              <div className="announcement" key={announcement.announcement_id}>
                <h2>Announcement #{announcement.announcement_id}</h2>
                <p>{announcement.announcement_message}</p>
              </div>
            ))
          ) : (
            <MessageCard message="Announcements are not yet posted by the instructor" />
          )}
        </div>
        <footer className="announcementFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Announcements;
