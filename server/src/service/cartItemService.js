const userService = require("../service/UserService");
const CartItem = require("../models/cartItem");

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        if(!item) {
            throw new Error("Cart Item not found: ", cartItemId);
        }

        const user = await userService.getUserByID(item.user);
        if(!user) {
            throw new Error("User not found: ", userId);
        }

        if(user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("You cannot update this cart");
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.getUserByID(userId);
    if(user._id.toString() === cartItem.user.toString()) {
        await CartItem.findByIdAndDelete(cartItemId);
    } else {
        throw new Error("You can not remove other user's items");
    }
};

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if(cartItem) {
        return cartItem;
    } else {
        throw new Error("cart item not found with this id: ", cartItemId);
    }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };