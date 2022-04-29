/* eslint-disable import/no-anonymous-default-export */
require("dotenv").config();

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "johannavocalcoach@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: "johannavocalcoach@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}<br>${req.body.email}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).send("Successfully sent email");
  console.log(req.body);
}
