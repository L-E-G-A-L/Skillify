import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();

  const [course, setCourse] = useState({});
  const [isEditing, setEditing] = useState(false);

  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseContent, setCourseContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost/course_operations.php?course_id=${id}`)
      .then((response) => {
        const data = response.data;
        setCourse(data);
        setCourseName(data.course_name);
        setCourseDescription(data.course_description);
        setCourseContent(data.course_content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedCourse = {
        course_id: id,
        course_content: courseContent,
      };

      const response = await axios.post('http://localhost/course_operations.php', updatedCourse, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Course content updated successfully');
        setEditing(false);
      } else {
        console.error('Error updating course content:', response.data);
      }
    } catch (error) {
      console.error('Error updating course content:', error);
    }
  };

  return (
    
    <div>
        <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="#">
          Notifications
        </a>
        <a className="Instructor-right Instructor-a" href="#">
          Files
        </a>
        <a className="Instructor-right Instructor-a" href="profile">
          Profile
        </a>
        <a className="Instructor-right Instructor-a" href="#">
          Settings
        </a>
        <a className="Instructor-right Instructor-a" href="login">
          Sign Out
        </a>
      </div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="course_content"
            value={courseContent}
            onChange={(e) => setCourseContent(e.target.value)}
            placeholder="Course Content"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>Course Details</h2>
          <p>Course Name: {course.course_name}</p>
          <p>Course Description: {course.course_description}</p>
          <p>Course Content: {course.course_content}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
