const bcrypt = require("bcrypt");
const saltRounds = 10;

const jose = require("jose");

const User = require("./schemas/user");
var gravatar = require("gravatar");
const gravatarOptions = { s: "200", r: "pg", d: "retro" };

const createUser = async (user) => {
  const avatarUrl = gravatar.url(user.email, gravatarOptions);

  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, avatarUrl, password: encryptedPassword };

  const createdUser = await User.create(newUser);
  const { _id, email, subscription, avatarUrl: avatar } = createdUser;

  return { email, subscription, avatar };
};

const loginUser = async ({
  email: checkedEmail,
  password: checkedPassword,
}) => {
  const user = await User.findOne({ email: checkedEmail });

  if (!user) {
    throw new Error("User not found :-(");
  }

  const { _id, email, password, subscription } = user;

  const isAuthorized = await bcrypt.compare(checkedPassword, password);

  if (!isAuthorized) {
    throw new Error("Email or password is wrong");
  }

  const secret = new TextEncoder().encode(process.env.SECRET);
  const alg = "HS256";
  const jwt = await new jose.SignJWT({ _id, email, subscription })
    .setProtectedHeader({ alg })
    .sign(secret);

  await User.findByIdAndUpdate(_id, { token: jwt });

  return { jwt, email, subscription };
};

const logoutUser = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Not authorized");
  }

  const response = await User.findOneAndUpdate(
    { _id: user._id },
    { token: "" },
    { new: true }
  );

  return response;
};

const getUser = async (_id) => {};

const checkUser = async (checkedToken, checkedUser) => {
  const user = await User.findById(checkedUser._id);

  return user && user.token === checkedToken;
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  checkUser,
};
