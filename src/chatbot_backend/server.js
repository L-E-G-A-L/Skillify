const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can use any port you prefer

// Middleware
app.use(bodyParser.json());

// Endpoint to handle requests from frontend
app.post('/getBotResponse', async (req, res) => {
  try {
    const { userMessage } = req.body;

    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: `User: ${userMessage}`,
      max_tokens: 1024,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
        'Content-Type': 'application/json',
      },
    });

    const botResponse = response.data.choices[0].text;
    res.json({ botResponse });
  } catch (error) {
    console.error('Error fetching bot response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
