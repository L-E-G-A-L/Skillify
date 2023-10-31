import React, { Component } from "react";
import "./css/courseModules.css";
import axios from "axios";
import MessageCard from "./MessageCard";

class CourseModules extends Component {
  state = {
    modules: [],
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    axios
      .get(`http://localhost/courseModules.php?course_id=${courseId}`)
      .then((response) => {
        console.log("resp:", response.data);
        this.setState({ modules: response.data });
      });
  }

  openModuleContentInNewTab = (module) => {
    const moduleContent = module.courseModuleContent;
    const newTab = window.open("", "_blank");

    newTab.document.open();
    newTab.document.write(`
      <html>
      <head>
        <title>Module Content</title>
      </head>
      <body>
        ${moduleContent}
      </body>
      </html>
    `);
    newTab.document.close();
    const downloadLink = newTab.document.createElement("a");
    downloadLink.href = `data:text/plain;charset=utf-8,${encodeURIComponent(
      moduleContent
    )}`;
    downloadLink.download = "module_content.txt";
    downloadLink.textContent = "Download";
    newTab.document.body.appendChild(downloadLink);
  };

  render() {
    const { modules } = this.state;
    console.log("modules:", modules);

    return (
      <div>
        <header className="courseModulesHeaderClass">
          <h1 className="courseModulesh1">Course Modules</h1>
        </header>
        <div className="courseModulesContainer">
          {modules === "No course modules found" ? (
            <MessageCard message="The instructor has not yet posted the content for this course. Please check again later." />
          ) : (
            <ul className="module-list">
              {modules.map((module) => (
                <li className="module" key={module.id}>
                  <h2>{module.courseModuleName}</h2>
                  <p>{module.courseModuleDescription}</p>
                  <a
                    href="#"
                    onClick={() => this.openModuleContentInNewTab(module)}
                  >
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
