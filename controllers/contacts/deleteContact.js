const serviceDB = require("../../services");
const helpers = require("../../helpers");

const deleteContact = async (req, res, next) => {
  const response = await serviceDB.removeContact(req.params.contactId);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = deleteContact;
