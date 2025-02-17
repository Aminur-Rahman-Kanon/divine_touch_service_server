const express = require('express');
const router = express.Router();
const { adminModel } = require('../schema/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { user, pass } = req.body;

    if (!user && !pass) return res.status(400).json({ status: 'failed', message: 'data not provided' });
    const isUserExist = await adminModel.findOne({ user })
    console.log(isUserExist);
    

    if (!isUserExist) return res.status(200).json({ status: 'failed', message: 'user not found' });
    const checkPass = await bcrypt.compare(pass, isUserExist.pass);

    if (checkPass) {
        const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE_IN
        } )

        return res.status(200).json({ status: 'success', token })
    }
})

module.exports = router;