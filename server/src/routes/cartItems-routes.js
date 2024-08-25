const express = require("express");
const router = express.Router();
const cartItemController = require("../controller/cartItem-controller");
const { authenticate } = require("../middleware/authenticate");

router.put("/:id", authenticate, cartItemController.updateCartItem); // Done
router.delete("/:id", authenticate, cartItemController.removeCartItem); // Done

module.exports = router;