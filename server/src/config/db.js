const mongoose = require('mongoose');

const URI = "mongodb+srv://mehtapriyanshu408:v8SXzLpsON8hHq6b@cluster0.lopkwvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
    return mongoose.connect(URI);
};

module.exports = {connectDB}