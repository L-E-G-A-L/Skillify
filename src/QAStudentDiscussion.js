import React from "react";
import { Footer, QANav } from "./QADash";
import "./QAStudentDiscussion.css";

function QAStudentDiscussion() {
  return (
    <html lang="en">
      <body>
        <QANav title="StudentDiscussion" />
        <StudentListPage />
        <Footer />
      </body>
    </html>
  );
}
function StudentListPage() {
  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
    { id: 4, name: "Student 4" },
    { id: 5, name: "Student 5" },
  ];

  return (
    <div className="student-list-page">
      <h2>Students</h2>
      {students.map((student) => (
        <div key={student.id} className="student-box">
          <p>{student.name}</p>
          <button>Start Discussion</button>
        </div>
      ))}
    </div>
  );
}

export default QAStudentDiscussion;
