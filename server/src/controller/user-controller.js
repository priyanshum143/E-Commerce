const userService = require("../service/Users")

const getUserProfile = async(req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        if(!jwt) {
            return res.status(404).send({message: "Token not found"});
        }
        
        const user = await userService.getUserByToken(jwt);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        return users;
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = { getUserProfile, getAllUsers };