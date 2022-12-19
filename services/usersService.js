const bcrypt = require("bcrypt");
const saltRounds = 10;

const jose = require("jose");

const User = require("./schemas/user");

const createUser = async (user) => {
  const encryptedPassword = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, password: encryptedPassword};

  const createdUser = await User.create(newUser);
  const { _id, email, subscription } = createdUser;

  return {email, subscription};

};

const checkUser = async ({ email:checkedEmail, password:checkedPassword }) => {

  const user = await User.findOne({email:checkedEmail});

  const {_id, email, password, subscription} = user;
  
  if (!user) {
    throw new Error("User not found :-(");
  }

  const isAuthorized = await bcrypt.compare(checkedPassword, password);

  if (!isAuthorized) {
    throw new Error("Email or password is wrong");
  }

  const secret = new TextEncoder().encode(process.env.SECRET);
  const alg = "HS256";
  const jwt = await new jose.SignJWT({ _id, email })
    .setProtectedHeader({ alg })
    .sign(secret);

  await User.findByIdAndUpdate(_id, { token: jwt });

  // const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);
  // console.log("proteted Header: ", protectedHeader);
  // console.log("payload: ", payload);

  return {jwt, email, subscription}

};

module.exports = {
  createUser,
  checkUser,
};
