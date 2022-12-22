const serviceDB = require("../../services/usersService");

const logoutUser = async (req, res) => {
  const response = await serviceDB.logoutUser(req.user.email);

  res.status(204).json({status:204, message: "No content"});

};

module.exports = logoutUser;
