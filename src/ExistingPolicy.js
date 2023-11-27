import React, { useState, useEffect } from "react";
import "./css/ExistingPolicy.css";
import { QANav, Footer } from "./QADash";

function Existing_Policy() {
  return (
    <html lang="en">
      <body className="newpolbody">
        <QANav title="Existing Policies" />
        <ExistingPolicies />
        <Footer />
      </body>
    </html>
  );
}
function ExistingPolicies() {
  const [policies, setPolicies] = useState([]);
  const [editablePolicy, setEditablePolicy] = useState(null);

  useEffect(() => {
    // Fetch existing policies from the PHP script
    fetch("https://sxt7404.uta.cloud/php/existing_policy.php")
      .then((response) => response.json())
      .then((data) => setPolicies(data))
      .catch((error) => console.error("Error fetching policies:", error));
  }, []);

  const handleEditClick = (policy) => {
    setEditablePolicy(policy);
  };
  // Function to handle changes when editing policy details
  const handlePolicyChange = (policy, field, value) => {
    setPolicies((prevPolicies) => {
      const updatedPolicies = [...prevPolicies];
      const index = updatedPolicies.indexOf(policy);
      updatedPolicies[index][field] = value;
      return updatedPolicies;
    });
  };

  // Function to save the edited policy
  const handleSaveClick = (policy) => {
    // Create an object with the updated policy data
    const updatedPolicy = {
      id: policy.id,
      name: policy.name,
      description: policy.description,
      amount: policy.amount,
      start_date: policy.start_date,
      expiration_date: policy.expiration_date,
    };

    // Send a POST request to the PHP script to update the policy
    fetch("https://sxt7404.uta.cloud/php/update_policy.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPolicy),
    })
      .then((response) => response.text())
      .then((responseText) => {
        if (responseText === "Policy updated successfully") {
          // Update the state with the edited policy
          setPolicies((prevPolicies) =>
            prevPolicies.map((p) =>
              p.id === policy.id ? { ...p, ...updatedPolicy } : p
            )
          );
          setEditablePolicy(null); // Exit edit mode
        } else {
          // Handle errors, e.g., display an error message
          console.error("Error updating policy:", responseText);
        }
      })
      .catch((error) => {
        console.error("Error updating policy:", error);
      });
  };

  const handleDeleteClick = (policy) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm(
      "Press OK to delete or Cancel to keep."
    );

    if (confirmDelete) {
      // Remove the policy from the webpage
      setPolicies((prevPolicies) =>
        prevPolicies.filter((p) => p.id !== policy.id)
      );

      // Send a request to delete the policy from the database
      fetch(`https://sxt7404.uta.cloud/php/delete_policy.php?id=${policy.id}`)
        .then((response) => response.text())
        .then((responseText) => {
          if (responseText === "Policy deleted successfully") {
            console.log("Policy deleted successfully.");
          } else {
            console.error("Error deleting policy:", responseText);
          }
        })
        .catch((error) => {
          console.error("Error deleting policy:", error);
        });
    }
  };

  return (
    <div className="existing-policies-container">
      {/* <h2>Existing Policies</h2> */}
      <table className="expolicytable">
        <thead className="expolicythead">
          <tr className="expolicytr">
            <th className="expolicyth">Policy Name</th>
            <th className="expolicyth">Description</th>
            <th className="expolicyth">Amount (USD)</th>
            <th className="expolicyth">Start Date</th>
            <th className="expolicyth">Expiration Date</th>
            <th className="expolicyth">Edit/Delete Policies</th>
          </tr>
        </thead>
        <tbody className="expolicytbody">
          {policies.map((policy) => (
            <tr className="expolicytr" key={policy.id}>
              <td className="expolicytd">
                {editablePolicy === policy ? (
                  <input
                    type="text"
                    value={policy.name}
                    onChange={(e) =>
                      handlePolicyChange(policy, "name", e.target.value)
                    }
                  />
                ) : (
                  policy.name
                )}
              </td>
              <td className="expolicytd">
                {editablePolicy === policy ? (
                  <input
                    type="text"
                    value={policy.description}
                    onChange={(e) =>
                      handlePolicyChange(policy, "description", e.target.value)
                    }
                  />
                ) : (
                  policy.description
                )}
              </td>
              <td className="expolicytd">
                {editablePolicy === policy ? (
                  <input
                    type="number"
                    value={policy.amount}
                    onChange={(e) =>
                      handlePolicyChange(policy, "amount", e.target.value)
                    }
                  />
                ) : (
                  policy.amount
                )}
              </td>
              <td className="expolicytd">
                {editablePolicy === policy ? (
                  <input
                    type="date"
                    value={policy.start_date}
                    onChange={(e) =>
                      handlePolicyChange(policy, "start_date", e.target.value)
                    }
                  />
                ) : (
                  policy.start_date
                )}
              </td>
              <td className="expolicytd">
                {editablePolicy === policy ? (
                  <input
                    type="date"
                    value={policy.expiration_date}
                    onChange={(e) =>
                      handlePolicyChange(
                        policy,
                        "expiration_date",
                        e.target.value
                      )
                    }
                  />
                ) : (
                  policy.expiration_date
                )}
              </td>
              <td className="expolicytd">
                <div className="button-container">
                  {editablePolicy === policy ? (
                    <>
                      <button
                        className="savepolicybutton"
                        onClick={() => handleSaveClick(policy)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="editpolicybutton"
                        onClick={() => handleEditClick(policy)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteClick(policy)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Existing_Policy;
