const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const SHEET_ID = process.env.SHEET_ID;
        const API_KEY = process.env.API_KEY;
        const RANGE = req.query.range || 'Family Mediation Training!A2:D7';

        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch class dates' });
    }
};
