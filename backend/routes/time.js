const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const SECRET = 'secret_key';

router.get('/', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        jwt.verify(token, SECRET);
        res.json({ time: new Date().toISOString() });
    } catch {
        res.status(401).json({ msg: 'Unauthorized' });
    }
});

module.exports = router;
