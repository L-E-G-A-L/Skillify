import React, { Component } from "react";
import "./css/courseModules.css";
import axios from "axios";
import MessageCard from "./MessageCard";
import CourseContent from "./CourseContent"; // Import the CourseContent component

class CourseModules extends Component {
  state = {
    modules: [],
    selectedModuleContent: "",
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    axios
      .get(
        `https://sxt7404.uta.cloud/php/courseModules.php?course_id=${courseId}`
      )
      .then((response) => {
        console.log("resp:", response.data);
        this.setState({ modules: response.data });
      });
  }

  openModuleContent = (module) => {
    this.setState({
      selectedModuleContent: module.courseModuleContent,
      selectedModuleName: module.courseModuleName,
      selectedCourseModuleDescription: module.courseModuleDescription,
    });
  };

  render() {
    const {
      modules,
      selectedModuleContent,
      selectedModuleName,
      selectedCourseModuleDescription,
    } = this.state;

    return (
      <div>
        <header className="courseModulesHeaderClass">
          <h1 className="courseModulesh1">Course Modules</h1>
          <a href="student" className="announcementNavLiaClass">
            <i className="material-icons">home</i>
          </a>
        </header>
        <div className="courseModulesContainer">
          {modules === "No course modules found" ? (
            <MessageCard message="The instructor has not yet posted the content for this course. Please check again later." />
          ) : selectedModuleContent ? (
            <CourseContent
              content={selectedModuleContent}
              moduleName={selectedModuleName}
              moduleDescription={selectedCourseModuleDescription}
            />
          ) : (
            <ul className="module-list">
              {modules.map((module) => (
                <li className="module" key={module.id}>
                  <h2>{module.courseModuleName}</h2>
                  <p>{module.courseModuleDescription}</p>
                  <a href="#" onClick={() => this.openModuleContent(module)}>
                    View Notes
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <footer className="courseModulesFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default CourseModules;
