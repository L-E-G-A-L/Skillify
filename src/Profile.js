import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-navbar">
        <a href="#" className='profile-nav-a'>My Profile</a>
        <a href="login" className='profile-nav-a'>Sign Out</a>
      </div>
      <div className="content">
        <button className="dashboard-button">Dashboard</button>
      </div>
      <div className="profile-container">
        <img src="profilepic.png" alt="User Profile Picture" />
        <h1 className='profile-h1'>Student_Name</h1>
        <div className="profile-details">
          <div className="form-group">
            <label className='profile-label' htmlFor="full-name">Full Name:</label>
            <input className='profile-input' type="text" id="full-name" name="full-name" value="Name" />
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="display-name">Display Name:</label>
            <input className='profile-input' type="text" id="display-name" name="display-name" value="Name" />
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="email">Email:</label>
            <input className='profile-input' type="text" id="email" name="email" value="Name" />
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="phone-number">Phone Number</label>
            <input className='profile-input' type="number" id="phone-number" name="phone-number" value="1234561234" />
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="pronouns">Pronouns:</label>
            <input className='profile-input' type="text" id="pronouns" name="pronouns" value="None" />
          </div>
        </div>
        <div className="buttons">
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
      <footer className='profile-footer'>
        <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Profile;
