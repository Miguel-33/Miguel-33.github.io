const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  // Ensure environment variables are loaded

const app = express();

// Restrict CORS to specific origins
const allowedOrigins = ['https://miguel-33-github-hlgfflvxo-miguels-projects-1241d8e4.vercel.app']; // Add your frontend origin
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'], // Specify allowed methods
    credentials: true,        // Allow cookies or credentials if needed
}));

// Environment variables
const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;
const RANGE = 'Family Mediation Training!A2:D7';

// Route to fetch class dates from Google Sheets API
app.get('/getClassDates', async (req, res) => {
    const range = req.query.range || RANGE; // Allow dynamic range queries
    try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`);
        res.json(response.data); // Return data as JSON
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        res.status(500).send('Error fetching data'); // Return server error response
    }
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
