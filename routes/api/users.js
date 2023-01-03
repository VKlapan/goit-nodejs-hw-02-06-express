const Joi = require("joi");

const controllers = require("../../controllers/users");
const controllerlWrapper = require("../../helpers/controllerWrapper");
const middlewares = require("../../middlewares");
const {
  schemaUser,
  schemaLoginUser,
  schemaRequestVerifyUserEmail,
} = require("../../schemas/contactsInputFields");

const express = require("express");
const router = express.Router();

router.post(
  "/singup",
  middlewares.validateInput(schemaUser),
  controllerlWrapper(controllers.createUser)
);

router.post(
  "/login",
  middlewares.validateInput(schemaLoginUser),
  controllerlWrapper(controllers.loginUser)
);

router.get(
  "/logout",
  middlewares.authMiddleware,
  controllerlWrapper(controllers.logoutUser)
);

router.get(
  "/current",
  middlewares.authMiddleware,
  controllerlWrapper(controllers.currentUser)
);

router.get(
  "/verify/:verificationToken",
  controllerlWrapper(controllers.verifyUserEmail)
);

router.post(
  "/verify/",
  middlewares.validateInput(schemaRequestVerifyUserEmail),
  controllerlWrapper(controllers.requestVerifyUserEmail)
);

router.patch(
  "/avatars",
  middlewares.authMiddleware,
  middlewares.upload.single("avatar"),
  controllerlWrapper(controllers.avatarUpdateUser)
);
module.exports = router;
