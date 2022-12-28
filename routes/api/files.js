const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/files");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");

router.post(
  "/upload",
  middlewares.upload.single("avatar"),
  controllerlWrapper(controllers.uploadFile)
);

module.exports = router;
