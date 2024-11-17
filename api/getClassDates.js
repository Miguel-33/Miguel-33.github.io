const axios = require('axios');
require('dotenv').config();

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;
const RANGE = 'Family Mediation Training!A2:D7';

module.exports = async (req, res) => {
    // Set CORS headers for Vercel to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

    // Check for pre-flight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Return immediately on OPTIONS request
    }

    // Handle the actual request
    try {
        const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        res.status(200).json(response.data); // Send data as JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data'); // Send error message
    }
};
