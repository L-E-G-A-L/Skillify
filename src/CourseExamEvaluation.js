import React, { useState, useEffect } from 'react';
import './CourseExamEvaluation.css';

function CourseExams() {
    const [courseData, setCourseData] = useState([]);
  
    useEffect(() => {
      // Fetch course and exam data from your API (replace with your API endpoint)
      fetch('https://sxt7404.uta.cloud/php/fetch_course_exams.php')
        .then((response) => response.json())
        .then((data) => setCourseData(data))
        .catch((error) => console.error('Error fetching course data:', error));
    }, []);
  
    return (
      <div className="course-exams-container">
        <h2 className='course-title'>Available Courses and Exams</h2>
        <ul className='course-list'>
          {courseData.map((entry, index) => (
            <li key={index} className='course-item'>
              <h3 className='course-h3'>{entry.courseName}</h3>
              <p className="exam-title">Exams:</p>
                <ul className="exam-list">
                    <li className="exam-item">{entry.examName}{' '}
                    <a
                  href="/form" // Replace with your Google Forms link
                  // target="_blank"
                  className="form-link"
                >
                  Click here for Evaluation form
                </a>
                    </li>
                </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CourseExams;
  

  
  
  
  
  
  
