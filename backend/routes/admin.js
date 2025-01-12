const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/kickout', async (req, res) => {
    const { username } = req.body;
    try {
        await pool.query('DELETE FROM tokens WHERE user_id=(SELECT id FROM users WHERE username=$1)', [username]);
        res.json({ msg: 'Kicked out' });
    } catch (e) {
        res.status(500).json({ msg: 'Error' });
    }
});

module.exports = router;
