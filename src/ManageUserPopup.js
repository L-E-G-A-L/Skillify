import React, { useEffect, useState } from "react";
import "./css/ManageUserPopup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function ManageUserPopup({ onClose }) {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [error, setError] = useState(false);
  const [Data, setData] = useState(true);
  const [editedData, setEditedData] = useState({});
  const [editingRow, setEditingRow] = useState(null);
  const [ipqUserData, setIPQUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Fill all details");
  const [userData, setUserData] = useState([]);
  const [editedUserRole, setEditedUserRole] = useState(null);

  const handleEdit = (user_id, user_role) => {
    setEditingRow(user_id);
    setEditedUserRole(user_role);
    const userToEdit = ipqUserData.find((user) => user.user_id === user_id);

    if (userToEdit) {
      setEditingRow(user_id);
      setEditedData({
        user_name: userToEdit.user_name,
        user_email: userToEdit.user_email,
      });
    } else {
      console.error(`User with user_id ${user_id} not found in userData.`);
    }
  };

  const handleDelete = (user_id) => {
    axios
      .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
        action: "deleteUser",
        user_id: user_id,
      })
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) =>
            prevData.filter((user) => user.user_id !== user_id)
          );
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleSave = (user_id) => {
    const editedUser = {
      user_id: user_id,
      user_name: editedData.user_name,
      user_email: editedData.user_email,
      user_role: editedUserRole,
    };
    axios
      .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
        action: "updateUserWithRole",
        user: editedUser,
      })
      .then((response) => {
        if (response.data.success) {
          fetchDetails();
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });

    setEditingRow(null);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  const fetchDetails = () => {
    axios
      .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
        action: "getIPQUserDetails",
      })
      .then((response) => {
        if (response.data.users.length === 0) {
          setData(false);
        } else {
          setData(true);
          setIPQUserData(response.data.users);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const onAddHandler = () => {
    const generateRandomToken = (length) => {
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let token = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        token += charset[randomIndex];
      }
      return token;
    };
    const data = userData;
    const user_token = generateRandomToken(32);

    console.log(data);
    setError(false);
    setErrorMessage("Fill all details");
    if (
      userData.firstName &&
      userData.lastName &&
      isEmailValid(userData.email) &&
      userData.password.length >= 8 &&
      userData.password &&
      isPhoneNumberValid(userData.phoneNumber) &&
      userData.userType
    ) {
      axios
        .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
          action: "register",
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          password: userData.password,
          phoneNumber: userData.phoneNumber,
          role: userData.userType,
          token: user_token,
        })
        .then((response) => {
          if (response.data.success) {
            toggleUserForm();
          } else {
            setError(true);
            setErrorMessage(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
      if (!isEmailValid(userData.email)) setErrorMessage("Enter a valid email");
      else if (userData.password.length < 8)
        setErrorMessage("Password must be at least 8 characters");
      else if (!isPhoneNumberValid(userData.phoneNumber))
        setErrorMessage("Enter a valid phone number");
      else setErrorMessage("Fill all details");
    }
  };

  return (
    <div className="ManageUser-Popup">
      <div className="ManageUser-Popup-mainDiv">
        <div className="ManageUser-popup-header">
          <span onClick={onClose} className="ManageUser-popup-close-button">
            &times;
          </span>
          <h2>User Details</h2>
        </div>
        <div className="ManageUser-popup-content">
          {showAddUserForm ? (
            <div className="ManageUser-popup-form">
              <label className="ManageUser-popup-AddUserInputLabel">
                First Name:
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className="ManageUser-popup-AddUserInput"
                onChange={(e) => handleInputChange(e)}
              />

              <label className="ManageUser-popup-AddUserInputLabel">
                Last Name:
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                className="ManageUser-popup-AddUserInput"
                onChange={(e) => handleInputChange(e)}
              />

              <label className="ManageUser-popup-AddUserInputLabel">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="ManageUser-popup-AddUserInput"
                onChange={(e) => handleInputChange(e)}
              />

              <label className="ManageUser-popup-AddUserInputLabel">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="ManageUser-popup-AddUserInput"
                onChange={(e) => handleInputChange(e)}
              />

              <label className="ManageUser-popup-AddUserInputLabel">
                Mobile Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => handleInputChange(e)}
                className="ManageUser-popup-AddUserInput"
              />

              <label className="ManageUser-popup-AddUserInputLabel">
                User Type:
              </label>
              <div className="ManageUser-popup-UserRole">
                <label className="ManageUser-popup-AddUserRoleLabel">
                  <input
                    type="radio"
                    name="userType"
                    value="instructor"
                    className="ManageUser-popup-AddUserRole"
                    onChange={(e) => handleInputChange(e)}
                  />{" "}
                  Instructor
                </label>
                <label className="ManageUser-popup-AddUserRoleLabel">
                  <input
                    type="radio"
                    name="userType"
                    value="pc"
                    className="ManageUser-popup-AddUserRole"
                    onChange={(e) => handleInputChange(e)}
                  />{" "}
                  Program Coordinator
                </label>
                <label className="ManageUser-popup-AddUserRoleLabel">
                  <input
                    type="radio"
                    name="userType"
                    value="qa"
                    className="ManageUser-popup-AddUserRole"
                    onChange={(e) => handleInputChange(e)}
                  />{" "}
                  QA
                </label>
              </div>
              {error && (
                <h5 className="ManageUser-popup-error-message">
                  {errorMessage}
                </h5>
              )}
              <div className="ManageUser-popup-ActionBtn">
                <button
                  className="ManageUser-popup-AddUserBtn"
                  onClick={() => onAddHandler(userData)}
                >
                  Add
                </button>
                <button
                  className="ManageUser-popup-CancelBtn"
                  onClick={() => toggleUserForm()}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="ManageUser-popup-user-details">
              <div className="ManageUser-popup-footer">
                <button
                  onClick={toggleUserForm}
                  className="ManageUser-popup-mainAddUserBtn"
                >
                  Add User
                </button>
              </div>
              <table className="ManageUser-popup-table">
                <thead>
                  <tr className="ManageUser-popup-tr">
                    <th className="ManageUser-popup-th">Name</th>
                    <th className="ManageUser-popup-th">Email</th>
                    <th className="ManageUser-popup-th">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Data ? (
                    ipqUserData.map((user, index) => (
                      <tr
                        className="admin-user-popup-table-tr"
                        key={user.user_id}
                      >
                        <td className="admin-user-popup-table-td">
                          {editingRow === user.user_id ? (
                            <input
                              type="text"
                              value={editedData.user_name}
                              onChange={(e) =>
                                setEditedData({
                                  ...editedData,
                                  user_name: e.target.value,
                                })
                              }
                            />
                          ) : (
                            user.user_name
                          )}
                        </td>
                        <td className="admin-user-popup-table-td">
                          {editingRow === user.user_id ? (
                            <input
                              type="text"
                              value={editedData.user_email}
                              onChange={(e) =>
                                setEditedData({
                                  ...editedData,
                                  user_email: e.target.value,
                                })
                              }
                            />
                          ) : (
                            user.user_email
                          )}
                        </td>

                        <td className="admin-user-popup-table-td">
                          {editingRow === user.user_id ? (
                            <div className="permissions-popup-radio-group">
                              <div className="permissions-radio-group">
                                <label className="permissions-radio-label">
                                  <input
                                    type="radio"
                                    value="instructor"
                                    checked={editedUserRole === "instructor"}
                                    onChange={() =>
                                      setEditedUserRole("instructor")
                                    }
                                  />
                                  Instructor
                                </label>
                                <label className="permissions-radio-label">
                                  <input
                                    type="radio"
                                    value="pc"
                                    checked={editedUserRole === "pc"}
                                    onChange={() => setEditedUserRole("pc")}
                                  />
                                  Program Coordinator
                                </label>
                                <label className="permissions-radio-label">
                                  <input
                                    type="radio"
                                    value="qa"
                                    checked={editedUserRole === "qa"}
                                    onChange={() => setEditedUserRole("qa")}
                                  />
                                  QA
                                </label>
                              </div>
                              <div className="permissions-button-group">
                                <button
                                  onClick={() => handleSave(user.user_id)}
                                  className="permissions-button-edit"
                                >
                                  <FontAwesomeIcon icon={faSave} />
                                </button>
                                <button
                                  onClick={() => setEditingRow(null)}
                                  className="permissions-button-edit"
                                >
                                  <FontAwesomeIcon icon={faTimes} />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="admin-user-pop-up-table-action-btns">
                              <button
                                onClick={() =>
                                  handleEdit(user.user_id, user.role)
                                }
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                onClick={() => handleDelete(user.user_id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="admin-user-popup-table-tr">
                      <td
                        colSpan="3"
                        className="admin-user-popup-table-td admin-user-popup-table-td-nda"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageUserPopup;
