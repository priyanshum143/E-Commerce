const bcrypt = require('bcrypt');
const Users = require("../models/Users");
const jwtProvider = require("../config/jwtProvider");

const createUser = async(userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const UserExists = await Users.findOne({email});
        if(UserExists) {
            throw new Error("Email already exists");
        }

        password = await bcrypt.hash(password, 10);
        const user = await Users.create({firstName, lastName, email, password});

        console.log("User created ", user);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByID = async(userID) => {
    try {
        const user = await Users.findById({userID}).populate("address");
        if(!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByEmail = async(email) => {
    try {
        const user = await Users.findOne({email});
        if(!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByToken = async(token) => {
    try {
        const userID = jwtProvider.getUserIDFromToken(token);

        const user = await getUserByID(userID);
        if(!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUsers = async() => {
    try {
        const users = await Users.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {createUser, getUserByID, getUserByEmail, getUserByToken, getAllUsers};