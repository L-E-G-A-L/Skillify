const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000; // Change this to your desired port

app.use(bodyParser.json());
app.use(cors());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Change this to your email service provider
  auth: {
    user: "", // Your email
    pass: "", // Your email password
  },
});

// Define an endpoint to send emails
app.post("/send-email", (req, res) => {
  const { question, foundDiscrepancy, comments } = req.body;

  const mailOptions = {
    from: "",
    to: "", // Receiver's email
    subject: "Evaluation Form Submission",
    text: `
      Question: ${question}
      Found Discrepancy: ${foundDiscrepancy}
      Additional Comments: ${comments}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Email sending failed.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
