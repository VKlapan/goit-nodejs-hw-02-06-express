const serviceDB = require("../../services");
const helpers = require("../../helpers");

const updateContact = async (req, res, next) => {
  const id = req.params.contactId;
  const updatedContact = req.body;

  const response = await serviceDB.updateContact(id, updatedContact);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = updateContact;
