const bcrypt = require("bcrypt");
const saltRounds = 10;

const jose = require("jose");

const User = require("./schemas/user");

const createUser = async (user) => {
  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );
  const alg = "HS256";
  const { email } = user;

  const jwt = await new jose.SignJWT({ email })
    .setProtectedHeader({ alg })
    .sign(secret);

  console.log(jwt);

  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

  console.log(protectedHeader);
  console.log(payload);

  const newUser = { ...user, password: encryptedPassword, token: jwt };

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
