const express = require('express');
const router = express.Router();

// Simple in-memory storage for shortened URLs
const urlMap = {};
let urlCount = 0;

// Initialize with optional domain parameter
let shortUrlDomain = 'http://localhost:3000';

const setDomain = (domain) => {
    shortUrlDomain = domain;
};

// Shorten URL endpoint
router.post('/shorten', (req, res) => {
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
router.get('/:shortCode', (req, res) => {
    const { shortCode } = req.params;
    const originalUrl = urlMap[shortCode];

    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

module.exports = {
    router,
    setDomain
};
