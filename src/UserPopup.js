import React, { useEffect, useState } from "react";
import "./UserPopup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const UserPopup = ({ userDataType, onClose }) => {
  const [userData, setUserData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [editedData, setEditedData] = useState({});
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

  const handleEdit = (user_id) => {
    setEditingRow(user_id);
    setEditedData({
      user_name: userData.find(user => user.user_id === user_id).user_name,
      user_email: userData.find(user => user.user_id === user_id).user_email,
    });
  };
  const handleSave = (user_id) => {
    const editedUser = {
      user_id: user_id,
      user_name: editedData.user_name,
      user_email: editedData.user_email,
    };
  
    axios
      .post("http://localhost/LRFAuth.php", {
        action: "updateUser",
        user: editedUser,
      })
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) => {
            return prevData.map((user) => {
              if (user.user_id === user_id) {
                return {
                  ...user,
                  user_name: editedUser.user_name,
                  user_email: editedUser.user_email,
                };
              }
              return user;
            });
          });
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });
  
    setEditingRow(null);
  };

  const handleCancel = () => {
    setEditingRow(null); // Cancel editing
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
                      <div className="admin-user-pop-up-table-action-btns">
                        <button onClick={() => handleSave(user.user_id)}>
                          <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button onClick={handleCancel}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ) : (
                      <div className="admin-user-pop-up-table-action-btns">
                        <button onClick={() => handleEdit(user.user_id)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => handleDelete(user.user_id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="admin-user-popup-table-tr">
                <td colSpan="3" className="admin-user-popup-table-td admin-user-popup-table-td-nda">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPopup;
