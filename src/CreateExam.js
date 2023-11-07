import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function CreateExam() {
  const { id } = useParams();
  const [examId, setExamId] = useState("");
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState(""); // New state for "Exam Date"
  const [examDuration, setExamDuration] = useState(""); // New state for "Exam Duration"
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newOption1, setNewOption1] = useState("");
  const [newOption2, setNewOption2] = useState("");
  const [newOption3, setNewOption3] = useState("");
  const [newOption4, setNewOption4] = useState("");
  const [newActualResponse, setNewActualResponse] = useState("");

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      const question = {
        question_id: questions.length + 1,
        text: `Question ${questions.length + 1}: ${newQuestion}`,
        options: [newOption1, newOption2, newOption3, newOption4],
        actualResponse: newActualResponse,
      };

      setQuestions((prevQuestions) => [...prevQuestions, question]);

      setNewQuestion("");
      setNewOption1("");
      setNewOption2("");
      setNewOption3("");
      setNewOption4("");
      setNewActualResponse("");
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
      exam_id: examId,
      course_id: id,
      exam_name: examName,
      exam_date: examDate, // Include "Exam Date"
      exam_duration: examDuration, // Include "Exam Duration"
      questions: questions.map((question) => ({
        question_text: question.text,
        option1: question.options[0],
        option2: question.options[1],
        option3: question.options[2],
        option4: question.options[3],
        actual_response: question.actualResponse,
      })),
    };

    axios
      .post("https://sxt7404.uta.cloud/php/CreateExam.php", examData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Exam published:", response.data);
        window.alert("Exam published successfully!");
      })
      .catch((error) => {
        console.error("Error publishing exam:", error);
      });
  };

  return (
    
    <div>
       <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="/instructor">
          Instructor_Page
        </a>
        
        <a className="Instructor-right Instructor-a" href="/profile">
          Profile
        </a>
        
        <a className="Instructor-right Instructor-a" href="login">
          Sign Out
        </a>
        </div>
      <h1>Create Exam</h1>
      <h2>For course_id: {id}</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Exam ID"
          value={examId}
          onChange={(e) => setExamId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Exam Name"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Exam Date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Exam Duration"
          value={examDuration}
          onChange={(e) => setExamDuration(e.target.value)}
        />
      </div>

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
          <input
            type="text"
            placeholder="Enter Actual Response"
            value={question.actualResponse}
            onChange={(e) => {
              const updatedQuestions = [...questions];
              updatedQuestions[questionIndex].actualResponse = e.target.value;
              setQuestions(updatedQuestions);
            }}
          />
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
        <input
          type="text"
          placeholder="Enter Actual Response"
          value={newActualResponse}
          onChange={(e) => setNewActualResponse(e.target.value)}
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <button onClick={publishExam}>Publish</button>
      <footer className="Instructor-footer">
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default CreateExam;
