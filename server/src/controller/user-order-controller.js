const orderService = require("../service/orderService");

const createOrder = async(req, res) => {
    const user = req.user;

    try {
        const createdOrder = await orderService.createOrder(user, req.body);
        res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const findOrderById = async(req, res) => {
    const orderId = req.params.id;

    try {
        const order = await orderService.findOrderById(orderId);
        res.status(201).send(order);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const orderHistory = async(req, res) => {
    const user = req.user;

    try {
        const orders = await orderService.userOrderHistory(user._id);
        res.status(201).send(orders);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { createOrder, findOrderById, orderHistory };