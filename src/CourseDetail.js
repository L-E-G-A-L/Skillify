import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CourseDetail.css";
import "./Instructor.css";  
import MessageCard from "./MessageCard";

function CourseDetail() {
  const { id } = useParams();

  const [isEditing, setEditing] = useState(false);

  const [courseModuleContent, setCourseModuleContent] = useState("");
  const [module_id, setCourseModuleId] = useState("");
  const [coursesInfo, setCoursesInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://sxt7404.uta.cloud/php/course_operations.php?course_id=${id}`
      )
      .then((response) => {
        const data = response.data;
        setCoursesInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEdit = (module_id, moduleContent) => {
    setEditing(true);
    setCourseModuleContent(moduleContent);
    setCourseModuleId(module_id);
  };

  const handleSave = async () => {
    try {
      const updatedCourse = {
        course_id: id,
        module_id: module_id,
        course_content: courseModuleContent,
      };

      const response = await axios.post(
        "https://sxt7404.uta.cloud/php/course_operations.php",
        updatedCourse,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Course content updated successfully");
        setEditing(false);
      } else {
        console.error("Error updating course content:", response.data);
      }
    } catch (error) {
      console.error("Error updating course content:", error);
    }
  };

  return (
    <div className="CourseDetail-container">
      <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="/instructor">
          Instructor_Page
        </a>
        <a className="Instructor-right Instructor-a" href="/profile">
          Profile
        </a>
        <a className="Instructor-right Instructor-a" href="login">
          Sign Out
        </a>
      </div>

      {isEditing ? (
        <div>
          <input
            type="text"
            className="Edit-input"
            value={courseModuleContent}
            onChange={(e) => setCourseModuleContent(e.target.value)}
            placeholder="Course Content"
          />
          <button className="Edit-button" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="Course-details-heading">Course Details</h2>
          <div className="Course-Container">
            {coursesInfo !== "Course not found" ? (
              coursesInfo.map((module, index) => (
                <div key={index}>
                  <p><b>Course Name:</b> {module.course_name}</p>
                  <p><b>Course Description:</b> {module.course_description}</p>
                  <p><b>Course Module Name:</b> {module.module_name}</p>
                  <p><b>Course Module Content:</b> {module.module_content}</p>
                  <button
                    className="Edit-button"
                    onClick={() =>
                      handleEdit(module.module_id, module.module_content)
                    }
                  >
                    Edit
                  </button>
                </div>
              ))
            ) : (
              <MessageCard message="Course Modules are not yet published for this course"></MessageCard>
            )}
          </div>
        </div>
      )}
      <footer className="Instructor-footer">
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default CourseDetail;
