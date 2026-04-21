const express = require('express');
const path = require('path');
require('dotenv').config();
const { router: urlRouter, setDomain } = require('./routes/url');
const app = express();
const port = process.env.PORT || 3000;

// Get short URL domain from environment variable
const shortUrlDomain = process.env.SHORT_URL_DOMAIN || `http://localhost:${port}`;
setDomain(shortUrlDomain);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// API routes
app.use('/api/url', urlRouter);

// Serve the index.html file

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port, () => {
    console.log(`URL Shortener app listening on port ${port}`);
});