import React from "react";
import "./css/grades.css";
import axios from "axios";
import MessageCard from "./MessageCard";

class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      loading: true,
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    const userId = sessionStorage.getItem("userId");
    axios
      .get(
        `https://sxt7404.uta.cloud/php/grades.php?course_id=${courseId}&user_id=${userId}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ grades: response.data, loading: false });
      });
  }

  render() {
    return (
      <div>
        <div className="gradesClass">
          <header className="gradesHeaderClass">
            <h1 className="gradesh1Class">My Grades</h1>
            <a href="student" className="announcementNavLiaClass">
              <i className="material-icons">home</i>
            </a>
          </header>
          <div className="gradesContainer">
            {this.state.loading ? (
              <p>Loading...</p>
            ) : this.state.grades.length > 0 ? (
              <table className="gradesTableClass">
                <thead>
                  <tr>
                    <th className="gradesTh">Exam Name</th>
                    <th className="gradesTh">Grade</th>
                    <th className="gradesTh">Feedback</th>
                  </tr>
                </thead>
                <tbody className="gradesTableTbody">
                  {this.state.grades.map((grade, index) => (
                    <tr key={index} className="gradesTableTbodytr">
                      <td className="gradesTd">{grade.exam_name}</td>
                      <td className="gradesTd">{grade.grade}</td>
                      <td className="gradesTd">{grade.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <MessageCard message="Grades are not yet posted by the instructor" />
            )}
          </div>
        </div>
        <footer className="gradesFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Grades;
