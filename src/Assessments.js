import React, { Component } from "react";
import "./css/assessments.css";
import axios from "axios";
class Assessments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    axios
      .get(`http://localhost/assessments.php?course_id=${courseId}`)
      .then((response) => {
        console.log("resp:", response.data);
        this.setState({ exams: response.data });
      });
  }

  render() {
    const { exams } = this.state;
    return (
      <div>
        <header className="assessmentsHeaderClass">
          <h1 className="assessmentsh1Class">My Exams</h1>
        </header>
        <div className="assessmentsContainer">
          <ul className="exam-list">
            {exams.map((exam, index) => (
              <li key={index} className="exam">
                <h2>{exam.exam_name}</h2>
                <p>Date: {exam.exam_date}</p>
                <p>Duration: {exam.exam_duration}</p>
                <a href="#">Start Exam</a>
              </li>
            ))}
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
