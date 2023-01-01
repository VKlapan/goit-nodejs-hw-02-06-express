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

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: "v.lahodnyi@proformula.ua",
  to: "v.klapan@proformula.ua",
  subject: "New mail from NODE.JS server",
  text: "It is a test. I try to check how nodemailer works...",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
