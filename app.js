require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const passportSetup = require("./config/passport");

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/project-showcase-backend",
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}));
app.use(
  session({
    secret: "blah blah blah",
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
passportSetup(app);

const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);

const projectRouter = require("./routes/projectsRoutes");
app.use("/api", projectRouter);

module.exports = app;
