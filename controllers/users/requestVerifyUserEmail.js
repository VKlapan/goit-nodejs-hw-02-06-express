const serviceDB = require("../../services/usersService");
const helpers = require("../../helpers");

const requestVerifyUserEmail = async (req, res) => {
  const findOption = { email: req.body.email };

  const user = await serviceDB.findUser(findOption);

  if (!user) throw helpers.httpError(404, "Not found");
  if (user.verify)
    throw helpers.httpError(400, "Verification has already been passed");

  const emailOptions = {
    from: "v.lahodnyi@proformula.ua",
    to: `${user.email}`,
    subject: "Please, verify your email",
    text: `Thank you for registration. For using our service you have to verify your email - use LINK http://localhost:3000/api/users/verify/${user.verificationToken} for it`,
    html: `Thank you for registration. For using our service you have to verify your email - use <a href="http://localhost:3000/api/users/verify/${user.verificationToken}"> LINK</a> for it`,
  };

  helpers.sendMailToUser(emailOptions);

  res.status(200).json({ code: 200, message: "Verification email sent" });
};

module.exports = requestVerifyUserEmail;
