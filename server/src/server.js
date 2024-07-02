const app = require(".");
const { connectDB } = require("./config/db");
require('dotenv').config();

const PORT = process.env.PORT || 5454;
app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});