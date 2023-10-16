// InstructorPage.js
import React from 'react';
import './Instructor.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

function Instructor() {
  return (
    <div>
      <div className="Instructor-topnav">
        <a className="Instructor-right Instructor-a" href="#">
          Notifications
        </a>
        <a className="Instructor-right  Instructor-a" href="#">
          Files
        </a>
        <a className="Instructor-right  Instructor-a" href="profile">
          Profile
        </a>
        <a className="Instructor-right  Instructor-a" href="#">
          Settings
        </a>
        <a className="Instructor-right  Instructor-a" href="login">
          Sign Out
        </a>
      </div>

      <div className="Instructor-button-group">
        <button className='Instructor-button'>Create Exams</button>
        <button className='Instructor-button'>Grade Students</button>
        <button className='Instructor-button'>Manage Course</button>
        <a href="/instructorDiscussion" className='Instructor-a'>
          <button className='Instructor-button'>Discussions</button>
        </a>
      </div>

      <table className='Instructor-table'>
        <caption className='Instructor-caption'>Manage Courses</caption>
        <thead>
          <tr>
            <th className='Instructor-th'>Sr.</th>
            <th className='Instructor-th'>Course Code</th>
            <th className='Instructor-th'>Course Name</th>
            <th className='Instructor-th'>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Instructor-td'>1</td>
            <td className='Instructor-td'>CS225</td>
            <td className='Instructor-td'>Web Data Management</td>
            <td className='Instructor-td'>
              <FontAwesomeIcon icon={faPencil} className='fa fa-pencil-square-o Instructor-button'/>
              <FontAwesomeIcon icon={faTrash} className='fa fa-trash-o Instructor-button'/>
              {/* <button className="fa fa-pencil-square-o Instructor-button"></button>
              <button className="fa fa-trash-o Instructor-button"></button> */}
            </td>
          </tr>
        </tbody>
      </table>

      <table className='Instructor-table'>
        <caption className='Instructor-caption'>Feedback</caption>

        <tr>
          <th className='Instructor-th'>Sr.</th>
          <th className='Instructor-th'>Student Name</th>
          <th className='Instructor-th'>Exam Name</th>
          <th className='Instructor-th'>Score</th>
          <th className='Instructor-th'>Edit Feedback</th>
        </tr>

        <tbody>
          <tr>
            <td className='Instructor-td'>1</td>
            <td className='Instructor-td'>Steve Smith</td>
            <td className='Instructor-td'>Midterm Exam</td>
            <td className='Instructor-td'>85</td>
            <td className='Instructor-td'>
              <FontAwesomeIcon icon={faPencil} className='fa fa-pencil-square-o Instructor-button'/>
              <FontAwesomeIcon icon={faTrash} className='fa fa-trash-o Instructor-button'/>
              {/* <button className="fa fa-pencil-square-o Instructor-button"></button>
              <button className="fa fa-trash-o Instructor-button"></button> */}
            </td>
          </tr>
        </tbody>
      </table>

      <table className='Instructor-table'>
        <caption className='Instructor-caption'>Progress Tracking</caption>

        <tr>
          <th className='Instructor-th'>Sr.</th>
          <th className='Instructor-th'>Student Name</th>
          <th className='Instructor-th'>View/Edit Progress</th>
        </tr>

        <tbody>
          <tr>
            <td className='Instructor-td'>1</td>
            <td className='Instructor-td'>Steve Smith</td>
            <td className='Instructor-td'>
              <FontAwesomeIcon icon={faPencil} className='fa fa-pencil-square-o Instructor-button'/>
              <FontAwesomeIcon icon={faTrash} className='fa fa-trash-o Instructor-button'/>
              {/* <button className="fa fa-eye Instructor-button"></button>
              <button className="fa fa-trash-o Instructor-button"></button> */}
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="Instructor-chat">
        Need to talk to someone? <a href="/instructorChat" className='Instructor-a'>Click here</a>
      </h2>
      <footer className='Instructor-footer'>
        <p>&copy; 2023 INSTRUCTOR-PAGE</p>
      </footer>
    </div>
  );
}

export default Instructor;
