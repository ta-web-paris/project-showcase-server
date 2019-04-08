require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
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
    process.env.MONGODB_URI,
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

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
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

const adminRouter = require("./routes/adminRoutes");
app.use("/api", adminRouter);

module.exports = app;
