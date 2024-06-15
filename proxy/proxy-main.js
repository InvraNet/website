const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 8059;

const allowedOrigins = ['https://invra.net', 'http://127.0.0.1:3000'];

const allowOnlyCertainRequests = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        next();
    } else {
        res.status(403).sendFile(path.join(__dirname, 'www', '403.html'));
    }
};

app.use(cors());
app.set('trust proxy', true);
app.use('/www', express.static(path.join(__dirname, 'www')));

app.get('/v2/pub', async (req, res) => {
    const filePath = './api/downloadmap.json';
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).sendFile(path.join(__dirname, 'www', '500.html'));
    }
});

app.get('/v2/keys', allowOnlyCertainRequests, async (req, res) => {
    const filePath = './api/keys.json';
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).sendFile(path.join(__dirname, 'www', '500.html'));
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.status === 403) {
        res.status(403).sendFile(path.join(__dirname, 'www', '403.html'));
    } else {
        res.status(500).sendFile(path.join(__dirname, 'www', '500.html'));
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
