const contacts = require("../../models/contacts");
const validateInput = require("../../helpers/validateInput");

const addNewContact = async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone)
    return res.status(400).json({ message: "missing required name field" });

  const validationResult = validateInput({ name, email, phone });
  if (validationResult.error === undefined) {
    const response = await contacts.addContact({ name, email, phone });

    return res.status(201).json({ response });
  }

  res.status(400).json({ error: validationResult.error });
};

module.exports = addNewContact;
