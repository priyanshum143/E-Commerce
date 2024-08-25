const express = require("express");
const router = express.Router();
const orderController = require("../controller/user-order-controller");
const { authenticate } = require("../middleware/authenticate");

router.post("/", authenticate, orderController.createOrder); // Done
router.get("/user", authenticate, orderController.orderHistory); // Done
router.get("/:id", authenticate, orderController.findOrderById); // Done

module.exports = router;