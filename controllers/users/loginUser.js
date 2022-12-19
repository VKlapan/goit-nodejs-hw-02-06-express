const serviceDB = require("../../services/usersService");

const loginUser = async (req, res) => {
  const response = await serviceDB.checkUser(req.body);

  res.status(200).json({ response });
};

module.exports = loginUser;
