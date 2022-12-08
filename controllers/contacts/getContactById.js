const contacts = require("../../models/contacts");
const helpers = require("../../helpers");
const serviceDB = require("../../services");

const getContactById = async (req, res, next) => {
  //  const response = await contacts.getContactById(req.params.contactId);

  console.log(typeof req.params.contactId);

  const response = await serviceDB.getContactById(req.params.contactId);

  if (response === null) throw helpers.httpError(404, "Not found");

  res.status(200).json({ response });
};

module.exports = getContactById;
