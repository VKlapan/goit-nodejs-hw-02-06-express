const contacts = require("../../models/contacts");

const getListContacts = async (req, res, next) => {
  const response = await contacts.listContacts();
  res.status(200).json({ response });
};

module.exports = getListContacts;
