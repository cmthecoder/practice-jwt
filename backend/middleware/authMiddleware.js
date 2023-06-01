const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Checking for authorization header and making sure it is a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // Assigning the token to the variable
      token = req.headers.authorization.split(" ")[1];

      // Decoding and verify token

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token

      req.user = await User.findById(decoded.id).select('-password')

      // The user id is inside the token. Any route that uses the token has access to req.user

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
});

module.exports = { protect };
