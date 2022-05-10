/* eslint-disable import/no-anonymous-default-export */
require("dotenv").config();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const nodemailer = require("nodemailer");

export default async (req, res) => {
  const OAuth2Client = new OAuth2(
    "885699788232-5hnkh7kts2d511ed3qfbsf68b9v6il8u.apps.googleusercontent.com",
    "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"
  );

  OAuth2Client.setCredentials({
    refresh_token:
      "1//04GcrZGybmxSLCgYIARAAGAQSNwF-L9IrxBJ-uTq9poVxIPhbSrl6jo4RWQiu3jEY1r56zgSuHBEezEylKPgTSOFwocC3E4enJgg",
  });
  const myAccessToken = OAuth2Client.getAccessToken();
  const { name, email, message } = req.body;
  const user = process.env.user;
  const password = process.env.password;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: user, //your gmail account you used to set the project up in google cloud console"
      clientId:
        "885699788232-5hnkh7kts2d511ed3qfbsf68b9v6il8u.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04GcrZGybmxSLCgYIARAAGAQSNwF-L9IrxBJ-uTq9poVxIPhbSrl6jo4RWQiu3jEY1r56zgSuHBEezEylKPgTSOFwocC3E4enJgg",
      accessToken: myAccessToken, //access token variable we defined earlier
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
