import React, { useState } from "react";
import "./NewPolicy.css";
import { QANav, Footer } from "./QADash";
import axios from "axios";

function Policy() {
  return (
    <html lang="en">
      <body className="newpolbody">
        <QANav title="NewPolicy" />
        <NewPolicy />
        <Footer />
      </body>
    </html>
  );
}
function NewPolicy() {
  const [policyName, setPolicyName] = useState("");
  const [policyDescription, setPolicyDescription] = useState("");
  const [policyAmount, setPolicyAmount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleCreate = () => {
    if (policyName.length === 0) {
      alert("Policy Name should not be blank!");
    } else if (policyDescription.length === 0) {
      alert("Policy Decription should not be blank!");
    } else {
      const url = "https://sxt7404.uta.cloud/php/create_policy.php";

      let fData = new FormData();
      fData.append("name", policyName);
      fData.append("description", policyDescription);
      fData.append("amount", policyAmount);
      fData.append("start_date", startDate);
      fData.append("expiration_date", expirationDate);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .then(
          setPolicyName(""),
          setPolicyDescription(""),
          setPolicyAmount(0),
          setStartDate(""),
          setExpirationDate("")
        )
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="new-policy-container">
      <h2>Create New Policy</h2>
      <div>
        <label>Policy Name:</label>
        <input
          type="text"
          value={policyName}
          onChange={(e) => setPolicyName(e.target.value)}
        />
      </div>
      <div>
        <label>Description of Policy:</label>
        <textarea
          value={policyDescription}
          onChange={(e) => setPolicyDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Amount in Dollars:</label>
        <input
          type="number"
          value={policyAmount}
          onChange={(e) => setPolicyAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Policy Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </div>
      <button onClick={handleCreate}>Create Policy</button>
    </div>
  );
}

export default Policy;
