import React, { Component } from "react";
import "./css/assessments.css";
import axios from "axios";
import MessageCard from "./MessageCard";
class Assessments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
      selectedExam: null,
      courseId: null,
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    axios
      .get(
        `https://sxt7404.uta.cloud/php/assessments.php?course_id=${courseId}`
      )
      .then((response) => {
        console.log("resp:", response.data);
        this.setState({ exams: response.data });
      });
  }
  startExam = (exam) => {
    this.setState({ selectedExam: exam });
  };
  render() {
    const { exams, courseId } = this.state;
    return (
      <div>
        <header className="assessmentsHeaderClass">
          <h1 className="assessmentsh1Class">My Exams</h1>
        </header>
        <div className="assessmentsContainer">
          {exams !== "No exams found" ? (
            <ul className="exam-list">
              {exams.map((exam, index) => (
                <ul key={index} className="exam">
                  <h2>{exam.exam_name}</h2>
                  <p>Date: {exam.exam_date}</p>
                  <p>Duration: {exam.exam_duration}</p>
                  <button onClick={() => this.startExam(exam)}>
                    {" "}
                    <a
                      href={`/exam-questions?exam_id=${exam.exam_id}&course_id=${courseId}`}
                    >
                      Start Exam
                    </a>
                  </button>
                </ul>
              ))}
            </ul>
          ) : (
            <MessageCard message="The instructor has not created exams for this course" />
          )}
        </div>
        <footer className="assessmentsFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Assessments;
