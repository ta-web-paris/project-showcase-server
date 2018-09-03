const express = require("express");
const router = express.Router();
const Project = require("../models/project-model.js");

router.post("/projects", (req, res, next) => {
  const {
    name,
    creators,
    screenshotUrl,
    description,
    gitHubUrl,
    projectUrl,
    techStack
  } = req.body;

  Project.create({
    name,
    creators,
    screenshotUrl,
    description,
    gitHubUrl,
    projectUrl,
    techStack
  })
    .then(projectDoc => {
      res.json(projectDoc);
    })
    .catch(next);
});

router.get("/projects", (req, res, next) => {
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
  const {
    name,
    creators,
    screenshotUrl,
    description,
    gitHubUrl,
    projectUrl,
    techStack
  } = req.body;

  Project.findByIdAndUpdate(
    id,
    {
      name,
      creators,
      screenshotUrl,
      description,
      gitHubUrl,
      projectUrl,
      techStack
    },
    { runValidators: true, new: true }
  )
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

module.exports = router;
