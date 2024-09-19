const Cart = require("../models/Cart");
const CartItem = require("../models/cartItem");
const Product = require("../models/Products");

async function createCart(userId) {
    try {
        const cart = new Cart({user: userId});
        const createdCart = await cart.save();
        console.log(createdCart)
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
};

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({user: userId});
        let cartItems = await CartItem.find({cart: cart._id}).populate("product");
        cart.cartItems = cartItems;

        let totalPrice = 0, totalDiscountedPrice = 0, totalItems = 0;
        for(let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItems += cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItems;
        cart.discount = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice = totalDiscountedPrice;

        return cart;
    } catch (error) {
        throw new Error(error.message);
    }
};

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({user: userId});
        const product = await Product.findById(req.productId);

        const isPresent = await CartItem.findOne({cart: cart._id, product: product._id, user: userId});
        if(!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                user: userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice
            });
            
            const newCartItem = await cartItem.save();
            cart.cartItems.push(newCartItem);
            await cart.save();

            return "Item added to Cart";
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {createCart, findUserCart, addCartItem};