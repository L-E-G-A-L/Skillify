import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { onLogOut } from './GlobalFunctions';

function Profile() {
  const navigation = useNavigate();
  const [userData, setUserData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    user_name: '',
    user_email: '',
    phoneNumber: '',
    user_role: userData.user_role,
  });
  const [Data, setData] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Fill all details");
  const userRole = sessionStorage.getItem("userRole");
  const user_id = sessionStorage.getItem("userId");

  const goBack = () => {
    if (userRole === "admin") {
      navigation("/admin");
    } else if (userRole === "student") {
      navigation("/student");
    } else if (userRole === "pc") {
      navigation("/pc");
    } else if (userRole === "instructor") {
      navigation("/instructor");
    } else if (userRole === "qa") {
      navigation("/qadashboard");
    } else {
      navigation("/");
    }
  };
  const handleEdit = () => {
    setIsEditMode(true);
    setEditedData({ ...userData });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSave = (user_id) => {
    const editedUser = {
      user_id: user_id,
      user_name: editedData.user_name,
      user_email: editedData.user_email,
      user_number: editedData.phoneNumber,
      user_role: userData.user_role
    };
    if(
      editedData.user_name !== "" &&
      isEmailValid(editedData.user_email)  &&
      isPhoneNumberValid(editedData.phoneNumber) 
    ) {
      axios
        .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
          action: "updateProfile",
          user: editedUser,
        })
        .then((response) => {
          if (response.data.success) {
            fetchData()
          } else {
            console.log(response.data.error);
          }
        })
        .catch((error) => {
          console.error("Error saving user:", error);
        });
        setIsEditMode(false)
    } else {
      setError(true);
      if(!isEmailValid(editedData.user_email)) setErrorMessage("Enter a valid email");
      else if(!isPhoneNumberValid(editedData.phoneNumber)) setErrorMessage("Enter a valid phone number");
      else setErrorMessage("Fill all details");
    }
  };

  const fetchData = () => {
    console.log(user_id)
    axios
      .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
        action: "getAllDetails",
        user_id: user_id,
      })
      .then((response) => {
        if (response.data.success) {
          setData(true);
          setUserData(response.data.user);
        } else {
          setData(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="profile-page">
      <div className="profile-navbar">
        <a href="#" className='profile-nav-a'>My Profile</a>
        <a href="login" className='profile-nav-a' onClick={() => onLogOut()}>Sign Out</a>
      </div>
      <div className="profile-content">
        <button className="profile-dashboard-button" onClick={() => goBack()}>Dashboard</button>
      </div>
      <div className="profile-container">
        <img src="profilepic.png" alt="User Profile Picture" />
        <h1 className='profile-h1'>User Name</h1>
        <div className="profile-details">
          <div className="form-group">
            <label className='profile-label' htmlFor="full-name">Full Name:</label>
            {isEditMode ? (
              <input
                className='profile-input'
                type="text"
                id="full-name"
                name="full-name"
                value={editedData.user_name}
                onChange={(e) =>
                  setEditedData({ ...editedData, user_name: e.target.value })
                }
              />
            ) : (
              <span>{userData.user_name}</span>
            )}
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="email">Email:</label>
            {isEditMode ? (
              <input
                className='profile-input'
                type="text"
                id="email"
                name="email"
                value={editedData.user_email}
                onChange={(e) =>
                  setEditedData({ ...editedData, user_email: e.target.value })
                }
              />
            ) : (
              <span>{userData.user_email}</span>
            )}
          </div>
          <div className="form-group">
            <label className='profile-label' htmlFor="phone-number">Phone Number</label>
            {isEditMode ? (
              <input
                className='profile-input'
                type="number"
                id="phone-number"
                name="phone-number"
                value={editedData.phoneNumber}
                onChange={(e) =>
                  setEditedData({ ...editedData, phoneNumber: e.target.value })
                }
              />
            ) : (
              <span>{userData.phoneNumber}</span>
            )}
          </div>
        </div>
        <div className="buttons">
          {isEditMode ? (
            <div>
              {error && <h5 className="login-error-message profile-error-message">{errorMessage}</h5>}
              <button className="save-button" onClick={() =>handleSave(userData.user_id)}>Save</button>
              <button className="cancel-button" onClick={() => setIsEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
      <footer className='profile-footer'>
        <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Profile;