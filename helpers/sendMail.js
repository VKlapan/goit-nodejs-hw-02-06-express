const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: "alberta.walter@ethereal.email",
  to: "vladimir.klapan@gmail.com",
  subject: "New mail from NODE.JS server",
  text: "It is a test. I try to check how nodemailer works...",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
