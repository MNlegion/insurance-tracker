// @desc   Register User
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({message: "Register User Successful"})
}

// @desc   Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: "Login User Successful"})
}

// @desc   Get User Data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({message: "Profile Data Retrieved"}) 
}


module.exports = { 
    registerUser,
    loginUser,
    getMe,
 };