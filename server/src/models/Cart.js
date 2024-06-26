const mongoose = require('mongoose');

const Cart = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    cartItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cartItem",
            required: true,
        }
    ],

    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },

    totalItem: {
        type: Number,
        require: true,
        default: 0,
    },

    totalDiscountedPrice: {
        type: Number,
        required: true,
        default: 0,
    },

    discount: {
        type: Number,
        required: true,
        default: 0,
    },
});

const CartSchema = mongoose.model("Cart", Cart);
module.exports = CartSchema;