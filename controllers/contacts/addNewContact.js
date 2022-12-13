const serviceDB = require("../../services");

const addNewContact = async (req, res, next) => {
  const response = await serviceDB.createContact(req.body);

  res.status(201).json({ response });
};

module.exports = addNewContact;
