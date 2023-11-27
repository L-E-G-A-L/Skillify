import React, { useState, useEffect } from "react";
import "./css/Instructor.css";
import "./css/CourseDetail.css";
import ChatComponent from "./StudentChatbot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Instructor() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isCreateExamOpen, setIsCreateExamOpen] = useState(false);
  const [exams, setExams] = useState([]);
  const [StudentProgress, setStudentProgress] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCreateExamDropdown = () => {
    setIsCreateExamOpen(!isCreateExamOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course.course_name);
    setIsOpen(false);
  };

  const fetchCreateExamCourseNames = async () => {
    try {
      const response = await fetch(
        "https://sxt7404.uta.cloud/php/CreateExam.php?getCourseNames=true"
      );
      if (response.ok) {
        const data = await response.json();
        setCourses(data.courses);
      } else {
        console.error(
          "Error fetching course names for Create Exams. Status: " +
            response.status
        );
      }
    } catch (error) {
      console.error("Error fetching course names for Create Exams: " + error);
    }
  };

  useEffect(() => {
    fetchCreateExamCourseNames();
  }, []);

  const fetchCourseNames = async () => {
    try {
      const response = await fetch(
        "https://sxt7404.uta.cloud/php/course_operations.php?getCourseNames=true"
      );
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error(
          "Error fetching course names. Status: " + response.status
        );
      }
    } catch (error) {
      console.error("Error fetching course names: " + error);
    }
  };

  useEffect(() => {
    fetchCourseNames();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch(
        "https://sxt7404.uta.cloud/php/CreateExam.php?getExams=true"
      );
      if (response.ok) {
        const data = await response.json();

        if (Array.isArray(data.exams)) {
          setExams(data.exams);
        } else {
          console.error("Data received is not an array:", data);
        }
      } else {
        console.error("Error fetching exams. Status: " + response.status);
      }
    } catch (error) {
      console.error("Error fetching exams: " + error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchStudentProgress = async () => {
    try {
      const response = await fetch("https://sxt7404.uta.cloud/php/result.php");
      if (response.ok) {
        const jsonData = await response.json();
        setStudentProgress(jsonData);
      } else {
        console.error(
          "Error fetching student progress. Status: " + response.status
        );
      }
    } catch (error) {
      console.error("Error fetching student progress: " + error);
    }
  };

  useEffect(() => {
    fetchStudentProgress();
  }, []);

  return (
    <div>
      <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="/instructor">
          Instructor_Page
        </a>
        <a className="Instructor-right Instructor-a" href="/pcReports">
          Reports
        </a>
        <a className="Instructor-right Instructor-a" href="/profile">
          Profile
        </a>
        <a className="Instructor-right Instructor-a" href="login">
          Sign Out
        </a>
      </div>

      <div className="Instructor-button-group">
        <div
          className={`Instructor-dropdown ${isCreateExamOpen ? "open" : ""}`}
        >
          <button
            className="Instructor-button"
            onClick={toggleCreateExamDropdown}
          >
            {selectedCourse || "Create Exams"}{" "}
            <FontAwesomeIcon
              icon={isCreateExamOpen ? faAngleUp : faAngleDown}
            />
          </button>
          {isCreateExamOpen && (
            <ul className="Instructor-courses-menu">
              {courses.map((course) => (
                <li
                  key={course.course_id}
                  onClick={() => handleCourseSelect(course)}
                >
                  <a href={`/create-exam/${course.course_id}`}>
                    {course.course_name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="/AutoGrader" className="Instructor-a">
          <button className="Instructor-button">Grade Students</button>
        </a>

        <div className={`Instructor-dropdown ${isOpen ? "open" : ""}`}>
          <button className="Instructor-button" onClick={toggleDropdown}>
            {selectedCourse || "Manage Courses"}{" "}
            <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
          </button>
          {isOpen && (
            <ul className="Instructor-courses-menu">
              {courses.map((course) => (
                <li
                  key={course.course_id}
                  onClick={() => handleCourseSelect(course)}
                >
                  <a href={`/course/${course.course_id}`}>
                    {course.course_name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href="/instructorDiscussion" className="Instructor-a">
          <button className="Instructor-button">Discussions</button>
        </a>
      </div>

      <table className="Instructor-table">
        <caption className="Instructor-caption">Manage Courses</caption>
        <thead>
          <tr>
            <th className="Instructor-th">Course ID</th>
            <th className="Instructor-th">Course Name</th>
            <th className="Instructor-th">Course Description</th>
            {/* Remove the Edit/Delete column */}
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.course_id}>
              <td className="Instructor-td">{course.course_id}</td>
              <td className="Instructor-td">{course.course_name}</td>
              <td className="Instructor-td">{course.course_description}</td>
              {/* Remove the Edit and Delete buttons */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="Instructor-scrollable-table">
        <div className="Instructor-table-container">
          <table className="Instructor-table">
            <caption className="Instructor-caption">Exams Published</caption>
            <thead>
              <tr>
                <th className="Instructor-th">Course ID</th>
                <th className="Instructor-th">Exam ID</th>
                <th className="Instructor-th">Exam Name</th>
                {/* Remove the Edit/Delete column */}
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={exam.exam_id}>
                  <td className="Instructor-td">{exam.course_id}</td>
                  <td className="Instructor-td">{exam.exam_id}</td>
                  <td className="Instructor-td">{exam.exam_name}</td>
                  {/* Remove the Edit and Delete buttons */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <table className="Instructor-table">
        <caption className="Instructor-caption">Student Progress</caption>
        <thead>
          <tr>
            <th className="Instructor-th">User ID</th>
            <th className="Instructor-th">Course ID</th>
            <th className="Instructor-th">Exam ID</th>
            <th className="Instructor-th">Grade</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(StudentProgress) ? (
            StudentProgress.map((progress, index) => (
              <tr key={index}>
                <td className="Instructor-td">{progress.user_id}</td>
                <td className="Instructor-td">{progress.course_id}</td>
                <td className="Instructor-td">{progress.exam_id}</td>
                <td className="Instructor-td">{progress.grade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="Instructor-td" colSpan="4">
                No student progress data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="chat">
        <ChatComponent />
      </div>

      <footer className="Instructor-footer">
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default Instructor;
