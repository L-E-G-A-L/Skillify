import React, { Component } from "react";
import axios from "axios";
import "./exam-questions.css";
import MessageCard from "./MessageCard";

class ExamQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      timer: 0,
      userResponses: {},
      submitted: false,
      error: null,
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const exam_id = searchParams.get("exam_id");
    this.fetchQuestions(exam_id);
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
    axios
      .post("https://sxt7404.uta.cloud/php/submitted_answers.php", {
        exam_id: exam_id,
        user_id: user_id,
        course_id: 1,
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
          </header>
          <MessageCard message="Thank You! Your answers have been submitted successfully!" />
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
          <p className="time-left">Time Left: {timer} seconds</p>
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
                          this.handleAnswerSelection(index, question.option1)
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
                          this.handleAnswerSelection(index, question.option2)
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
                          this.handleAnswerSelection(index, question.option3)
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
                          this.handleAnswerSelection(index, question.option4)
                        }
                      />
                      {question.option4}
                    </label>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <MessageCard message="Please wait until the questions load" />
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
