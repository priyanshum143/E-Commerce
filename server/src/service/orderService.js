const cartService = require("./cartService");
const Address = require("../models/Addresses");
const OrderItems = require("../models/orderItems");
const Order = require("../models/Order");

async function createOrder(user, shippingAddress) {
    let address;
    if(shippingAddress._id) {
        let existingAddress = await Address.findById(shippingAddress._id);
        address = existingAddress;
    } else {
        address = new Address(shippingAddress);
        address.user = user;
        await address.save();

        user.address.push(address);
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for(const item of cart.cartItems) {
        let orderItem = new OrderItems({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.user,
            discountedPrice: item.discountedPrice,
        });

        orderItem = await orderItem.save();
        orderItems.push(orderItem);
    }

    let createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount,
        totalItem: cart.totalItem,
        shippingAddress: address,
    });

    createdOrder = await createdOrder.save();
    return createdOrder;
};

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED";
    order.paymentDetails.paymentStatus = "COMPLETED";
    return await order.save();
};

async function confirmOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
};

async function shipOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
};


async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
};

async function cancelOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
};

async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({path: "orderItems", populate: {path: "product"}})
        .populate("shippingAddress");

    return order;
};

async function userOrderHistory(userId) {
    try {
        const orders = await Order.find({user: userId, orderStatus: "PENDING"})
            .populate({path: "orderItems", populate: {path: "product"}}).lean();

        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};

async function getAllOrders() {
    return await Order.find()
    .populate({path: "orderItems", populate: {path: "product"}}).lean();
};

async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
};

module.exports = {
    createOrder,
    placeOrder,
    confirmOrder,
    shipOrder,
    deliverOrder,
    shipOrder,
    cancelOrder,
    findOrderById,
    userOrderHistory,
    getAllOrders,
    deleteOrder,
};