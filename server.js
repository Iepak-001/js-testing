const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const inputText = req.body.inputText;
  res.send(`<h1>You submitted: ${inputText}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
