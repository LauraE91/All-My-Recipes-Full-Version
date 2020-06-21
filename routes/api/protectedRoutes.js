const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const checkToken = require("../../middleware/checkToken");

router.get("/accountSettings", checkToken, (req, res, next) => {
  res.send("Account Settings Page");
});

router.get("/referAFriend", checkToken, (req, res, next) => {
  res.send("Refer A Friend Page");
});

router.get("/help", checkToken, (req, res, next) => {
  res.send("Help Page");
});

module.exports = router;
