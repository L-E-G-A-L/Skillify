import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className='service-main-div'>
      <header className='services-header'>
        <a href="#" className="logo services-a">Group15</a>
        <div className="menu-toggle"></div>
        <nav className='services-nav'>
          <input type="checkbox" id="check" />
          <ul className="links">
            <li className='services-li'><a href="home" className='services-a'>Home</a></li>
            <li className='services-li'><a href="about" className='services-a'>About</a></li>
            <li className='services-li'><a href="services" className='services-a'>Services</a></li>
            <li className='services-li'><a href="contact" className='services-a'>Contact</a></li>
          </ul>
          <label htmlFor="check" className="checkbtn services-label">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
        <div className="clearfix"></div>
      </header>

      <div className="content">
        <div className="title">Service we provide</div>

        <div className="radio-btns">
          <input
            type="radio"
            name="show-content"
            id="show-content1"
            className="show-button"
            checked={selectedOption === "show-content1"}
            onChange={handleOptionChange}
          />
          <label className='services-label' htmlFor="show-content1">Student</label>
          <input
            type="radio"
            name="show-content"
            id="show-content2"
            className="show-button"
            checked={selectedOption === "show-content2"}
            onChange={handleOptionChange}
          />
          <label className='services-label' htmlFor="show-content2">Instructor</label>
          <input
            type="radio"
            name="show-content"
            id="show-content3"
            className="show-button"
            checked={selectedOption === "show-content3"}
            onChange={handleOptionChange}
          />
          <label className='services-label' htmlFor="show-content3">Administrator</label>
          <input
            type="radio"
            name="show-content"
            id="show-content4"
            className="show-button"
            checked={selectedOption === "show-content4"}
            onChange={handleOptionChange}
          />
          <label className='services-label' htmlFor="show-content4">Program Coordinator</label>
          <input
            type="radio"
            name="show-content"
            id="show-content5"
            className="show-button"
            checked={selectedOption === "show-content5"}
            onChange={handleOptionChange}
          />
          <label className='services-label' htmlFor="show-content5">Quality Assurance Officer</label>

          <div className="print-content" style={{ display: selectedOption === "show-content1" ? "block" : "none" }}>
            <p><b>Access Program and Course Information:</b> Students have access to course catalogs, syllabus, schedules, and other program-related information. They can view details about the courses available within their program and make informed choices about their educational path.</p>
            <p><b>Take Exams and Assessments:</b> Students can take quizzes, exams, assignments, and assessments as part of their coursework. They submit their work through the system, and they may receive feedback and grades electronically.</p>
            <p><b>Interact with Peers:</b> Students can participate in discussion forums, chat rooms, or other communication tools provided by the system. This interaction fosters collaboration, knowledge sharing, and peer support.</p>
            <p><b>Interact with Instructors:</b> Students can communicate with instructors through messaging systems or discussion boards, seeking clarification, asking questions, and getting guidance on course content.</p>
          </div>

          <div className="print-content" style={{ display: selectedOption === "show-content2" ? "block" : "none" }}>
            <p><b>Manage Courses:</b> Instructors create, update, and manage course content, including lectures, assignments, quizzes, and other learning materials.</p>
            <p><b>Assess and Grade Students:</b> Instructors evaluate student work, assign grades, and provide feedback. They can track student progress and identify areas where students may need additional support.</p>
            <p><b>Facilitate Discussions:</b> Instructors moderate and participate in online discussions, guiding students in meaningful dialogues and ensuring a productive learning environment.</p>
            <p><b>Provide Support:</b> Instructors are available to address student queries, offer clarification, and provide academic assistance.</p>
          </div>

          <div className="print-content" style={{ display: selectedOption === "show-content3" ? "block" : "none" }}>
            <p><b>User Account Management:</b> Administrators create, modify, or deactivate user accounts for students, instructors, and other staff members.</p>
            <p><b>Technical Maintenance:</b> Administrators ensure the smooth operation of the system, addressing technical issues, implementing updates, and maintaining system security.</p>
            <p><b>Generate Reports:</b> Administrators generate reports on system usage, user activity, and performance metrics. These reports help in decision-making and evaluating the effectiveness of the program.</p>
            <p><b>Security and Access Control:</b> Administrators manage user roles and permissions, ensuring that data is secure and that users have appropriate access levels.</p>
          </div>

          <div className="print-content" style={{ display: selectedOption === "show-content4" ? "block" : "none" }}>
            <p><b>Alignment with Institutional Goals:</b> Program Coordinators work to align course offerings with the overall goals and objectives of the educational institution. They ensure that courses contribute to the institution's mission and strategic plans.</p>
            <p><b>Collaboration with Instructors:</b> They collaborate with instructors to design and update course content, ensuring it aligns with program objectives and standards.</p>
            <p><b>Student Performance Monitoring:</b> Program Coordinators may track student performance at a program level, identifying trends and areas for improvement. They can also provide support to struggling students.</p>
            <p><b>Program Improvement:</b> They actively seek ways to improve the program's quality, effectiveness, and relevance, making recommendations for curriculum changes or enhancements.</p>
          </div>

          <div className="print-content" style={{ display: selectedOption === "show-content5" ? "block" : "none" }}>
            <p><b>Program Evaluation:</b> Quality Assurance Officers conduct audits and assessments of courses and programs to evaluate their quality, consistency, and effectiveness.</p>
            <p><b>Recommendations:</b> Based on their assessments, they provide recommendations for improvements. These recommendations may include changes to curriculum, instructional methods, or assessment techniques.</p>
            <p><b>Quality Standards:</b> They ensure that the program meets or exceeds established quality standards and accreditation requirements.</p>
            <p><b>Continuous Improvement:</b> They play a crucial role in the continuous improvement process, helping the institution adapt to changing educational needs and best practices.</p>
          </div>
        </div>

        <p className="common-content">These roles collectively contribute to the effective management and delivery of educational programs, ensuring that students receive a high-quality learning experience while meeting institutional goals and maintaining system integrity. The level of responsibility and access for each role is carefully defined to maintain accountability and efficiency within the educational institution or online learning platform.</p>
      </div>
      <footer  className='services-footer'>
        <p>&copy; 2023 SOFTWARE ENGINEERING</p>
      </footer>
    </div>
  );
}

export default Services;
