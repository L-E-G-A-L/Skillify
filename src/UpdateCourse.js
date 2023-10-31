import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PC.css";


const UpdateCourseContent = () => {
  const [courses, setCourses] = useState([]);

  // Function to fetch all course data from the backend
  const fetchAllCourses = async () => {
    try {
      const response = await axios.get("http://localhost/UpdateCourse.php");
      setCourses(response.data); // Assuming data fetched is an array of course details
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleEdit = async (index) => {
    const updatedCourses = [...courses];
    const courseId = updatedCourses[index].course_id; // Get the course ID
    const newDescription = prompt("Enter new description", updatedCourses[index].course_description);
    const newObjectives = prompt("Enter new objectives", updatedCourses[index].course_content);

    if (newDescription !== null && newObjectives !== null) {
      updatedCourses[index].course_description = newDescription;
      updatedCourses[index].course_content = newObjectives;

      setCourses(updatedCourses);

      try {
        const response = await axios.put(`http://localhost/UpdateCourse.php`, {
          id: courseId, // Include the ID of the course
          course_description: newDescription,
          course_content: newObjectives,
          // Add other fields you need to update
        });

        if (response.status === 200) {
          // Handle success, e.g., show a success message
        } else {
          console.error('Failed to update course details');
        }
      } catch (error) {
        console.error("Error updating course: ", error);
      }
    }
  };

  return (
    <div className="update-course-container">
       <nav className="pc-nav">
                <h6 className="pc-h6">DASHBOARD</h6>
                <ul className="pc-nav-list pc-ul">
                    <li className="pc-li">
                    <a href="pc" className="pc-a">
                    Home
                    </a>
            </li>
                </ul>
            </nav>
      <h1 className="uc-h1">All Courses</h1>
      <div>
        {courses.map((course, index) => (
          <div key={course.course_id} className="course-box">
            <div className="course-details">
              <h2 className="course-title">Course Name: {course.course_name}</h2>
              <p className="course-description">Course Description:</p> 
              <p> {course.course_description}</p>
              <p className="course-objectives">Course Objectives: </p>
              <p> {course.course_content}</p>
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      <footer className="pc-footer">
                <p>&copy; 2023 Program Coordinator Website</p>
      </footer>
    </div>
  );
};

export default UpdateCourseContent;
