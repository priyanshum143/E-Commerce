const mongoose = require('mongoose');

const Addresses = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    streetAddress: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    zipcode: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },

    mobile: {
        type: String,
        required: true,
    },
});

const AddressSchema = mongoose.model("Addresses", Addresses);
module.exports = AddressSchema;