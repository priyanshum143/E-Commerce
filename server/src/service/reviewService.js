const Reviews = require("../models/Reviews");
const productService = require("./productService");

async function createReview(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const review = new Reviews({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date(),
    });

    await product.save();
    return await review.save();
};

async function getAllReviews(productId) {
    const product = await productService.findProductById(productId);
    return await Reviews.find({product: productId}).populate("user");
};

module.exports = { createReview, getAllReviews };