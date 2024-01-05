const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc   Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Register User Successful"})
})

// @desc   Authenticate User
// @route POST /api/users/login
// @access Public 
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login User Successful"})
})

// @desc   Get User Data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User Profile Retrieved"}) 
})


module.exports = { 
    registerUser,
    loginUser,
    getMe,
 };