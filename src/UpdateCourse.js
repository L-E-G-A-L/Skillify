import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PC.css";

const UpdateCourseContent = () => {
  const [courses, setCourses] = useState([]);
  const [courseModules, setCourseModules] = useState([]);

  const fetchAllCourses = async () => {
    try {
      const response = await axios.get(
        "https://sxt7404.uta.cloud/php/UpdateCourse.php"
      );
      setCourses(response.data.courses);
      setCourseModules(response.data.courseModules);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleEdit = async (
    courseId,
    courseIdForEdit,
    courseModulesId,
    isCourseDescription
  ) => {
    if (isCourseDescription) {
      const newDescription = prompt("Enter new course description");
      if (newDescription !== null) {
        try {
          const response = await axios.put(
            `https://sxt7404.uta.cloud/php/UpdateCourse.php`,
            {
              course_id: courseIdForEdit,
              course_description: newDescription,
            }
          );

          console.log("Data being sent:", {
            course_id: courseIdForEdit,
            course_description: newDescription,
          });

          if (response.status === 200) {
            fetchAllCourses(); // Re-fetch after updating for UI update
            alert("Course description updated successfully!");
          } else {
            console.error("Failed to update course description");
          }
        } catch (error) {
          console.error("Error updating course description: ", error);
        }
      }
    } else {
      const selectedModule = courseModules.find(
        (module) => module.courseModulesId === courseModulesId
      );

      const newDescription = prompt(
        "Enter new module description",
        selectedModule.courseModuleDescription
      );
      const newContent = prompt(
        "Enter new module content",
        selectedModule.courseModuleContent
      );

      if (newDescription !== null && newContent !== null) {
        try {
          const response = await axios.put(
            `https://sxt7404.uta.cloud/php/UpdateCourse.php`,
            {
              course_id: courseId,
              courseModulesId: courseModulesId,
              courseModuleDescription: newDescription,
              courseModuleContent: newContent,
            }
          );

          console.log("Data being sent:", {
            course_id: courseId,
            courseModulesId: courseModulesId,
            courseModuleDescription: newDescription,
            courseModuleContent: newContent,
          });

          if (response.status === 200) {
            fetchAllCourses(); // Re-fetch after updating for UI update
            alert("Module details updated successfully!");
          } else {
            console.error("Failed to update module details");
          }
        } catch (error) {
          console.error("Error updating module: ", error);
        }
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
      <h1 className="uc-h1">All Courses and Modules</h1>
      <div>
        {courses.map((course) => (
          <div key={course.course_id} className="uc-course-box">
            <h2 className="uc-course-title">Course ID: {course.course_id}</h2>
            <h7 className="uc-coursename"> Course_Name: </h7>
            <p> {course.course_name}</p>
            <h7 className="uc-coursename"> Course Description: </h7>
            <p>{course.course_description}</p>

            <button
              className="edit-button"
              onClick={() =>
                handleEdit(course.course_id, course.course_id, null, true)
              }
            >
              Edit Course Description
            </button>
            {courseModules
              .filter((module) => module.courseId === course.course_id)
              .map((courseModule) => (
                <div
                  key={courseModule.courseModulesId}
                  className="uc-module-box"
                >
                  <h3 className="uc-moduleid">
                    Module ID: {courseModule.courseModulesId}
                  </h3>
                  <h4 className="uc-modulename">
                    Module Name: {courseModule.courseModuleName}
                  </h4>
                  <h9 className="uc-moduledescription">Module Description: </h9>
                  <p> {courseModule.courseModuleDescription}</p>
                  <h9 className="uc-moduledescription">Module Content: </h9>
                  <p> {courseModule.courseModuleContent}</p>
                  <button
                    className="edit-button"
                    onClick={() =>
                      handleEdit(
                        course.course_id,
                        null,
                        courseModule.courseModulesId,
                        false
                      )
                    }
                  >
                    Edit Module Details
                  </button>
                </div>
              ))}
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
