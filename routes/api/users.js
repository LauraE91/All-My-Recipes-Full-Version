const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const keys = require("../../config/keys");
const mongoose = require('mongoose');
const checkToken = require("../../middleware/checkToken");



const validateRegisterInput = require("../../validation/register.js");
const validateLoginInput = require("../../validation/login.js");

const User = require("../../models/userModel.js");

// Register endpoint
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).send(errors);
  }

  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).send({ message: "Email already exists." });
    } else {
      module.exports = user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        userId: new mongoose.Types.ObjectId()
      });

      // Hash password before saving in db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user
            .save()
            .then((user) => res.json(user.username + " registered!" + user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// Login endpoint
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;


  // Find user by Email
  User.findOne({ email }).then((user) => {
    //Check if user exists
    if (!user) {
      return res.status(404).send({ emailisnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User matched, create JWT Payload
        const payload = {
          username: user.username,
          email: user.email,
          userId: user.userId
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 15768017 }, // 6 months in seconds
          (err, token) => {
            res.json({
              payload: payload,
              success: true,
              token: "Bearer" + " " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password is incorrect" });
      }
    });
  });
});

module.exports = router;
