const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "email-smtp.eu-west-1.amazonaws.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const mailTransporter = nodemailer.createTransport(config);

const sendMailToUser = (emailOptions) => {
  mailTransporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));
};

module.exports = sendMailToUser;
