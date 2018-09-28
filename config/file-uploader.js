const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "app-images",
  // in case you want to upload things that aren't pictures
  // params: {
  //   resource_type: "raw"
  // },
});

const fileUploader = multer({ storage });


module.exports = fileUploader;
