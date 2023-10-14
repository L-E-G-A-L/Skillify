import React from "react";
import "./css/courseModules.css";

class CourseModules extends React.Component {
  render() {
    return (
      <div>
        <header className="courseModulesHeaderClass">
          <h1 className="courseModulesh1">Course Modules</h1>
        </header>
        <div className="courseModulesContainer">
          <ul className="module-list">
            <li className="module">
              <h2>Module 1: Introduction</h2>
              <p>This module covers the basics of the course.</p>
              <a href="#">Start Module</a>
            </li>
            <li className="module">
              <h2>Module 2: Advanced Topics</h2>
              <p>Explore advanced topics and concepts in the course.</p>
              <a href="#">Start Module</a>
            </li>
            <li className="module">
              <h2>Module 3: Final Project</h2>
              <p>Create your final project for the course.</p>
              <a href="#">Start Module</a>
            </li>
          </ul>
        </div>
        <footer className="courseModulesFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default CourseModules;
