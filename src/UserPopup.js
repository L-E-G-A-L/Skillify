import React, { useEffect, useState } from "react";
import "./UserPopup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserPopup = ({ userDataType, onClose }) => {
  const [userData, setUserData] = useState([]);
  const [Data, setData] = useState(true);

  const handleDelete = (user_id) => {
    axios
      .post("http://localhost/LRFAuth.php", {
        action: "deleteUser",
        user_id: user_id,
      })
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) => prevData.filter((user) => user.user_id !== user_id));
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost/LRFAuth.php", {
        action: "getUserDetails",
        role: userDataType,
      })
      .then((response) => {
        if (response.data.users.length === 0) {
          setData(false);
        } else {
          setData(true);
          setUserData(response.data.users);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userDataType]);

  return (
    <div className="admin-user-popup">
      <div className="admin-user-popup-content">
        <span onClick={onClose} className="admin-user-popup-close-button">
          &times;
        </span>
        <h2>User Details</h2>
        <table className="admin-user-popup-table">
          <thead>
            <tr className="admin-user-popup-table-tr">
              <th className="admin-user-popup-table-th">User Name</th>
              <th className="admin-user-popup-table-th">User Email</th>
              <th className="admin-user-popup-table-th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data ? (
              userData.map((user, index) => (
                <tr className="admin-user-popup-table-tr" key={user.user_id}>
                  <td className="admin-user-popup-table-td">{user.user_name}</td>
                  <td className="admin-user-popup-table-td">{user.user_email}</td>
                  <td className="admin-user-popup-table-td admin-user-popup-table-delete-button">
                    <button onClick={() => handleDelete(user.user_id)}>
                      <FontAwesomeIcon icon={faTrash} className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="admin-user-popup-table-tr">
                <td colSpan="3" className="admin-user-popup-table-td admin-user-popup-table-td-nda">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPopup;
