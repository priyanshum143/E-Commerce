const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (userID) => {
    const token = jwt.sign({userId: userID}, process.env.SECRET_KEY, {expiresIn: "24h"});
    return token;
};

const getUserIDFromToken = (token) => {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    return decodedToken.userId;
};

module.exports = {generateToken, getUserIDFromToken};