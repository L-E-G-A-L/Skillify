import React, { useState, useEffect } from "react";
import axios from "axios";

function AutoGrader() {
  const [responses, setResponses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gradingInProgress, setGradingInProgress] = useState(false);
  const [feedbackText, setFeedbackText] = useState({}); // New state for feedback text

  useEffect(() => {
    axios
      .get("https://sxt7404.uta.cloud/php/grader.php")
      .then((response) => {
        console.log(response.data); // Debug the response
        setResponses(response.data.responses);
      })
      .catch((error) => {
        console.error("Error fetching exam responses:", error);
      });
  }, []);

  const calculateAllGrades = () => {
    setGradingInProgress(true);

    axios
      .get("https://sxt7404.uta.cloud/php/grader.php?calculate_grades=true")
      .then((response) => {
        setGrades(response.data.grades);
        setGradingInProgress(false);
      })
      .catch((error) => {
        console.error("Error calculating grades:", error);
        setGradingInProgress(false);
      });
  };

  const handlePublishResult = (userId, courseId, examId, feedbackText) => {
    axios
      .post("https://sxt7404.uta.cloud/php/publishExamResult.php", {
        user_id: userId,
        course_id: courseId,
        exam_id: examId,
        feedback: feedbackText,
      })
      .then((response) => {
        console.log("====>", response.data);
      })
      .catch((error) => {
        console.error("Error publishing feedback:", error);
      });

    clearFeedbackForUser(userId);
  };

  // Group responses by unique user, course, and exam combinations
  const groupedResponses = responses.reduce((acc, response) => {
    const key = `${response.user_id}-${response.course_id}-${response.exam_id}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(response);
    return acc;
  }, {});

  const clearFeedbackForUser = (userId) => {
    setFeedbackText((prevFeedbackText) => ({
      ...prevFeedbackText,
      [userId]: "",
    }));
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
      <h1>Auto Grade Students</h1>
      {responses && responses.length > 0 ? (
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Response ID</th>
              <th>User ID</th>
              <th>Course ID</th>
              <th>Exam ID</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response) => (
              <tr key={response.id}>
                <td>{response.id}</td>
                <td>{response.user_id}</td>
                <td>{response.course_id}</td>
                <td>{response.exam_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No responses available.</p>
      )}
      {gradingInProgress ? (
        <p>Grading in progress...</p>
      ) : (
        <button onClick={calculateAllGrades}>Grade All</button>
      )}
      {grades && grades.length > 0 && (
        <div>
          <h2>Grades</h2>
          <ul>
            {grades.map((grade) => (
              <li key={grade.user_id}>
                {`User ID: ${grade.user_id}, Course ID: ${grade.course_id}, Exam ID: ${grade.exam_id} - Grade: ${grade.grade}`}
                <div>
                  <input
                    type="text"
                    value={feedbackText[grade.user_id] || ""}
                    onChange={(e) =>
                      setFeedbackText({
                        ...feedbackText,
                        [grade.user_id]: e.target.value,
                      })
                    }
                    placeholder="Enter feedback"
                  />
                  <button
                    onClick={() =>
                      handlePublishResult(
                        grade.user_id,
                        grade.course_id,
                        grade.exam_id,
                        feedbackText[grade.user_id]
                      )
                    }
                  >
                    Publish
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <footer className="Instructor-footer">
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default AutoGrader;
