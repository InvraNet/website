const express = import('express');
const cors = import('cors');
const fetch = import('node-fetch');

const app = express();
const port = 80;

app.use(cors());

app.get('/pub', async (req, res) => {
    const url = 'http://172.105.168.31/pub/downloadmap.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching the URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Proxy server running on port ${port} (HTTP)`);
});