import React from "react";
import "./css/grades.css";
import axios from "axios";
import MessageCard from "./MessageCard";
class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const courseId = searchParams.get("course_id");
    axios
      .get(`http://localhost/grades.php?course_id=${courseId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ grades: response.data });
      });
  }

  render() {
    return (
      <div>
        <div className="gradesClass">
          <header className="gradesHeaderClass">
            <h1 className="gradesh1Class">My Grades</h1>
          </header>
          <div className="gradesContainer">
            {this.state.grades.length > 0 ? (
              <table className="gradesTableClass">
                <thead>
                  <tr>
                    <th className="gradesTh">Exam #</th>
                    <th className="gradesTh">Grade</th>
                  </tr>
                </thead>
                <tbody className="gradesTableTbody">
                  {this.state.grades.map((grade, index) => (
                    <tr key={index} className="gradesTableTbodytr">
                      <td className="gradesTd">{grade.exam_name}</td>
                      <td className="gradesTd">{grade.grade}</td>
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
