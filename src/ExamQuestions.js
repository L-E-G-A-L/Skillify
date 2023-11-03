import React, { Component } from "react";
import axios from "axios";

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
      .get(`http://localhost/exam_questions.php?exam_id=${exam_id}`)
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
    axios
      .post("http://localhost/submitted_answers.php", {
        exam_id: exam_id,
        user_id: 1,
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
          <h1>Thank You</h1>
          <p>Your answers have been submitted successfully!</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Exam Questions</h1>
        <p>Time Left: {timer} seconds</p>
        <form>
          {questions.map((question, index) => (
            <div key={index}>
              <p>{question.question_text}</p>
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
          ))}
          <button onClick={this.submitExam}>Submit Exam</button>
        </form>
      </div>
    );
  }
}

export default ExamQuestions;
