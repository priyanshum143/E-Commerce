require('dotenv').config();

const app = require(".");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 5454;

const startServer = async () => {
    try {
        await connectDB();
        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

        server.on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                console.error(`\nPort ${PORT} is already in use.`);
                console.error("Run: npm run stop");
                console.error("Or:  netstat -ano | findstr :5454");
                console.error("Then: taskkill /PID <PID> /F\n");
            } else {
                console.error(err.message);
            }
            process.exit(1);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        if (error.message.includes("ENOTFOUND") || error.message.includes("querySrv")) {
            console.error("\nMongoDB DNS lookup failed. Try:");
            console.error("  1. Check your internet connection");
            console.error("  2. Run: ipconfig /flushdns");
            console.error("  3. Set DNS to 8.8.8.8 (Google) in Windows network settings");
            console.error("  4. Confirm MONGODB_URI in server/.env matches Atlas → Connect");
        }
        process.exit(1);
    }
};

startServer();
