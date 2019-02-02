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

//-------------- DELETE A PROJECT ---------------

router.delete("/projects/:id", (req, res, next) => {
  const { id } = req.params;
  Project.findByIdAndRemove(id)
    .then(projectDoc => res.json(projectDoc))
    .catch(next);
});

//--------------- UPDATE A PROJECT -----------

router.get("/projects/edit/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(req.pa, "gogogogoggogogog");

  Project.findById(id)
    .then(projectDoc => {
      // console.log(projectDoc);
      res.json(projectDoc);
    })
    .catch(next);
});

router.put("/projects/edit/:id", (req, res, next) => {
  const { id } = req.params;

  // console.log(id);
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
