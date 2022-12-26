const Contact = require("./schemas/contact");

const getAllcontacts = async (owner) => {
  return Contact.find({ owner });
};

const getContactById = async (id, owner) => {
  return Contact.findOne({ $and: [{ _id: id }, { owner }] });
};

const createContact = async (contact, creator) => {
  const owner = creator._id;
  return Contact.create({ ...contact, owner });
};

const updateContact = async (id, fields, owner) => {
  return Contact.findOneAndUpdate({ $and: [{ _id: id }, { owner }] }, fields, {
    new: true,
  });
};

const removeContact = async (id, owner) => {
  return Contact.findOneAndRemove({ $and: [{ _id: id }, { owner }] });
};

const updateFavoriteContact = async (id, favorite, owner) => {
  await Contact.findOneAndUpdate(
    { $and: [{ _id: id }, { owner }] },
    { favorite }
  );
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
