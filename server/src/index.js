const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send("Welcome");
});

const authRoutes = require("./routes/auth-routes");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user-routes");
app.use("/users", userRoutes);


module.exports = app;