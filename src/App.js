import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import Admin from './Admin';
import Student from './Student';
import QADashboard from './QADash';
import DiscussionForum from './Discussion';
import QAreports from './Reports';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Announcements from './Announcements';
import CourseModules from './CourseModules';
import Assessments from './Assessments';
import Grades from './Grades';
import StudentDiscussion from './StudentDiscussion';
import StudentChat from './StudentChat';
import Profile from './Profile';
import UserActivity from './UserActivity';
import AboutUsPage from './AboutUs';
import ProgramCoordinator from './PC';
import Chat from './PCChat';
import Services from './Services';
import InstructorDiscussion from './InstructorDiscussion';
import Instructor from './Instructor';
import ChatApp from './InstructorChat';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Aravind Paths */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userActivity" element={<UserActivity />} />



        <Route path='/student' element={<Student />} />
        <Route path='/qadashboard' element={<QADashboard />} />
        <Route path='/qahome' element={<QADashboard />} />
        <Route path='/discussion' element={<DiscussionForum />} />
        <Route path='/reports' element={<QAreports />} />



        <Route path='/contact' element={<Contact />} />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/coursemodules' element={<CourseModules />} />
        <Route path='/assessments' element={<Assessments />} />
        <Route path='/grades' element={<Grades />} />
        <Route path='/studentdiscussion' element={<StudentDiscussion />} />
        <Route path='/studentchat' element={<StudentChat />} />



        {/* <Route path='/about' element={<About />} /> */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/pc" element={<ProgramCoordinator />} />
        <Route path="/pcChat" element={<Chat />} />



        <Route path="/instructor" element={<Instructor />} />
        <Route path="/instructorDiscussion" element={<InstructorDiscussion />} />
        <Route path="/instructorChat" element={<ChatApp />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
