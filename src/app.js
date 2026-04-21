const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Get short URL domain from environment variable
const shortUrlDomain = process.env.SHORT_URL_DOMAIN || `http://localhost:${port}`;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Simple in-memory storage for shortened URLs
const urlMap = {};
let urlCount = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    // Generate a short code
    urlCount++;
    const shortCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `${shortUrlDomain}/${shortCode}`;

    // Store the mapping
    urlMap[shortCode] = url;

    res.json({ shortUrl: shortUrl });
});

// Redirect endpoint
app.get('/:shortCode', (req, res) => {
    const { shortCode } = req.params;
    const originalUrl = urlMap[shortCode];

    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(port, () => {
    console.log(`URL Shortener app listening on port ${port}`);
});