const serviceDB = require("../../services/usersService");
const helpers = require("../../helpers");

const verifyUserEmail = async (req, res) => {
  const verificationToken = req.params.verificationToken;

  const response = await serviceDB.checkVerificationTokenUser(
    verificationToken
  );

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ code: 200, message: "Verification successful" });
};

module.exports = verifyUserEmail;
