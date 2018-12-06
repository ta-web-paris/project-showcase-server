const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    creators: [
      { 
        name : {type: String, required: true},
        linkedInUrl: {type: String}
      }
    ],
    screenshotUrl: { type: String },
    projectType: {type: String, enum: ["App","Website","Mobile Website", "Front-End", "Full-Stack", "UX", "UX/UI", "UI" ]},
    description: { type: String },
    gitHubUrl: { type: String },
    projectUrl: { type: String, required: true },
    tools: [{ type: String }],
    likes: {type: Number},
    projectCredentials: [ {type: String}],
    display: {type: String, enum: ["mobile", "web"]},
    bootcamp: {type: String, enum: ["Web Dev Full Time", "Web Dev Part Time", "UX/UI Part Time", "UX/UI Full Time", "Data Analytics" ]},
    squad: {type: String}
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
