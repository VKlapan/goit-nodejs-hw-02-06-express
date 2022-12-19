const serviceDB = require("../../services/usersService");

const loginUser = async (req, res) => {
  const {jwt:token, email, subscription } = await serviceDB.checkUser(req.body);

  res.status(200).json({ token, user:{email, subscription} });
};

module.exports = loginUser;
