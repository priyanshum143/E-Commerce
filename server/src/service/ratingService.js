const Ratings = require("../models/Ratings");
const productService = require("./productService");

async function createRating(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const rating = new Ratings({
        user: user._id,
        product: product._id,
        rating: reqData.rating,
        createdAt: new Date(),
    });

    return await rating.save();
};

async function getProductRatings(productId) {
    return await Ratings.find({product: productId});
};

module.exports = { createRating, getProductRatings };