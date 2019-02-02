const express = require("express");
const router = express.Router();
const Project = require("../models/project-model.js");

//---------------- ALL PROJECTS -------------

router.get("/", (req, res, next) => {
  Project.find()
    .then(projectsArr => {
      res.json(projectsArr);
      // console.log("project array", projectsArr);
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

  Project.find({ searchId: { $eq: id } })
    .then(projectDoc => {
      res.json(projectDoc);
    })
    .catch(next);

  // const { id } = req.params;
  // console.log(id, "hoho");
  // Project.findById(id)
  //   .then(projectDoc => res.json(projectDoc))
  //   .catch(next);
});

// router.get("/projects/:id", (req, res, next) => {
//   const { id } = req.params;
//   console.log(id, "hoho");
//   Project.findById(id)
//     .then(projectDoc => res.json(projectDoc))
//     .catch(next);
// });

module.exports = router;
