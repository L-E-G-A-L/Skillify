const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "Group15.WDM@gmail.com",
    pass: "rdyamrrxylveqyif",
  },
});


app.post("/send-email", (req, res) => {
  const { question, foundDiscrepancy, comments } = req.body;

  const mailOptions = {
    from: "Group15.WDM@gmail.com",
    to: "Group15.WDM@gmail.com",
    subject: "Evaluation Form Submission",
    text: `
      Question: ${question}
      Found Discrepancy: ${foundDiscrepancy}
      Additional Comments: ${comments}
    `,
  };


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

app.post('/registerUser', (req, res) => {
  const { user_email, user_token } = req.body;
  console.log("this",user_email)

  const verificationLink = `http://localhost:3000/verifyUser?token=${user_token}&email=${user_email}`;
  const mailOptions = {
    from: 'Group15.WDM@gmail.com',
    to: user_email,
    subject: 'Skillify Registration',
    text: `
      Thank you for registering with Skillify. Please click the following link to verify your email:
      ${verificationLink}
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email sending failed.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully to ' + user_email);
    }
  });
});