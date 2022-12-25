import jwt from "jsonwebtoken";
import User from "../models/users.js";

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Token is required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = await User.findOne({ _id }).select("_id");
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Request is not authorized!" });
  }
};
export default auth;
