const { execSync } = require("child_process");

const PORT = process.env.PORT || 5454;

try {
    const output = execSync(`netstat -ano | findstr :${PORT} | findstr LISTENING`, {
        encoding: "utf8",
    });

    const pid = output.trim().split(/\s+/).pop();
    if (pid && pid !== "0") {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "inherit" });
        console.log(`Stopped process ${pid} on port ${PORT}`);
    }
} catch {
    console.log(`No server running on port ${PORT}`);
}
