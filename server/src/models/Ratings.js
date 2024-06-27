const mongoose = require('mongoose');

const Ratings = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },

    ratings: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const RatingsSchema = mongoose.model("Ratings", Ratings);
module.exports = RatingsSchema;