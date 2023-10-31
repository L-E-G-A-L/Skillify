import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  
  const [course, setCourse] = useState({});
  const [isEditing, setEditing] = useState(false);

  // Initialize states for all input fields
  const [courseId,setCourseId]=useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFeedback, setCourseFeedback] = useState('');
  const [courseContent, setCourseContent] = useState('');
  const [discussionId, setDiscussionId] = useState('');
  const [examId, setExamId] = useState('');
  const [programId, setProgramId] = useState('');
  const [courseObjId, setCourseObjId] = useState('');

  useEffect(() => {
    // Fetch course details by courseId from the API
    axios.get(`http://localhost/course_operations.php?course_id=${id}`)
      .then((response) => {
        const data = response.data;
        setCourse(data);
        setCourseId(data.course_id);
        setCourseName(data.course_name);
        setCourseDescription(data.course_description);
        setCourseFeedback(data.course_feedback);
        setCourseContent(data.course_content);
        setDiscussionId(data.discussion_id);
        setExamId(data.exam_id);
        setProgramId(data.program_id);
        setCourseObjId(data.course_obj_id);
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
      // Prepare the updatedCourse object with the data you want to update
      const updatedCourse = {
        course_id: courseId,
        course_name: courseName,
        course_description: courseDescription,
        course_feedback: courseFeedback,
        course_content: courseContent,
        discussion_id: discussionId,
        exam_id: examId,
        program_id: programId,
        course_obj_id: courseObjId,
      };
      console.log(updatedCourse);
      // Send the POST request using async/await
      const response = await axios.post(`http://localhost/course_operations.php?course_id=${id}`, updatedCourse);
  
      // Check the response for success or error
      if (response.status === 200) {
        // The request was successful, and the data may contain a success message
        console.log('Course details updated successfully');
        setEditing(false);
      } else {
        // Handle errors or display an error message
        console.error('Error updating course:', response.data);
      }
    } catch (error) {
      // Handle network or other exceptions
      console.error('Error updating course:', error);
    }
  };
  


  const handleDelete = () => {
    // Send a delete request to the API to delete the course
    console.log("delete button sucess")
    axios.post(`http://localhost/course_operations.php?course_id=${id}`)
      .then(() => {
        // Redirect to the course list or perform other actions after deletion
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {isEditing ? (
        <div>
           <input
            type="int"
            name="course_id"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder="Course Id"
          />
          <input
            type="text"
            name="course_name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Course Name"
          />
          <input
            type="text"
            name="course_description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Course Description"
          />
          <input
            type="text"
            name="course_feedback"
            value={courseFeedback}
            onChange={(e) => setCourseFeedback(e.target.value)}
            placeholder="Course Feedback"
          />
          <input
            type="text"
            name="course_content"
            value={courseContent}
            onChange={(e) => setCourseContent(e.target.value)}
            placeholder="Course Content"
          />
          <input
            type="text"
            name="discussion_id"
            value={discussionId}
            onChange={(e) => setDiscussionId(e.target.value)}
            placeholder="Discussion ID"
          />
          <input
            type="text"
            name="exam_id"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
            placeholder="Exam ID"
          />
          <input
            type="text"
            name="program_id"
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
            placeholder="Program ID"
          />
          <input
            type="text"
            name="course_obj_id"
            value={courseObjId}
            onChange={(e) => setCourseObjId(e.target.value)}
            placeholder="Course Object ID"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>Course Details</h2>
          <p>Course Name: {course.course_name}</p>
          <p>Course Description: {course.course_description}</p>
          <p>Course Feedback: {course.course_feedback}</p>
          <p>Course Content: {course.course_content}</p>
          <p>Discussion ID: {course.discussion_id}</p>
          <p>Exam ID: {course.exam_id}</p>
          <p>Program ID: {course.program_id}</p>
          <p>Course Object ID: {course.course_obj_id}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
