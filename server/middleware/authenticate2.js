const jwt = require("jsonwebtoken");
const {Admin} = require('../models/admin');
const keysecret = process.env.JWTPRIVATEKEY1;

const authenticate2 = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ status: 401, message: "Authorization header missing" });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, keysecret);
    const rootUser = await Admin.findOne({ _id: decoded._id });
    if (!rootUser) {
      return res.status(401).json({ status: 401, message: "User not found" });
    }

    req.token = token;
    req.rootUser = rootUser;
  
    req.userId = rootUser._id;
    next();
  } catch (error) {
    console.error("Error in authenticate middleware", error);
    return res.status(401).json({ status: 401, message: "Unauthorized - Invalid token" });
  }
};

module.exports = authenticate2;
