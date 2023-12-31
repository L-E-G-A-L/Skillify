import React from "react";
import "./css/student.css";
import ChatComponent from "./StudentChatbot";
import { onLogOut } from "./GlobalFunctions";
class Student extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    fetch("https://sxt7404.uta.cloud/php/courses.php")
      .then((response) => response.json())
      .then((data) => this.setState({ courses: data }))
      .catch((error) => console.error("Error fetching courses:", error));
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        <header className="studentHeaderClass">
          <nav>
            <ul className="studentNav-list studentNavUl">
              <li className="studentNavULLi">
                <a href="viewAllAnnouncements" className="studentNavULLia">
                  <i className="material-icons">notifications</i>
                </a>
              </li>
              <li className="studentNavULLi">
                <a href="profile" className="studentNavULLia">
                  <i className="material-icons">person</i>
                </a>
              </li>
              <li className="studentNavULLi">
                <a
                  href="login"
                  className="studentNavULLia"
                  onClick={() => onLogOut()}
                >
                  <i className="material-icons">logout</i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="tiles">
          {courses.map((course, index) => (
            <div className="tile" key={index}>
              <div className="tile-row">
                <h2>{course.course_name}</h2>
              </div>
              <div className="tile-row">
                <a href={`/announcements?course_id=${course.course_id}`}>
                  <button className="stuButtonClass">Announcements</button>
                </a>
              </div>
              <div className="tile-row">
                <a href={`/courseModules?course_id=${course.course_id}`}>
                  <button className="stuButtonClass">Modules</button>
                </a>
              </div>
              <div className="tile-row">
                <a href={`/assessments?course_id=${course.course_id}`}>
                  <button className="stuButtonClass">Assessments</button>
                </a>
              </div>
              <div className="tile-row">
                <a href={`/grades?course_id=${course.course_id}`}>
                  <button className="stuButtonClass">Grades</button>
                </a>
              </div>
              <div className="tile-row">
                <a href="studentDiscussion">
                  <button className="stuButtonClass">Discussions</button>
                </a>
              </div>
            </div>
          ))}
        </section>
        <div className="chat">
          <ChatComponent />
        </div>
        <footer className="studentfooterClass">
          <p>&copy; 2023 Program Coordinator Website</p>
        </footer>
      </div>
    );
  }
}

export default Student;
