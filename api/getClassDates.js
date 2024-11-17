const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;
const RANGE = 'Family Mediation Training!A2:D7';

app.get('/getClassDates', async (req, res) => {
    try {
        const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

const PORT = process.env.PORT || 3000; // Ensure the port is defined
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
