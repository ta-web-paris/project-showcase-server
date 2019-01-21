const express = require("express");
const router = express.Router();
const Project = require("../models/project-model.js");

router.post("/projects", (req, res, next) => {
  const { ...fields } = req.body;

  Project.create({ ...fields })
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

router.get("/", (req, res, next) => {
  Project.find()
    .then(projectsArr => res.json(projectsArr))
    .catch(next);
});

router.get("/projects/:id", (req, res, next) => {
  const { id } = req.params;
  Project.findById(id)
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

router.delete("/projects/:id", (req, res, next) => {
  const { id } = req.params;
  Project.findByIdAndRemove(id)
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

router.put("/projects/:id", (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  Project.findByIdAndUpdate(
    id,
    { ...fields },
    { runValidators: true, new: true }
  )
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

module.exports = router;
