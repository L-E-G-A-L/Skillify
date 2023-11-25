import express from "express";
import { ChatGPTAPI } from "chatgpt";
import bodyParser from "body-parser";
require("dotenv").config();
const app = express();
const port = 3001; // You can use any port you prefer

// Middleware
app.use(bodyParser.json());

const api = new ChatGPTAPI({
  apiKey: process.env.API_KEY,
  debug: true,
});

app.post("/getBotResponse", async (req, res) => {
  const { message } = req.body;
  //   console.log(message);
  let response;
  try {
    response = await api.sendMessage(`"${message}"`);
  } catch (e) {
    res.send(e);
  }
  res.send(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
