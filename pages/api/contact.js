/* eslint-disable import/no-anonymous-default-export */
require("dotenv").config();

const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { name, email, message } = req.body;
  const user = process.env.user;
  const password = process.env.password;
  console.log(user, password);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: user,
      pass: password,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: name,
      address: email,
    },
    replyTo: email,
    to: user,
    subject: `Meddelande från hemsidan`,
    text: message,
    html: `<div><p style="white-space: pre-line">${message}</p></div>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
};
