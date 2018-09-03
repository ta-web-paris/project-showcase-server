const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    creators: [{ type: String, required: true }],
    screenshotUrl: { type: String },
    description: { type: String },
    gitHubUrl: { type: String },
    projectUrl: { type: String, required: true },
    podiumPosition: { type: String },
    techStack: [{ type: String }]
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
