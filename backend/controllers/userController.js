const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc   Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // Check if user already exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); 

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
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

    const {email, password} = req.body;

    // Check if user exists by email
    const user = await User.findOne({email});

    // Check if password matches
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})


module.exports = { 
    registerUser,
    loginUser,
    getMe,
 };