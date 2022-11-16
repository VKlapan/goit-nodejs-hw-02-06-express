const { listContacts, getContactById } = require("../../models/contacts");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const response = await listContacts();
  res.json(response);
});

router.get("/:contactId", async (req, res, next) => {
  const response = await getContactById(req.params.contactId);
  res.json(response);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message post root" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
