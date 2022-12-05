const contacts = require("../../models/contacts");
const validateInput = require("../../helpers/validateInput");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const updatedContact = req.body;

  if (Object.keys(updatedContact).length === 0)
    return res.json({ message: "missing fields" });

  const validationResult = validateInput(updatedContact);

  if (validationResult.error === undefined) {
    const response = await updateContact(id, updatedContact);

    return response === null
      ? res.status(404).json({ message: "Not found" })
      : res.status(200).json({ response });
  }

  res.status(400).json({ error: validationResult.error });
};

module.exports = updateContact;
