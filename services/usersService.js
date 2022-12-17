const User = require("./schemas/user");

const createUser = async ({ email, password }) => {
  console.log(`Create User with email: ${email} and password: ${password}`);
  return "created";
};

const checkUser = async (email) => {
  console.log(`Check User with email - ${email}`);
  return "checked";
};

module.exports = {
  createUser,
  checkUser,
};
