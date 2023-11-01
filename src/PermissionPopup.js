import React, { useEffect, useState } from "react";
import "./PermissionPopup.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const PermissionPopup = ({ userDataType, onClose }) => {
  const [userData, setUserData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [Data, setData] = useState(true);
  const [editedUserRole, setEditedUserRole] = useState(null);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user_id, user_role) => {
    setEditingRow(user_id);
    setEditedUserRole(user_role);
  };

  const handleSaveUserRole = (user_id) => {
    axios
      .post("http://localhost/LRFAuth.php", {
        action: "updateUserRole",
        user_id: user_id,
        user_role: editedUserRole,
      })
      .then((response) => {
        if (response.data.success) {
          fetchData();
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error saving user role:", error);
      });

    setEditingRow(null);
  };

  return (
    <div className="permissions-popup">
      <div className="permissions-popup-content">
        <span onClick={onClose} className="permissions-popup-close-button">
          &times;
        </span>
        <h2>Manage Permissions</h2>
        <table className="permissions-popup-table">
          <thead>
            <tr className="permissions-popup-table-tr">
              <th className="permissions-popup-table-th">User Name</th>
              <th className="permissions-popup-table-th">User Email</th>
              <th className="permissions-popup-table-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data ? (
              userData.map((user, index) => (
                <tr className="permissions-popup-table-tr" key={user.user_id}>
                  <td className="permissions-popup-table-td">
                    {user.user_name}
                  </td>
                  <td className="permissions-popup-table-td">
                    {user.user_email}
                  </td>
                  <td className="permissions-popup-table-td permissions-popup-edit-button">
                    {editingRow === user.user_id ? (
                      <div className="permissions-popup-radio-group">
                        <div className="permissions-radio-group">
                          <label className="permissions-radio-label">
                            <input
                              type="radio"
                              value="student"
                              checked={editedUserRole === "student"}
                              onChange={() => setEditedUserRole("student")}
                            />
                            Student
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
                            onClick={() => handleSaveUserRole(user.user_id)}
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
                      <button
                        onClick={() => handleEdit(user.user_id, user.role)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="permissions-popup-table-tr">
                <td
                  colSpan="3"
                  className="permissions-popup-table-td permissions-popup-table-td-nda"
                >
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

export default PermissionPopup;
