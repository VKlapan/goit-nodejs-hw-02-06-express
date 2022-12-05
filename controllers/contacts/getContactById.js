const contacts = require("../../models/contacts");

const getContactById = async (req, res, next) => {
  const response = await contacts.getContactById(req.params.contactId);

  response === null
    ? res.status(404).json({ message: "Not found" })
    : res.status(200).json({ response });
};

module.exports = getContactById;
