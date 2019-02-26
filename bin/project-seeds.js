const mongoose = require("mongoose");
const Project = require("../models/project-model.js");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const projects = [
  {
    name: "Pairs",
    creators: [
      {
        name: "Paul Abarnou",
        linkedInUrl: "https://www.linkedin.com/in/paul-abarnou-1b389080/"
      }
    ],
    screenshotUrl: "/images/Pairs.png",
    description:
      "Pairs allows people to rent an appartment for small periods on a regular basis (e.g few days per week during few months)",
    gitHubUrl: "https://github.com/PaulAbarnou37",
    projectUrl: "http://pairs-in-paris.herokuapp.com/",
    projectType: "fullstack - framework",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js", "React.js"],
    likes: 0,
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "notverified",
    searchId: "01",
    squad: "#84",
    thumbnail: "/images/Pairs_thumbnail.png",
    projectNumber: 2
  },
  {
    name: "Guess Who Game",
    creators: [
      {
        name: "Laura Stromboni",
        linkedInUrl: "https://www.linkedin.com/in/laurastromboni/"
      }
    ],
    screenshotUrl: "/images/Guesswho.png",
    description:
      "Let’s play to this traditional game where you have to find a hidden character among 25.",
    gitHubUrl: "https://github.com/laurastromboni/guesswho",
    projectUrl: "https://laurastromboni.github.io/guesswho/",
    projectType: "front-end",
    display: "web",
    tools: ["JavaScript", "HTML", "CSS"],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "02",
    squad: "#99",
    thumbnail: "/images/Guesswho_thumbnail.png",
    projectNumber: 1
  },
  {
    name: "O’Vino",
    creators: [
      {
        name: "Laura Stromboni",
        linkedInUrl: "https://www.linkedin.com/in/laurastromboni/"
      },
      {
        name: "Geoffroy Baghdassarian",
        linkedInUrl: "https://www.linkedin.com/in/geoffroy-baghdassarian/"
      }
    ],
    screenshotUrl: "/images/Ovino.png",
    description:
      "Food and wine pairing delivery application, w/ advice & social services.",
    gitHubUrl: "https://github.com/geoffroybag/ovino",
    projectUrl: "http://ovino.herokuapp.com/",
    projectType: "fullstack",
    display: "mobile",
    tools: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "HBS",
      "JavaScript",
      "Mongoose",
      "SASS"
    ],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "03",
    squad: "#99",
    thumbnail: "/images/Ovino_thumbnail.png",
    projectNumber: 2
  },
  {
    name: "Airbnb Clone",
    creators: [
      {
        name: "Laura Stromboni",
        linkedInUrl: "https://www.linkedin.com/in/laurastromboni/"
      },
      {
        name: "Geoffroy Baghdassarian",
        linkedInUrl: "https://www.linkedin.com/in/geoffroy-baghdassarian/"
      },
      {
        name: "Mathis Peingnez",
        linkedInUrl: "https://www.linkedin.com/in/mathispnz/"
      }
    ],
    screenshotUrl: "/images/Airbnb.png",
    description: "A clone of Airbnb",
    gitHubUrl: "https://github.com/laurastromboni/airbnb-clone",
    projectUrl: "http://iron-airbnb.herokuapp.com/",
    projectType: "fullstack - framework",
    display: "web",

    tools: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "React.js",
      "SASS",
      "JavaScript",
      "Bootstrap",
      "socket.io"
    ],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "04",
    squad: "#99",
    thumbnail: "/images/Airbnb_thumbnail.png",
    projectNumber: 3
  },
  {
    name: "Tap Tap Revolution",
    creators: [
      {
        name: "Abi Summers",
        linkedInUrl: "https://www.linkedin.com/in/abisummers/"
      }
    ],
    screenshotUrl: "/images/Taptap.png",
    description: "A game based on dance dance revolution",
    gitHubUrl: "https://github.com/abisummers",
    projectUrl: "http://abisummers.com/project-one",
    projectType: "front-end",
    display: "web",
    tools: ["JavaScript", "HTML", "CSS"],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "05",
    squad: "#83",
    thumbnail: "/images/Taptap_thumbnail.png",
    projectNumber: 1
  },
  {
    name: "Ironhack Sharer",
    creators: [
      {
        name: "Abi Summers",
        linkedInUrl: "https://www.linkedin.com/in/abisummers"
      },
      {
        name: "Emmanuelle Jaldorau",
        linkedInUrl: "https://www.linkedin.com/in/ejaldorau/"
      }
    ],
    screenshotUrl: "/images/Sharer.png",
    description:
      "A platform to allow ironhack students to share projects and ideas",
    gitHubUrl: "https://github.com/abisummers/project-two",
    projectUrl: "https://ironhack-sharer.herokuapp.com/",
    projectType: "fullstack",
    display: "web",
    tools: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "HBS",
      "JavaScript",
      "Mongoose"
    ],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "06",
    squad: "#83",
    thumbnail: "/images/Sharer_thumbnail.png",
    projectNumber: 2
  },
  {
    name: "Recyclez-moi",
    creators: [
      {
        name: "Abi Summers",
        linkedInUrl: "https://www.linkedin.com/in/abisummers"
      },
      {
        name: "Julie Ménard",
        linkedInUrl: "https://www.linkedin.com/in/julie-m%C3%A9nard/"
      },
      {
        name: "Manon Salaun",
        linkedInUrl: "https://www.linkedin.com/in/manonsalaun/"
      }
    ],
    screenshotUrl: "/images/Recyclezmoi.png",
    description: "Know how to recycle your trash!",
    gitHubUrl: "https://github.com/abisummers/recycle-react",
    projectUrl: "http://www.recyclez-moi.co/",
    projectType: "fullstack - framework",
    display: "web",
    tools: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "React.js",
      "SASS",
      "JavaScript"
    ],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "07",
    squad: "#83",
    thumbnail: "/images/Recyclezmoi_thumbnail.png",
    projectNumber: 3
  },
  {
    name: "Is This Art?",
    creators: [
      {
        name: "Chloé Hipeau-Disko",
        linkedInUrl: "https://www.linkedin.com/in/chloehd/"
      }
    ],
    screenshotUrl: "/images/Isthisart.png",
    description:
      "Github is platform for developpers to collaborate and share blahblah",
    gitHubUrl: "https://github.com/chloehd/IsThisArt",
    projectUrl: "https://chloehd.github.io/IsThisArt/",
    projectType: "front-end",
    display: "web",
    tools: ["JavaScript", "CSS", "HTML"],
    likes: 0,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "08",
    squad: "#99",
    thumbnail: "/images/Isthisart_thumbnail.png",
    projectNumber: 1
  },
  {
    name: "SZNal",
    creators: [
      {
        name: "Chloé Hipeau-Disko",
        linkedInUrl: "https://www.linkedin.com/in/chloehd/"
      },
      {
        name: "Helen Woldu",
        linkedInUrl: "https://www.linkedin.com/in/helen-woldu/"
      }
    ],
    screenshotUrl: "/images/SZNal.png",
    description: "Learn about seasonal foods!",
    gitHubUrl: "https://github.com/hwoldu/IronhackProject2",
    projectUrl: "https://szn-recipes.herokuapp.com/",
    projectType: "fullstack",
    display: "web",
    tools: ["MongoDB", "Node.js", "Express.js"],
    likes: 14,
    // projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    bootcamp: "Web Dev Full Time",
    verified: "verified",
    searchId: "09",
    squad: "#99",
    thumbnail: "/images/SZNal_thumbnail.png",
    projectNumber: 2
  }
];

Project.create(projects)
  .then(projectResult => {
    console.log(`inserted ${projectResult.length} PROJECTS YAY`);
  })
  .catch(err => {
    console.log("Created failure!!", err);
  });
