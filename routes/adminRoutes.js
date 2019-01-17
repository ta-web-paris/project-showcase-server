const express = require("express");
const router = express.Router();

const Project = require("../models/project-model");

router.get("/verified", (req, res, next) => {
  Project.find({ verified: { $eq: "verified" } })
    .then(projectArr => res.json(projectArr))
    .catch(next);
});

router.get("/notverified", (req, res, next) => {
  Project.find({ verified: { $eq: "notverified" } })
    .then(projectArr => res.json(projectArr))
    .catch(next);
});

module.exports = router;
