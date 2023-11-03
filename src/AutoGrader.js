import React, { useState, useEffect } from "react";
import axios from "axios";

function AutoGrader() {
  const [responses, setResponses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gradingInProgress, setGradingInProgress] = useState(false);

  useEffect(() => {
    // Fetch exam responses
    axios
      .get("http://localhost/grader.php")
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
      .get("http://localhost/grader.php?calculate_grades=true")
      .then((response) => {
        setGrades(response.data.grades);
        setGradingInProgress(false);
      })
      .catch((error) => {
        console.error("Error calculating grades:", error);
        setGradingInProgress(false);
      });
  };

  return (
    <div>
      <h1>Auto Grade Students</h1>
      {responses.length > 0 ? (
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
      {grades.length > 0 && (
        <div>
          <h2>Grades</h2>
          <ul>
            {grades.map((grade, index) => (
              <li key={index}>
                {`User ID: ${grade.user_id}, Course ID: ${grade.course_id}, Exam ID: ${grade.exam_id}`} - Grade: {grade.grade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AutoGrader;
