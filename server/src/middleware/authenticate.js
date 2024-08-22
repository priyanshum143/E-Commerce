const jwt = require("../config/jwtProvider");
const userService = require("../service/UserService");

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(404).send("token not found");
        }

        const userId = jwt.getUserIDFromToken(token);
        const user = await userService.getUserByID(userId);
        req.user = user;
        
        next();
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { authenticate };