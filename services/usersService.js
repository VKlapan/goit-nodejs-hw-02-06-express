const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("./schemas/user");

const createUser = async (user) => {
  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, password: encryptedPassword };
  console.log(`Create User : ${JSON.stringify(newUser)}`);
  return await User.create(newUser);
};

const checkUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found :-(");
  }

  const isAuthorized = await bcrypt.compare(password, user.password);

  if (!isAuthorized) {
    throw new Error("Email or password is wrong");
  }

  return "checked";
};

module.exports = {
  createUser,
  checkUser,
};
