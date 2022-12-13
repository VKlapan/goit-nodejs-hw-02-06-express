const serviceDB = require("../../services");

const getListContacts = async (req, res, next) => {
  const response = await serviceDB.getAllcontacts();
  res.status(200).json({ response });
};

module.exports = getListContacts;
