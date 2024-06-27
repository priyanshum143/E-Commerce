const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGODB_URI;
const connectDB = () => {
    return mongoose.connect(URI);
};

module.exports = {connectDB}
