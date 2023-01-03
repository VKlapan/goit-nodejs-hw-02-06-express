const bcrypt = require("bcrypt");
const saltRounds = 10;

const jose = require("jose");
const { v4: uuidv4 } = require("uuid");

const helpers = require("../helpers");
const User = require("./schemas/user");
var gravatar = require("gravatar");

const gravatarOptions = { s: "200", r: "pg", d: "retro" };

const createUser = async (user) => {
  const avatarUrl = gravatar.url(user.email, gravatarOptions);

  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);
  const verificationToken = uuidv4();

  const newUser = {
    ...user,
    avatarUrl,
    verificationToken,
    password: encryptedPassword,
  };

  const createdUser = await User.create(newUser);
  const { _id, email, subscription, avatarUrl: avatar } = createdUser;

  return { email, subscription, avatar, verificationToken };
};

const loginUser = async ({
  email: checkedEmail,
  password: checkedPassword,
}) => {
  const user = await User.findOne({ email: checkedEmail });

  if (!user) {
    throw helpers.httpError(404, "Not found");
  }

  if (!user.verify) {
    throw helpers.httpError(401, "You have to verify your email");
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

const avatarUpdateUser = async (user) => {
  const response = await User.findOneAndUpdate(
    { email: user.email },
    { avatarUrl: user.avatarUrl },
    { new: true }
  );

  return response;
};

const checkVerificationTokenUser = async (verificationToken) => {
  const response = await User.findOneAndUpdate(
    { verificationToken },
    { $set: { verificationToken: null, verify: true } },
    { new: true }
  );
  console.log(response);

  return response;
};

const findUser = async (findOption) => {
  const user = await User.findOne(findOption);
  return user;
};

const checkUser = async (checkedToken, checkedUser) => {
  const user = await User.findById(checkedUser._id);

  return user && user.token === checkedToken;
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  checkUser,
  avatarUpdateUser,
  checkVerificationTokenUser,
  findUser,
};
