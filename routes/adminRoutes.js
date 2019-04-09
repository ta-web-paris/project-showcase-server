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

  Project.findById(id)
    .then(projectDoc => {
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

router.get("/projects/delete/:id", (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  Project.findOne(id)
    .then(projectDoc => {
      console.log(projectDoc);
      res.json(projectDoc);
    })
    .catch(next);
});

// router.post('/movies/:id/delete', function(req, res, next) {
//   Movie.findOne({ _id: req.params.id }, (err, theMovie) => {
//     if (err) { return next(err); }

//     theMovie.remove((err) => {
//       if (err) { return next(err); }

//       res.redirect('/movies');
//     });
//   });
// });

module.exports = router;
