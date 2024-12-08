const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;

// Function to fetch data from Google Sheets
const fetchSheetData = async (range, res) => {
    try {
        const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
        );

        if (!response.data || !response.data.values) {
            return res.status(404).send('No data found in the specified range.');
        }

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.response?.statusText || error.message);
        res.status(500).send(`Error fetching data: ${error.response?.statusText || error.message}`);
    }
};

// Separate routes for each training type
app.get('/getFamilyMediation', (req, res) => {
    const RANGE = 'Family Mediation Training!A2:C7';
    fetchSheetData(RANGE, res);
});

app.get('/getCivilMediation', (req, res) => {
    const RANGE = 'Civil Mediation Training!A2:C7';
    fetchSheetData(RANGE, res);
});

app.get('/getFamilyToCivil', (req, res) => {
    const RANGE = 'Family to Civil Training!A2:C3';
    fetchSheetData(RANGE, res);
});

app.get('/getCivilToFamily', (req, res) => {
    const RANGE = 'Civil to Family Training!A2:C5';
    fetchSheetData(RANGE, res);
});

app.get('/getDomesticViolence', (req, res) => {
    const RANGE = 'Domestic Violence Training!A2:C4';
    fetchSheetData(RANGE, res);
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
