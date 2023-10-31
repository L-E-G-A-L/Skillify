import React, { useState, useEffect } from 'react';
import { Footer, QANav } from "./QADash";
import "./QAStudentDiscussion.css";
import { useNavigate } from 'react-router-dom';

function QAStudentDiscussion() {
  return (
    <html lang="en">
      <body>
        <QANav title="Discussion" />
        <StudentListPage />
        <Footer />
      </body>
    </html>
  );
}
function StudentListPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Make an API call to fetch students with role 'student'
    fetch('http://localhost/qastudentdiscussion.php')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  const handleStartDiscussion = () => {
    // Handle the "Start Discussion" button click, e.g., navigate to the discussion page.
    console.log('Discussion started');
    navigate('/qaofficercomponent');
  };
  const userCourses = students.reduce((acc, student) => {
    if (!acc[student.user_name]) {
      acc[student.user_name] = [];
    }
    acc[student.user_name].push(student.course_name);
    return acc;
  }, {});

  return (
    <div className="divcontainer">
      {/* <h1>Select a Student</h1> */}
      <table className="students-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Enrolled in Courses</th>
            <th>Start Discussion</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(userCourses).map((userName, index) => (
            <tr key={index}>
              <td>{userName}</td>
              <td>{userCourses[userName].join(', ')}</td>
              <td>
                <button className="start-discussion-btn" onClick={handleStartDiscussion}>Start Discussion</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QAStudentDiscussion;
