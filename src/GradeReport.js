import React, { useState, useEffect } from 'react';
import './GradeReport.css'; 

function GradesReport() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetch('https://sxt7404.uta.cloud/php/Reports.php')
      .then((response) => response.json())
      .then((data) => {
        setGrades(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Student Grades Report</h2>
      <table className="grades-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Course Name</th>
            <th>Exam Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.user_name}</td>
              <td>{grade.course_name}</td>
              <td>{grade.exam_name}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradesReport;
