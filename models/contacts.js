const fs = require("fs/promises");
const path = require("path");

const filePath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  const contactsFile = await fs.readFile(filePath);
  return JSON.parse(contactsFile);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.filter((contact) => contact.id === contactId);
  return contact.length === 0 ? null : contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) return null;

  const deletedContact = contacts.splice(index, 1);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return deletedContact;
};

const addContact = async (contact) => {
  const { name, email, phone } = contact;
  const contacts = await listContacts();
  const id = Date.now().toString();
  const newContact = { id, name, email, phone };
  contacts.push(newContact);

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (contactId, updatedContact) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) return null;

  contacts[index] = { ...contacts[index], ...updatedContact };

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
