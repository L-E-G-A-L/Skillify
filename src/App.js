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
// import Homepage from './Home';
// import QADashboard from './QADash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* My Paths */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />

        {/* Sridhar Paths */}
        <Route path='/student' element={<Student />} />
        <Route path='/qa' element={<QADashboard />} />
        <Route path='/discussion' element={<DiscussionForum />} />
        <Route path='/qareports' element={<QAreports />} />

        {/* Swetha Paths */}
      </Routes>
    </Router>
  );
}

export default App;
