const contacts = require("../../models/contacts");
const validateInput = require("../../helpers/validateInput");
const helpers = require("../../helpers");

const addNewContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  const response = await contacts.addContact({ name, email, phone });

  res.status(201).json({ response });
};

module.exports = addNewContact;
