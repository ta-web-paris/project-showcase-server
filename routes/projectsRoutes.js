const express = require("express");
const router = express.Router();
const Project = require("../models/project-model.js");

//---------------- ALL PROJECTS -------------

router.get("/", (req, res, next) => {
  Project.find()
    .then(projectsArr => {
      res.json(projectsArr);
    })
    .catch(next);
});

// --------------- CREATE A PROJECT ----------
router.post("/projects", (req, res, next) => {
  const { ...fields } = req.body;

  Project.create({ ...fields })
    .then(projectDoc => {
      res.json(projectDoc);
    })
    .catch(next);
});

// ------------- PROJECT DETAIL PAGE -----------------

router.get("/projects/:id", (req, res, next) => {
  const { id } = req.params;

  Project.findOne({ searchId: { $eq: id } })
    .then(projectDoc => {
      res.json(projectDoc);
    })
    .catch(next);
});

//----------- more projects by this creator

module.exports = router;
