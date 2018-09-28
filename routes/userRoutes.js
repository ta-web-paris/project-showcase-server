const express = require("express");
const bCrypt = require("bcrypt");

const User = require("../models/user-model");
const fileUploader = require("../config/file-uploader.js");

const router = express.Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// LOGIN

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(userDoc => {
      if (!userDoc) {
        throw new Error("Email not found");
      }
      if (!bCrypt.compareSync(password, userDoc.encryptedPassword)) {
        throw new Error("Wrong password");
      }
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(next);
});

// LOGOUT

router.delete("/logout", (req, res, next) => {
  req.logOut();
  res.json({ userDoc: null });
});

// CHECK LOGIN

router.get("/check-login", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
  }
  res.json({ userDoc: req.user });
});

router.post("/upload-image",
  fileUploader.single("imageFile"),
  (req, res, next) => {
    if (!req.user) {
      next(new Error("Log in to upload an image"));
    }
    else if (!req.file) {
      next(new Error("No image uploaded"));
    }
    else {
      const { originalname, secure_url, format, width, height } = req.file;
      res.json({
        imageName: originalname,
        imageUrl: secure_url,
        format,
        width,
        height,
      });
    }
  });

module.exports = router;
