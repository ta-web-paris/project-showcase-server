const passport = require("passport");

const User = require("../models/user-model");

passport.serializeUser((userDoc, done) => done(null, userDoc._id));
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(userDoc => done(null, userDoc))
    .catch(done);
});

function passportSetup(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

module.exports = passportSetup;
