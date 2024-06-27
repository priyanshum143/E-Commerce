const mongoose = require('mongoose');

const cartItem = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },

    size: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
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

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
});

const CartItemSchema = mongoose.model("cartItem", cartItem);
module.exports = CartItemSchema;