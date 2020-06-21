//*** IN PROCESS ***//


const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  const output = {
    msg: `You have a new contact request from ${req.body.name}`,
    userEmail: req.body.userEmail,
    subject: req.body.subject,
    message: req.body.message,
  };
  console.log(res);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ida.pollich73@ethereal.email",
      pass: "JPtPvputy6n8JBzYe2",
    },
  });

  let mailOptions = {
    from: '"Nodemailer Contact" <mypersonalaccount@gmail.com>', // sender address
    to: "differentpersonalaccount@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: output, // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log(info);
    }
    res.send("email sent");
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

module.exports = router;
