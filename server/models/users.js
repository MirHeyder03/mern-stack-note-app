import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.register = async function (email, password) {
  const checkUser = await this.findOne({ email });
  if (!email || !password) {
    throw Error("Enter a valid email and password!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email must be a valid!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password must be strong!");
  }
  if (checkUser) {
    throw Error("User already registered");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await this.create({ email, password: hashPassword });
  return user;
};
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!email || !password) {
    throw Error("Enter a valid email and password!");
  }
  if (!user) {
    throw Error("User is not registered");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email must be a valid!");
  }
  const checkpassword = await bcrypt.compare(password, user.password);
  if (!checkpassword) {
    throw Error("Password is not a valid password");
  }
  return user;
};

export default mongoose.model("User", userSchema);
