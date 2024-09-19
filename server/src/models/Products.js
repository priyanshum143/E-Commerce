const mongoose = require('mongoose');

const Products = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    discountedPrice: {
        type: Number,
        required: true,
    },

    discountPresent: {
        type: Number,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
    },

    brand: {
        type: String,
    },

    color: {
        type: String,
    },

    sizes: [
        {
            name: {
                type: String,
            },

            quantity: {
                type: Number,
            },
        },
    ],

    imageUrl: {
        type: String,
    },

    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ratings",
        },
    ],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reviews",
        },
    ],

    numRatings: {
        type: Number,
        default: 0,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const ProductsSchema = mongoose.model("Products", Products);
module.exports = ProductsSchema;