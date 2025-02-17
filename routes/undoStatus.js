const express = require('express');
const router = express.Router();
const { orderModel } = require('../schema/schema');

router.post('/', async (req, res) => {
    const { id } = req.body;

    await orderModel.updateOne({ _id: id }, {
        $set: {
            status: 'active'
        }
    }).then(result => res.status(200).json({ status: 'success' }))
    .catch(err => res.status(400).json({ status: 'failed' }));
})

module.exports = router;
