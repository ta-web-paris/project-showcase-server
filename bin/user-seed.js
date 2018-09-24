require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./../models/user-model");
const bCrypt = require("bcrypt");
const prompts = require("prompts");

mongoose.Promise = Promise;
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useMongoClient: true }
  )
  .then(() => {
    // console.log('Connected to Mongo!')
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let questions = [
  {
    type: "text",
    name: "fullName",
    message: "GIMME FULLNAME"
  },
  {
    type: "text",
    name: "email",
    message: "GIMME MEIL"
  },
  {
    type: "password",
    name: "password",
    message: "GIMME PASSWORD"
  }
];

prompts(questions)
  .then(stuff => {
    const { email, password, fullName } = stuff;
    let encryptedPassword = bCrypt.hashSync(password, 10);
    return User.create({ email, encryptedPassword, fullName });
  })
  .then(user => {
    console.log(`Just created ${user}!`);
  })
  .catch(err => {
    throw err;
  });
