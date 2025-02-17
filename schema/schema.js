const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    user: { type: String, required: true },
    pass: { type: String, required: true}
})

const bookings = new mongoose.Schema({
    status: { type: String, required: true },
    date: { type: String, required: true, index: true },
    beginTime: { type: String, required: true },
    endTime: { type: String, required: true },
    service: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    details: { type: Object, require: true }
});

const adminModel = mongoose.model('admin', admin);
const orderModel = mongoose.model('bookings', bookings);

module.exports = {
    adminModel,
    orderModel
}