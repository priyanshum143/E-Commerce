const jwt = require('jsonwebtoken');
const SECRET_KEY = "ksjlfdbgksdfbvlsdhfv";

const generateToken = (userID) => {
    const token = jwt.sign({userId: userID}, SECRET_KEY, {expiresIn: "24h"});
    return token;
};

const getUserIDFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userID;
};

module.exports = {generateToken, getUserIDFromToken};