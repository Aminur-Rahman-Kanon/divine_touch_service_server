const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const login = require('./routes/login');
const verifyToken = require('./routes/verifyToken');
const fetchBookings = require('./routes/fetchBookings');
const cancelBooking = require('./routes/cancelBooking');
const updateBooking = require('./routes/updateStatus');
const undoStatus = require('./routes/undoStatus');

app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(express.json());

app.use('/login', login);
app.use('/verify-token', verifyToken);
app.use('/fetch-bookings', fetchBookings);
app.use('/cancel-booking', cancelBooking);
app.use('/update-status', updateBooking);
app.use('/undo-status', undoStatus);

mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: 5000
}).then(con => console.log('database connected'))
.catch(err => console.log(err));

app.listen('8000', (err) => {
    if (err){
        console.log(err.message);
    }
    console.log('server  is running on port 8000');
})

