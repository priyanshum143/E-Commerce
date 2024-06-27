const mongoose = require('mongoose');

const URI = <your_mongoDB_URI>;
const connectDB = () => {
    return mongoose.connect(URI);
};

module.exports = {connectDB}
