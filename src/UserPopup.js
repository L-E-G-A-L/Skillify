import React, { useEffect, useState } from "react";
import "./UserPopup.css";
import axios from "axios";

const UserPopup = ({ userDataType, onClose }) => {
  const [userData, setUserData] = useState([]);
  const [Data, setData] = useState(true);

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
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {Data ? (
              userData.map((user, index) => (
                <tr className="admin-user-popup-table-tr" key={index}>
                  <td className="admin-user-popup-table-td">{user.user_name}</td>
                  <td className="admin-user-popup-table-td">{user.user_email}</td>
                </tr>
              ))
            ) : (
              <tr className="admin-user-popup-table-tr">
                <td colSpan="2" className="admin-user-popup-table-td admin-user-popup-table-td-nda">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPopup;
