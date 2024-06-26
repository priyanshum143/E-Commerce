const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        default: "CUSTOMER",
    },

    mobile: {
        type: String,
    },

    address: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Addresses",
        }
    ],

    paymentInfo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentInformation",
        }
    ],

    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ratings",
        }
    ],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reviews",
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const UserSchema = mongoose.model("Users", Users);
module.exports = UserSchema;