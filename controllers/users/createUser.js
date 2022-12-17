const serviceDB = require("../../services/usersService");

const createUser = async (req, res) => {
  const response = await serviceDB.createUser(req.body);

  res.status(201).json({ response });
};

module.exports = createUser;
