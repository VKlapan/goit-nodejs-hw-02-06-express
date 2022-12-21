const serviceDB = require("../../services/contactsService");

const getListContacts = async (req, res) => {
  const {_id} = req.user;
  const response = await serviceDB.getAllcontacts(_id);
  res.status(200).json({ response });
};

module.exports = getListContacts;
