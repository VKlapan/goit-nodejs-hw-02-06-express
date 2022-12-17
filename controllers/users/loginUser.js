const serviceDB = require("../../services/usersService");

const loginUser = async (req, res) => {
  const response = await serviceDB.checkUser(req.body.email);

  res.status(201).json({ response });
};

module.exports = loginUser;
