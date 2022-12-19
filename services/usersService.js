const bcrypt = require("bcrypt");
const saltRounds = 10;

const jose = require("jose");

const User = require("./schemas/user");

const createUser = async (user) => {
  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, password: encryptedPassword};

  const createdUser = await User.create(newUser);

console.log("created User: ", createdUser);

  const secret = new TextEncoder().encode(process.env.SECRET);
  const alg = "HS256";
  const { _id, email, subscription } = createdUser;

  const jwt = await new jose.SignJWT({ _id, email })
    .setProtectedHeader({ alg })
    .sign(secret);

  await User.findByIdAndUpdate(_id, { token: jwt });

  console.log("JWT: ", jwt);

  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

  console.log("proteted Header: ", protectedHeader);
  console.log("payload: ", payload);

  return {email, subscription};

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
