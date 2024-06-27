const mongoose = require('mongoose');

const orderItems = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },

    size: {
        type: String,
    },

    quantity: {
        type: Number,
        default: 1,
    },

    price: {
        type: Number,
        required: true,
    },

    discountedPrice: {
        type: Number,
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
});

const OrderItemsSchema = mongoose.model("orderItems", orderItems);
module.exports = OrderItemsSchema;