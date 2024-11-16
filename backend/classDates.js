const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  // Ensure environment variables are loaded

const app = express();
app.use(cors());  // Enable CORS for frontend requests

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;
const RANGE = 'Family Mediation Training!A2:D7';

app.get('/getClassDates', async (req, res) => {
    const range = req.query.range || RANGE;
    try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
