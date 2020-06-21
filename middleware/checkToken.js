const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Middleware that checks if a valid token exists and if it does, then user is allowed to continue to that route

// Add this middleware to all routes that need to be protected
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  try {
    // verify token
    const decoded = jwt.verify(token, keys.secretOrKey);
    req.decodedUserData = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "No token",
    });
  }
};
