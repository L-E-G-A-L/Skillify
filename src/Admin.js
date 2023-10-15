import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-page">
      <div className="navbar">
        <a href="profile" className='admin-nav-a'>My Profile</a>
        <a href="login" className='admin-nav-a'>Sign Out</a>
      </div>
      <div className="admin-content">
        <button className="admin-dashboard-button">Dashboard</button>
        <div className="boxes">
          <div className="box">
            <h2 className="admin-box-h2">STUDENT</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn'>MANAGE STUDENTS</button>
              <button className='admin-btngrp-btn'>MANAGE COURSE</button>
              <button className='admin-btngrp-btn'>MANAGE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>VIEW REPORTS</button>
              <button className='admin-btngrp-btn'>VIEW PERFORMANCE</button>
            </div>
          </div>
          <div className="box">
            <h2 className="admin-box-h2">COORDINATOR</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn'>MANAGE COORDINATOR</button>
              <button className='admin-btngrp-btn'>HANDLE COURSE</button>
              <button className='admin-btngrp-btn'>MANAGE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>ASSIGN STUDENTS</button>
              <button className='admin-btngrp-btn'>REVIEWS</button>
            </div>
          </div>
          <div className="box">
            <h2 className="admin-box-h2">QA-OFFICER</h2>
            <div className="button-group">
              <button className='admin-btngrp-btn'>MANAGE QA-OFFICER</button>
              <button className='admin-btngrp-btn'>ASSIGN COURSE</button>
              <button className='admin-btngrp-btn'>HANDLE PERMISSIONS</button>
              <button className='admin-btngrp-btn'>REPORTS</button>
              <button className='admin-btngrp-btn'>PERFORMANCE</button>
            </div>
          </div>
        </div>
      </div>
      <footer className='admin-footer'>
        <p className='admin-footer-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Admin;
