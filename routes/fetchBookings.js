const express = require('express');
const router = express.Router();
const { orderModel } = require('../schema/schema');

router.get('/', async (req, res) => {
    await orderModel.find({}).then(result => res.send(result)).catch(err => console.log(err));
})

module.exports = router;
