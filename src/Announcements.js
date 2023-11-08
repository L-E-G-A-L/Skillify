import React from "react";
import "./css/announcements.css";
import axios from "axios";
import MessageCard from "./MessageCard";

class Announcements extends React.Component {
  state = {
    announcements: [],
    loading: true,
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
        this.setState({ announcements: response.data, loading: false });
      });
  }

  render() {
    return (
      <div>
        <header className="announcementsHeaderClass">
          <nav className="announcementsNav">
            <ul className="announcementsnav-list navUl">
              <li className="announcementNavLiClass">
                <a href="student" className="announcementNavLiaClass">
                  <i className="material-icons">home</i>
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
          {this.state.loading ? (
            <p>Loading...</p>
          ) : this.state.announcements.length > 0 ? (
            this.state.announcements.map((announcement, index) => (
              <div className="announcement" key={announcement.announcement_id}>
                <h2>Announcement #{index + 1}</h2>
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
