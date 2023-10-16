import React from 'react';
import './QADash.css'; // Import the CSS file
import ProfileImage from './images/Profile.png'; // Import the image
import ProfileLogo from './images/profile logo.png';
import SettingImage from './images/setting.png';
import HelpImage from './images/help.png';
import LogoutImage from './images/logout.png';
import { Link } from 'react-router-dom';
import ChatComponent from './Chatbot';

function QADashboard() {
  return (
    <html lang="en">
      <body className="qabody">
        <QANav title="Dashboard"/>
        <MainContent />
        <QAChart />
        <Footer />
      </body>
    </html>
  );
}

export function QANav({title,toggleInnerNav}){
    return(
          <nav className='qanav'>
            <h1 className='qah1'>{title}</h1>
            <ul className='qaul'>
              <li className='qali'>
              <Link className="link" to="/qahome"><a className='qaa'>Home</a></Link>
              </li>
            </ul>
            <input onClick={toggleInnerNav}
              type="checkbox"
              id="toggle-menu-checkbox"
            />
            <label
              for="toggle-menu-checkbox"
              id="toggle-menu-label"
            ></label>
            <div className="sub-menu-wrap" id="submenu">
              <div id="dark-btn">
                <span className='qaspan'></span>
              </div>
              <div className="sub-menu">
                <div className="user-info">
                  <img
                    src={ProfileImage} alt="Profile"
                    className="user-pic"
                  />
                  <h3 className='qah3'>User Name</h3>
                </div>
                <hr className='qahr' />
                <a href="profile" className="sub-menu-link">
                  <img src={ProfileLogo} alt="Profile Logo" />
                  <p className='qap'>Edit Profile</p>
                  <span className='qaspan'>&gt;</span>
                </a>
                <a href="#" className="sub-menu-link">
                  <img className='qaimg' src={SettingImage} alt="Setting" />
                  <p className='qap'>Settings & Privacy</p>
                  <span className='qaspan'>&gt;</span>
                </a>
                <a href="#" className="sub-menu-link">
                  <img src={HelpImage} alt="Help" />
                  <p className='qap'>Help & Support</p>
                  <span className='qaspan'>&gt;</span>
                </a>
                <a href="login" className="sub-menu-link">
                  <img src={LogoutImage} alt="Logout" />
                  <p className='qap'>Logout</p>
                  <span className='qaspan'>&gt;</span>
                </a>
              </div>
            </div>
          </nav>
    );
}
function MainContent(){
    return(
        <main className='qamain'>
          <section className="functionality">
            <h2 className='qah2'>Review and Validate Program and courses</h2>
            <button className="toggle-button">Course Content</button>
          </section>
          <section className="functionality">
            <h2 className='qah2'>Audits or Evaluations of courses and exams</h2>
            <button className="toggle-button">Audit</button>
          </section>
          <section className="functionality">
            <h2 className='qah2'>
              Discussion with Students, Instructors, Administrators, and Program Coordinator
            </h2>
            <Link className="link" to="/discussion"><button className="toggle-button">Discussion</button></Link>
          </section>
          <section className="functionality">
            <h2 className='qah2'>
              Enhancing Teaching Methods, Assessments, and Program effectiveness
            </h2>
            <button className="toggle-button">Enhancement</button>
          </section>
          <section className="functionality">
            <h2 className='qah2'>Monitor and Analyze Student Performance Data</h2>
            <Link className="link" to="/reports"><button className="toggle-button">Reports</button></Link>
          </section>
        </main>
    );
}
function QAChart(){
    return(
      <div className='chat'>
        <ChatComponent />
      </div>  
    );
}
export function Footer(){
    return(
        <footer className='qafooter'>
          <p>&copy; 2023 Quality Assurance Website</p>
        </footer>
    );
}

export default QADashboard;
