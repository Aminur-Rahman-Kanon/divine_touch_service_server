const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(400).json({ status: 'failed', message: 'no token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, veridfiedJwt) => {
        if (err){
            res.status(200).json({ status: 'invalid', message: err.message })
            
        }
        else {
            res.status(200).json({ status: 'valid' })
        }
    });
})

module.exports = router;
