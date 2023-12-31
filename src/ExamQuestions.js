import React, { Component } from "react";
import axios from "axios";
import "./css/exam-questions.css";
import MessageCard from "./MessageCard";

class ExamQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      timer: 0, // Timer in seconds
      userResponses: {},
      submitted: false,
      error: null,
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const exam_id = searchParams.get("exam_id");
    const exam_duration = searchParams.get("exam_duration");

    if (!isNaN(exam_duration)) {
      this.setState({ timer: exam_duration * 60 });
      this.fetchQuestions(exam_id);
      this.timerInterval = setInterval(this.updateTimer, 1000);
    } else {
      this.setState({ error: "Invalid exam_duration" });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  fetchQuestions = (exam_id) => {
    axios
      .get(
        `https://sxt7404.uta.cloud/php/exam_questions.php?exam_id=${exam_id}`
      )
      .then((response) => {
        this.setState({ questions: response.data, error: null });
      })
      .catch((error) => {
        this.setState({ error: "Error fetching questions" });
      });
  };

  handleAnswerSelection = (questionIndex, selectedAnswer) => {
    this.setState((prevState) => {
      const userResponses = { ...prevState.userResponses };
      userResponses[questionIndex] = selectedAnswer;
      return { userResponses };
    });
  };

  submitExam = () => {
    const userResponses = this.state.userResponses;
    const searchParams = new URLSearchParams(window.location.search);
    const exam_id = searchParams.get("exam_id");
    const user_id = sessionStorage.getItem("userId");
    const course_id = searchParams.get("course_id");
    axios
      .post("https://sxt7404.uta.cloud/php/submitted_answers.php", {
        exam_id: exam_id,
        user_id: user_id,
        course_id: course_id,
        user_responses: userResponses,
      })
      .then((response) => {
        if (response.data.message === "Exam responses submitted successfully") {
        }
      })
      .catch((error) => {
        console.error("Error submitting answers:", error);
      });
    this.setState({ submitted: true });
  };

  updateTimer = () => {
    this.setState((prevState) => {
      if (prevState.timer > 0) {
        return { timer: prevState.timer - 1 };
      } else {
        clearInterval(this.timerInterval);
        this.submitExam();
        return null;
      }
    });
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  render() {
    const { questions, timer, submitted, error } = this.state;

    if (error) {
      return (
        <div>
          <h1>Exam Questions</h1>
          <p>Error: {error}</p>
        </div>
      );
    }

    if (submitted) {
      return (
        <div>
          <header className="examsHeaderClass">
            <h1 className="examsHeaderh1Class">Exam</h1>
            <a href="student" className="announcementNavLiaClass">
              <i className="material-icons">home</i>
            </a>
          </header>
          <div class="submissionContainer">
            <MessageCard message="Thank You! Your answers have been submitted successfully!" />
          </div>
          <footer className="examQuestionsFooter">
            <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
          </footer>
        </div>
      );
    }

    return (
      <div>
        <header className="examsHeaderClass">
          <h1 className="examsHeaderh1Class">Exam</h1>
        </header>
        <div className="exam-container">
          {Array.isArray(questions) && questions.length > 0 && (
            <p className="time-left">Time Left: {this.formatTime(timer)}</p>
          )}
          <form className="exam-form">
            {Array.isArray(questions) ? (
              questions.map((question, index) => (
                <div className="question-card" key={index}>
                  <h2 className="question-title">{question.question_text}</h2>
                  <div className="question-options">
                    <label>
                      <input
                        type="radio"
                        name={`answer${index}`}
                        value={question.option1}
                        onChange={() =>
                          this.handleAnswerSelection(
                            question.question_id,
                            question.option1
                          )
                        }
                      />
                      {question.option1}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`answer${index}`}
                        value={question.option2}
                        onChange={() =>
                          this.handleAnswerSelection(
                            question.question_id,
                            question.option2
                          )
                        }
                      />
                      {question.option2}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`answer${index}`}
                        value={question.option3}
                        onChange={() =>
                          this.handleAnswerSelection(
                            question.question_id,
                            question.option3
                          )
                        }
                      />
                      {question.option3}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`answer${index}`}
                        value={question.option4}
                        onChange={() =>
                          this.handleAnswerSelection(
                            question.question_id,
                            question.option4
                          )
                        }
                      />
                      {question.option4}
                    </label>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <MessageCard message="Please wait for the instructor to release the exam questions! " />
              </div>
            )}
            {Array.isArray(questions) && questions.length > 0 && (
              <button className="submit-button" onClick={this.submitExam}>
                Submit Exam
              </button>
            )}
          </form>
        </div>
        <footer className="examQuestionsFooter">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default ExamQuestions;
