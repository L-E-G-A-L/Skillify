import React, { useState } from "react";
import axios from "axios";
function CreateExam() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newOption1, setNewOption1] = useState("");
  const [newOption2, setNewOption2] = useState("");
  const [newOption3, setNewOption3] = useState("");
  const [newOption4, setNewOption4] = useState("");

  // let questionIdCounter = 1;

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      const question = {
        question_id: questions.length + 1,
        text: `Question ${questions.length + 1}: ${newQuestion}`,
        options: [newOption1, newOption2, newOption3, newOption4],
      };

      setQuestions((prevQuestions) => [...prevQuestions, question]);

      // questionIdCounter++;

      setNewQuestion("");
      setNewOption1("");
      setNewOption2("");
      setNewOption3("");
      setNewOption4("");
    }
  };

  const deleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions
        .filter((_, i) => i !== index)
        .map((question, i) => ({
          ...question,
          text: `Question ${i + 1}: ${question.text.substring(
            question.text.indexOf(":") + 1
          )}`,
        }));
      return updatedQuestions;
    });
  };

  const publishExam = () => {
    const examData = {
      questions: questions,
    };
    console.log("===>80===>", examData);
    axios
      .post("http://localhost/CreateExam.php", examData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Exam published:", response.data);
        // You can perform further actions here if needed
      })
      .catch((error) => {
        console.error("Error publishing exam:", error);
      });
  };

  return (
    <div>
      <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="#">
          Notifications
        </a>
        <a className="Instructor-right Instructor-a" href="#">
          Files
        </a>
        <a className="Instructor-right Instructor-a" href="profile">
          Profile
        </a>
        <a className="Instructor-right Instructor-a" href="#">
          Settings
        </a>
        <a className="Instructor-right Instructor-a" href="login">
          Sign Out
        </a>
      </div>
      <h1>Create Exam</h1>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.text}</h3>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[questionIndex].options[optionIndex] =
                      e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                />
              </li>
            ))}
          </ul>
          <button onClick={() => deleteQuestion(questionIndex)}>
            Delete Question
          </button>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Enter a new question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 1"
          value={newOption1}
          onChange={(e) => setNewOption1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 2"
          value={newOption2}
          onChange={(e) => setNewOption2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 3"
          value={newOption3}
          onChange={(e) => setNewOption3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option 4"
          value={newOption4}
          onChange={(e) => setNewOption4(e.target.value)}
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <button onClick={publishExam}>Publish</button>{" "}
      {/* The "Publish" button */}
      <footer className="Instructor-footer">
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default CreateExam;
