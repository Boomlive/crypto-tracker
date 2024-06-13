const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    //code
    const token_access = req.headers["authtoken"];

    if (!token_access) {
      return res.status(401).send("No token");
    }

    //check token
    const decoded = jwt.verify(token_access, process.env.TOKEN_SEC);

    if (!decoded) {
      return res.status(401).send("Token invalid");
    }

    req.user = decoded.user;

    next();
  } catch (err) {
    //error
    res.send("token invalid");
  }
};
