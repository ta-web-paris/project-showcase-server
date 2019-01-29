require("dotenv").config();
const mongoose = require("mongoose");
const mongoolia = require("mongoolia").default;

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    searchId: { type: Number, algoliaIndex: true },
    name: { type: String, required: true, algoliaIndex: true },
    creators: { type: Array, required: true, algoliaIndex: true },
    screenshotUrl: { type: String, algoliaIndex: true },
    description: { type: String, algoliaIndex: true },
    gitHubUrl: { type: String, algoliaIndex: true },
    projectUrl: { type: String, required: true, algoliaIndex: true },
    tools: { type: Array, algoliaIndex: true },
    likes: { type: Number, algoliaIndex: true },
    linkedInUrl: { type: String, algoliaIndex: true },
    projectCredentials: { type: Array, algoliaIndex: true },
    bootcamp: {
      type: String,
      enum: [
        "Web Dev Full Time",
        "Web Dev Part Time",
        "UX/UI Part Time",
        "UX/UI Full Time",
        "Data Analytics"
      ],
      algoliaIndex: true
    },
    display: { type: String, enum: ["mobile", "web"], algoliaIndex: true },
    projectType: {
      type: String,
      enum: [
        "fullstack",
        "fullstack - framework",
        "front-end",
        "UX",
        "UI",
        "UX/UI",
        "data"
      ],
      algoliaIndex: true
    },
    verified: {
      type: String,
      enum: ["verified", "notverified"],
      default: "notverified",
      algoliaIndex: true
    },
    squad: { type: String, algoliaIndex: true }
  },

  {
    timestamps: true
  }
);

projectSchema.plugin(mongoolia, {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indexName: "search_data"
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
