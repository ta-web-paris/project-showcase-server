const express = require("express");
const router = express.Router();

const Project = require("../models/project-model");

//------------ DISPLAY PROJECTS -----------------

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

//---------------- EDIT A PROJECT ------------

router.put("/notverified/:id", (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;
  Project.findByIdAndUpdate(
    id,
    { ...fields },
    { runValidators: true, new: true }
  )
    .then(projectDetails => res.json(projectDetails))
    .catch(err => next(err));
});

module.exports = router;
