const serviceDB = require("../../services/contactsService");

const addNewContact = async (req, res) => {
  const response = await serviceDB.createContact(req.body);

  res.status(201).json({ response });
};

module.exports = addNewContact;
