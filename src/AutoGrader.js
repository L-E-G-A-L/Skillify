import React, { useState, useEffect } from "react";
import axios from "axios";

function AutoGrader() {
  const [responses, setResponses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gradingInProgress, setGradingInProgress] = useState(false);
  // const [feedback, setFeedback] = useState({});

  useEffect(() => {
    // Fetch exam responses
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

  // const handleFeedbackChange = (userId, courseId, examId, event) => {
  //   const { value } = event.target;
  //   const feedbackKey = `${userId}-${courseId}-${examId}`;
  //   setFeedback({
  //     ...feedback,
  //     [feedbackKey]: value,
  //   });
  // };

  const handlePublishResult = (userId, courseId, examId) => {
    // Send the result (user_id, course_id, exam_id, grade, and feedback) to your result table
    // const feedbackKey = `${userId}-${courseId}-${examId}`;
    // const feedbackText = feedback[feedbackKey];
    const grade = grades.find((grade) => grade.user_id === userId && grade.course_id === courseId && grade.exam_id === examId);

    // Make an API call to send the result to your server here
    // You can use Axios or any other method you prefer

    // After successfully sending the result, you can clear the input
    // setFeedback({
    //   ...feedback,
    //   [feedbackKey]: "",
    // });
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
                {`User ID: ${grade.user_id}, Course ID: ${grade.course_id}, Exam ID: ${grade.exam_id} - Grade: ${grade.grade}`}
                <div>
                  {/* <p>Feedback:</p>
                  <textarea
                    name="feedbackText"
                    value={feedback[`${grade.user_id}-${grade.course_id}-${grade.exam_id}`] || ""}
                    onChange={(e) => handleFeedbackChange(grade.user_id, grade.course_id, grade.exam_id, e)}
                  /> */}
                  <button onClick={() => handlePublishResult(grade.user_id, grade.course_id, grade.exam_id)}>
                    Publish
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AutoGrader;