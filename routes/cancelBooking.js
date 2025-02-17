const express = require('express');
const router = express.Router();
const { orderModel } = require('../schema/schema');


router.post('/', async (req, res) => {
    const { id } = req.body;

    await orderModel.deleteOne({ _id: id }).then(resp => res.status(200).json({ status: 'success' })).catch(err => res.status(200).json({ status: 'failed' }));
})

module.exports = router;
