import React, { useState, useEffect } from 'react';
import { Footer, QANav } from "./QADash";
import './Form.css';
import axios from 'axios';

function EvaluationFormforQA() {
    return (
      <html lang="en">
        <body className="repbody">
          <QANav title="Form" />
          <EvaluationForm />
          <Footer />
        </body>
      </html>
    );
  }

function EvaluationForm() {
  const [foundDiscrepancy, setFoundDiscrepancy] = useState(false);
  const [comments, setComments] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleDiscrepancyChange = (e) => {
    setFoundDiscrepancy(e.target.value === 'Yes');
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };
  const handleFormSubmit = () => {
    axios.post('http://localhost:4000/send-email', {
      question: 'Did you find any discrepancies in the exam?',
      foundDiscrepancy: foundDiscrepancy ? 'Yes' : 'No',
      comments,
    })
    .then(response => {
      console.log(response.data);
      setEmailSent(true); // Set emailSent to true on success
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="evaluation-form">
      <h2 className='evaluation-h2'>Evaluation Form</h2>
      <div className="question">
        <p className='evaluation-p'>Did you find any discrepancies in the exam?</p>
        <div className="radio-group">
          <label className='evaluation-label'>
            <input
              type="radio"
              name="discrepancy"
              value="Yes"
              checked={foundDiscrepancy}
              onChange={handleDiscrepancyChange}
            />
            Yes
          </label>
          <label className='evaluation-label'>
            <input
              type="radio"
              name="discrepancy"
              value="No"
              checked={!foundDiscrepancy}
              onChange={handleDiscrepancyChange}
            />
            No
          </label>
        </div>
      </div>
      {foundDiscrepancy && (
        <div className="comment-box">
          <label className='evaluation-label1'>Additional Comments:</label>
          <textarea className='evaluation-textarea'
            value={comments}
            onChange={handleCommentsChange}
          ></textarea>
        </div>
      )}
      {emailSent ? (
        <div className="success-message">Email sent successfully!</div>
      ) : (
      <button className="evaluation-submit-button" onClick={handleFormSubmit}>Submit</button>
      )}
    </div>
  );
}

export default EvaluationFormforQA;
