const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("./schemas/user");

const createUser = async (user) => {
  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, password: encryptedPassword };
  console.log(`Create User : ${JSON.stringify(newUser)}`);
  return await User.create(newUser);
};

const checkUser = async (email) => {
  console.log(`Check User with email - ${email}`);
  return "checked";
};

module.exports = {
  createUser,
  checkUser,
};
