const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String, unique: true, required: true },
  encryptedPassword: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
