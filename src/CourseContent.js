import React from "react";
import "./CourseContent.css";
class CourseContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    const { content } = this.props;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "course_content.txt";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  render() {
    return (
      <div className="pdf-viewer">
        <h1>{this.props.moduleName}</h1>
        <h2>{this.props.moduleDescription}</h2>
        <div className="pdf-content">
          <p>{this.props.content}</p>
        </div>
        <button className="download-button" onClick={this.handleDownload}>
          Download
        </button>
      </div>
    );
  }
}

export default CourseContent;
