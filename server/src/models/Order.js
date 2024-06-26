const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },

    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orderItems",
        }
    ],

    orderDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    deliveryDate: {
        type: Date,
    },

    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addresses",
    },

    paymentDetails: {
        paymentMethod: {
            type: String,
        },

        transactionId: {
            type: String,
        },

        paymentId: {
            type: String,
        },

        paymentStatus: {
            type: String,
        },
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    totalDiscountedPrice: {
        type: Number,
        required: true,
    },

    discount: {
        type: Number,
        required: true,
    },

    orderStatus: {
        type: String,
        required: true,
        default: "PENDING",
    },

    totalItem: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const OrderSchema = mongoose.model("Order", Order);
module.exports = OrderSchema;