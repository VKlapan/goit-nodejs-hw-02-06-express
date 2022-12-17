const serviceDB = require("../../services/contactsService");

const getListContacts = async (req, res) => {
  const response = await serviceDB.getAllcontacts();
  res.status(200).json({ response });
};

module.exports = getListContacts;
