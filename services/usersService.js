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

const loginUser = async ({ email:checkedEmail, password:checkedPassword }) => {

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

  return {jwt, email, subscription}

};

const checkUser = async (checkedToken, checkedUser) => {

 const user = await User.findById(checkedUser._id);

 return (user && user.token === checkedToken);

}

module.exports = {
  createUser,
  loginUser,
  checkUser,
};
