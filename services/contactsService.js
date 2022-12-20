const Contact = require("./schemas/contact");

const getAllcontacts = async () => {
  return Contact.find();
};

const getContactById = async (id) => {
  return Contact.findOne({ _id: id });
};

const createContact = async (contact, creator) => {
  const owner = creator._id;
  return Contact.create({ ...contact, owner });
};

const updateContact = async (id, fields) => {
  return Contact.findByIdAndUpdate(id, fields, { new: true });
};

const removeContact = async (id) => {
  return Contact.findByIdAndRemove(id);
};

const updateFavoriteContact = async (id, favorite) => {
  await Contact.findByIdAndUpdate(id, { favorite });
  return getContactById(id);
};

module.exports = {
  getAllcontacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  updateFavoriteContact,
};
