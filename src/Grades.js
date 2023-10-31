import React from "react";
import "./css/grades.css";
import axios from "axios";
class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost/grades.php").then((response) => {
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
                    <td className="gradesTd">{grade.result_id}</td>
                    <td className="gradesTd">{grade.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
