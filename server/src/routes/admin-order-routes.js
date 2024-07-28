const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin-order-controller");
const { authenticate } = require("../middleware/authenticate");

router.get("/", authenticate, adminController.getAllOrders);
router.put("/:orderId/confirm", authenticate, adminController.confirmOrder);
router.put("/:orderId/ship", authenticate, adminController.shipOrder);
router.put("/:orderId/deliver", authenticate, adminController.deliverOrder);
router.put("/:orderId/cancel", authenticate, adminController.cancelOrder);
router.put("/:orderId/delete", authenticate, adminController.deleteOrder);

module.exports = router;