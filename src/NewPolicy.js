import React, { useState } from 'react';
import './NewPolicy.css'; // Import the external CSS file
import { QANav,Footer } from './QADash';
import axios from 'axios';

function Policy(){
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
function NewPolicy(){
  const [policyName, setPolicyName] = useState('');
  const [policyDescription, setPolicyDescription] = useState('');
  const [policyAmount, setPolicyAmount] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleCreate = () => {
    //const current = new Date();
    if(policyName.length===0){
        alert("Policy Name should not be blank!");
    }
    else if(policyDescription.length===0){
        alert("Policy Decription should not be blank!")
    }
    // else if(startDate < current.getDate){
    //     alert("Start date should not be Past date!")
    // }
    // else if(expirationDate<current.getDate && startDate===expirationDate){
    //     alert("Invalid Expiration Date!")
    // }
    else{
        const url="http://localhost/create_policy.php";

        let fData = new FormData();
        fData.append('name',policyName);
        fData.append('description',policyDescription);
        fData.append('amount',policyAmount);
        fData.append('start_date',startDate);
        fData.append('expiration_date',expirationDate);

        axios.post(url,fData)
        .then(response=> alert(response.data))
        .then(setPolicyName(''),
        setPolicyDescription(''),
        setPolicyAmount(0),
        setStartDate(''),
        setExpirationDate(''))
        .catch(error=> alert(error));
    }
    // Create a new policy and pass the data to the parent component
    // const newPolicy = {
    //   name: policyName,
    //   description: policyDescription,
    //   amount: policyAmount,
    //   startDate,
    //   expirationDate,
    // };
    // // Make an HTTP POST request to the backend to create the policy
    // fetch('http://localhost/create_policy.php', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newPolicy),
    //   })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Handle success
    //     console.log('Policy created successfully:', data);
    //     onPolicyCreate(newPolicy);
    //     setPolicyName('');
    //     setPolicyDescription('');
    //     setPolicyAmount(0);
    //     setStartDate('');
    //     setExpirationDate('');
    //   })
    //   .catch((error) => {
    //     console.error('Fetch error:', error);
    //   });
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
