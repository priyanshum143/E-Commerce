const paymentController = require("../controller/payment-controller");
const express = require("express");
const {authenticate} = require("../middleware/authenticate");
const router = express.Router();

router.post("/:id", authenticate, paymentController.createPaymentLink);
router.get("/", authenticate, paymentController.updatePaymentInfo);

module.exports = router