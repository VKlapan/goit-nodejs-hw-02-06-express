const jose = require("jose");
const serviceDB = require("../services/usersService");
const helpers = require("../helpers");

const authMiddleware = async (req, res, next) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET);
    if (!req.header("authorization")) {
      throw helpers.httpError(401, "Please, provide a token");
    }

    const [tokenType, token] = req.header("authorization").split(" ");

    if (!token || tokenType !== "Bearer") {
      throw helpers.httpError(401, "Please, provide a token");
    }

    const { payload: user } = await jose.jwtVerify(token, secret);

    const isAuthorized = await serviceDB.checkUser(token, user);

    if (!isAuthorized) {
      throw helpers.httpError(401, "Please, provide a token");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    error.status = error.status || 401;
    next(error);
  }
};

// console.log("proteted Header: ", protectedHeader);

module.exports = authMiddleware;
