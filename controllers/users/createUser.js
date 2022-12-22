const serviceDB = require("../../services/usersService");

const createUser = async (req, res) => {
  const response = await serviceDB.createUser(req.body);

  res.status(201).json({ user: response });
};

module.exports = createUser;
