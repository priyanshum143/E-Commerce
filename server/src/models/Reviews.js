const mongoose = require('mongoose');

const Reviews = new mongoose.Schema({
    review: {
        type: String,
        required: true,
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const ReviewsSchema = mongoose.model("Reviews", Reviews);
module.exports = ReviewsSchema;