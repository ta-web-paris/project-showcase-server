const express = require("express");
const router = express.Router();

const Project = require("../models/project-model");

//------------ DISPLAY PROJECTS -----------------

router.get("/verified", (req, res, next) => {
  Project.find({ verified: { $eq: true } })
    .then(projectArr => res.json(projectArr))
    .catch(next);
});

router.get("/notverified", (req, res, next) => {
  Project.find({ verified: { $eq: false } })
    .then(projectArr => res.json(projectArr))
    .catch(next);
});

//-------------- DELETE A PROJECT ---------------

router.delete("/projects/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Project.findOneAndRemove({ searchId: { $eq: id } })
    .then(projectDoc => {
      console.log(projectDoc);

      res.json(projectDoc)
      console.log("deleted");
    })
    .catch(next);
});

//--------------- UPDATE A PROJECT -----------

router.get("/projects/edit/:id", (req, res, next) => {
  const { id } = req.params;
  Project.findOne({ searchId: { $eq: id } })
    .then(projectDoc => {
      console.log(projectDoc);

      res.json(projectDoc);
    })
    .catch(next);
});

router.put("/projects/edit/:id", (req, res, next) => {
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
