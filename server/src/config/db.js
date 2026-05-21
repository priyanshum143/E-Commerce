const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    if (!URI) {
        throw new Error("MONGODB_URI is missing in server/.env");
    }

    await mongoose.connect(URI);
    console.log("MongoDB connected");
};

module.exports = { connectDB };
