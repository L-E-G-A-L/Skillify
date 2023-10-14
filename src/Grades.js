import React from "react";
import "./css/grades.css";

class Grades extends React.Component {
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
                <tr className="gradesTableTbodytr">
                  <td className="gradesTd">Exam 1</td>
                  <td className="gradesTd">90%</td>
                </tr>
                <tr className="gradesTableTbodytr">
                  <td className="gradesTd">Exam 2</td>
                  <td className="gradesTd">85%</td>
                </tr>
                <tr className="gradesTableTbodytr">
                  <td className="gradesTd">Exam 3</td>
                  <td className="gradesTd">92%</td>
                </tr>
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
