import React, { useState } from 'react';
import UserPopup from './UserPopup';
import './Admin.css';
import PermissionPopup from './PermissionPopup';

function Admin() {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showPermissionsPopup, setShowPermissionsPopup] = useState(false);
  const [role, setRole] = useState('');

  const openUserPopup = (userType) => {
    setRole(userType);
    setShowUserPopup(true);
  };

  const closeUserPopup = () => {
    setShowUserPopup(false);
    setRole('');
  };

  const openPermissionsPopup = (userType) => {
    setRole(userType);
    setShowPermissionsPopup(true);
  };

  const closePermissionsPopup = () => {
    setShowPermissionsPopup(false);
    setRole('');
  };
  
  return (
    <div className="admin-page">
      <div className="admin-navbar">
        <a href="profile" className='admin-nav-a'>My Profile</a>
        <a href="login" className='admin-nav-a'>Sign Out</a>
      </div>
      <div className="admin-content">
        {/* <button className="admin-dashboard-button">Dashboard</button> */}
        <div className="boxes">
          <div className="box">
            <h2 className="admin-box-h2">STUDENT</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn' onClick={() => openUserPopup('student')}>MANAGE STUDENTS</button>
              <button className='admin-btngrp-btn'>MANAGE COURSE</button>
              <button className='admin-btngrp-btn' onClick={() => openPermissionsPopup('student')}>MANAGE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>VIEW REPORTS</button>
              <button className='admin-btngrp-btn'>VIEW PERFORMANCE</button>
            </div>
          </div>
          <div className="box">
            <h2 className="admin-box-h2">COORDINATOR</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn' onClick={() => openUserPopup('coordinator')}>MANAGE COORDINATOR</button>
              <button className='admin-btngrp-btn'>HANDLE COURSE</button>
              <button className='admin-btngrp-btn' onClick={() => openPermissionsPopup('coordinator')}>MANAGE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>ASSIGN STUDENTS</button>
              <button className='admin-btngrp-btn'>REVIEWS</button>
            </div>
          </div>
          <div className="box">
            <h2 className="admin-box-h2">QA-OFFICER</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn' onClick={() => openUserPopup('qa')}>MANAGE QA-OFFICER</button>
              <button className='admin-btngrp-btn'>ASSIGN COURSE</button>
              <button className='admin-btngrp-btn' onClick={() => openPermissionsPopup('qa')}>HANDLE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>REPORTS</button>
              <button className='admin-btngrp-btn'>PERFORMANCE</button>
            </div>
          </div>
        </div>
        <h2 class="chat">Need to talk to someone? <a href="adminChat">Click here</a></h2>
      </div>
      <footer className='admin-footer'>
        <p className='admin-footer-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
      {showUserPopup && (
        <UserPopup userDataType={role} onClose={closeUserPopup} />
      )}
      {showPermissionsPopup && (
        <PermissionPopup userDataType={role} onClose={closePermissionsPopup} />
      )}
    </div>
  );
}

export default Admin;
