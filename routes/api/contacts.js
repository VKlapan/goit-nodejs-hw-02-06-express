const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const response = await listContacts();
  res.json(response);
});

router.get("/:contactId", async (req, res, next) => {
  const response = await getContactById(req.params.contactId);

  response === null
    ? res.json({ status: 404, message: "Not found" })
    : res.json({ status: 200, response });
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!!!name || !!!email || !!!phone)
    return res.json({ status: 400, message: "missing required name field" });
  const response = await addContact({ name, email, phone });

  res.json({ status: 201, response });
});

router.delete("/:contactId", async (req, res, next) => {
  const response = await removeContact(req.params.contactId);

  response === null
    ? res.json({ status: 404, message: "Not found" })
    : res.json({ status: 200, response });
});

router.put("/:contactId", async (req, res, next) => {
  const id = req.params.contactId;
  const updatedContact = req.body;

  if (Object.keys(updatedContact).length === 0)
    return res.json({ message: "missing fields" });

  const response = await updateContact(id, updatedContact);

  response === null
    ? res.json({ status: 404, message: "Not found" })
    : res.json({ status: 200, response });
});

module.exports = router;
