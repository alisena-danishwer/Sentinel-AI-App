// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Route to handle prediction
app.post('/predict', (req, res) => {
    const userText = req.body.text;

    if (!userText) {
        return res.json({ result: "Please enter text." });
    }

    // Spawn a Python process
    const pythonProcess = spawn('python', ['predict.py', userText]);

    pythonProcess.stdout.on('data', (data) => {
        const result = data.toString().trim();
        res.json({ result: result });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
        res.status(500).json({ result: "Error processing request" });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});