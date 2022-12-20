const serviceDB = require("../../services/contactsService");

const addNewContact = async (req, res) => {
  const contact = req.body;
  const creator = req.user;
  const response = await serviceDB.createContact(contact, creator);

  res.status(201).json({ response });
};

module.exports = addNewContact;
