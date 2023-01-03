const serviceDB = require("../../services/usersService");
const helpers = require("../../helpers");

const createUser = async (req, res) => {
  const response = await serviceDB.createUser(req.body);

  const emailOptions = {
    from: "v.lahodnyi@proformula.ua",
    to: `${response.email}`,
    subject: "Please, verify your email",
    text: `Thank you for registration. For using our service you have to verify your email - use LINK http://localhost:3000/api/users/verify/${response.verificationToken} for it`,
    html: `Thank you for registration. For using our service you have to verify your email - use <a href="http://localhost:3000/api/users/verify/${response.verificationToken}"> LINK</a> for it`,
  };

  helpers.sendMailToUser(emailOptions);

  res.status(201).json({ user: response });
};

module.exports = createUser;
