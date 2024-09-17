const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send("Welcome");
});

const authRoutes = require("./routes/auth-routes");
app.use("/auth", authRoutes); // Done

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes); // Done

const userProductRoutes = require("./routes/user-product-routes");
app.use("/api/products", userProductRoutes); // Done

const adminProductRoutes = require("./routes/admin-product-routes");
app.use("/api/admin/products", adminProductRoutes); // Done

const cartRoutes = require("./routes/cart-routes");
app.use("/api/cart", cartRoutes); // Done

const cartItemRoutes = require("./routes/cartItems-routes");
app.use("/api/cart_items", cartItemRoutes); // Done

const adminOrderRoutes = require("./routes/admin-order-routes");
app.use("/api/admin/orders", adminOrderRoutes);

const orderRoutes = require("./routes/order-routes");
app.use("/api/orders", orderRoutes); // Done

const reviewRoutes = require("./routes/review-routes");
app.use("/api/reviews", reviewRoutes);

const ratingRoutes = require("./routes/rating-routes");
app.use("/api/ratings", ratingRoutes);

module.exports = app;