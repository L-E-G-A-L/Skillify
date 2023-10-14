import React from "react";
import "./css/assessments.css";
class Assessments extends React.Component {
  render() {
    return (
      <div>
        <header className="assessmentsHeaderClass">
          <h1 className="assessmentsh1Class">My Exams</h1>
        </header>
        <div className="assessmentsContainer">
          <ul className="exam-list">
            <li className="exam">
              <h2>Exam-1</h2>
              <p>Date: September 30, 2023</p>
              <p>Time: 9:00 AM - 11:00 AM</p>
              <a href="#">Start Exam</a>
            </li>
            <li className="exam">
              <h2>Exam-2</h2>
              <p>Date: October 15, 2023</p>
              <p>Time: 2:00 PM - 4:00 PM</p>
              <a href="#">Start Exam</a>
            </li>
          </ul>
        </div>

        <footer className="assessmentsFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Assessments;
