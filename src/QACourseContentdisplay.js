import React, { useState, useEffect } from 'react';
import './QACourseContentdisplay.css';
import { Footer, QANav } from "./QADash";

function CourseContentDisplay() {
  return (
    <html lang="en">
      <body>
        <QANav title="P&C" />
        <QACourseContentdisplay />
        <Footer />
      </body>
    </html>
  );
}

function QACourseContentdisplay() {
    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
  
    useEffect(() => {
      // Fetch data from PHP API
      fetch('https://sxt7404.uta.cloud/php/qacoursedetails.php')
      .then(response => response.json())
      .then(data => {
        // Remove duplicates based on program_name
        const uniquePrograms = Array.from(new Set(data.map(program => program.program_name)))
          .map(program_name => {
            return {
              program_name: program_name,
              courses: data.filter(course => course.program_name === program_name)
            };
          });
        setPrograms(uniquePrograms);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleProgramChange = (programName) => {
    setSelectedProgram(programName);
    setSelectedCourse(null);
  };

  const handleCourseChange = (courseName) => {
    setSelectedCourse(courseName);
  };

  return (
    <div className="container">
      <h1 className="title">Programs and Courses</h1>
      <div className="programs-container">
        <h2 className="subtitle">Programs</h2>
        <ul className="program-list">
          {programs.map(program => (
            <li key={program.program_name} className="program-item">
              <button className={`program-button ${selectedProgram === program.program_name ? 'active' : ''}`}
                onClick={() => handleProgramChange(program.program_name)}>
                {program.program_name}
              </button>
              {selectedProgram === program.program_name && program.courses && (
                <ul className="course-list">
                    {program.courses.map(course => (
                    <li key={course.course_name} className="course-item">
                      <button className={`course-button ${selectedCourse === course.course_name ? 'active' : ''}`}
                        onClick={() => handleCourseChange(course.course_name)}>
                        {course.course_name}
                      </button>
                      {selectedCourse === course.course_name && (
                        <div className="module-details">
                          <p><strong>Module Name:</strong> {course.courseModuleName || 'N/A'}</p>
                          <p><strong>Module Content:</strong> {course.courseModuleContent || 'N/A'}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  
  export default CourseContentDisplay;
