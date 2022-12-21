const jose = require("jose");
const serviceDB = require("../services/usersService");

const authMiddleware = async (req, res, next) => {
    try {
    const secret = new TextEncoder().encode(process.env.SECRET);
    if(!req.header("authorization")) {const error = new Error("Please, provide a token");
    error.status = 401;
    throw error}
  
    const [tokenType, token] = req.header("authorization").split(" ");

    if(!token) {const error = new Error("Please, provide a token");
    error.status = 401;
    throw error}

    const { payload:user } = await jose.jwtVerify(token, secret);

    const isAuthorized = await serviceDB.checkUser(token, user);

    if (!isAuthorized) {const error = new Error("Not authorized");
    error.status = 401;
    throw error}

    req.token = token;
    req.user = user;
    next();
    } catch (error) {
        error.status = error.status || 401
        next(error)
    }

}

  // console.log("proteted Header: ", protectedHeader);
  

  module.exports = authMiddleware;
