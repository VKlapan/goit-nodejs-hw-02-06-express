const createUser = require("./createUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const currentUser = require("./currentUser");
const avatarUpdateUser = require("./avatarUpdateUser");
const verifyUserEmail = require("./verifyUserEmail");
const requestVerifyUserEmail = require("./requestVerifyUserEmail");

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  currentUser,
  avatarUpdateUser,
  verifyUserEmail,
  requestVerifyUserEmail,
};
