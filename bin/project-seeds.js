

const mongoose = require("mongoose");
const Project = require("../models/project-model.js");

///////////////////////////////////////////////////////////////////////////////////

 mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  ///////////////////////////////////////////////////////////////////////////////////


  const projects = [
    {
      name: "Pairs",
      creators: ["Paul Abarnou"],
      screenshotUrl: "http://pairs-in-paris.herokuapp.com/images/Logo-Pairs.png",
      description: "Pairs allows people to rent an appartment for small periods on a regular basis (e.g few days per week during few months)",
      gitHubUrl: "https://github.com/PaulAbarnou37",
      projectUrl: "http://pairs-in-paris.herokuapp.com/",
      tools: ["MongoDB","Node.js", "Express.js", "React.js"],
      likes: 56,
      linkedInUrl: "https://www.linkedin.com/in/paul-abarnou-1b389080/",
      projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
      display: "web",
      bootcamp: "Web Dev Full Time",
      squad: "#111 - August 18"
    },{
    name: "Custom React App",
    creators: ["Mohammed Zamama", "Emmanuelle Jaldoreau", "Pauline Brothier"],
    screenshotUrl: "http://www.rudebaguette.com/assets/ecommerce-12.jpg",
    description: "Custom React App is an e-commerce platform that you can manage on Wordpress and developped with React",
    gitHubUrl: "https://github.com/MomoPauletteEmmanuelle",
    projectUrl: "http://customreactapp.herokuapp.com/",
    tools: ["MongoDB","Node.js", "Express.js", "React.js"],
    likes: 60,
    linkedInUrl: "https://www.linkedin.com/in/mohammed-1b389080/",
    projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
    display: "web",
    bootcamp: "Web Dev Full Time",
    squad: "#121 - March 18"
    },{
      name: "Facebook",
      creators: ["Marie Gilier", "Paul Abarnou", "Abi Summers"],
      screenshotUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--8mfRXFFg--/c_scale,f_auto,fl_progressive,q_80,w_800/lerhtnwejopgb63yvs8m.jpg",
      description: "Facebook is a social platform that connects the world",
      gitHubUrl: "https://github.com/PaulAbarnou37",
      projectUrl: "https://facebooook.herokuapp.com/",
      tools: ["MongoDB","Node.js", "Express.js", "React.js"],
      likes: 32,
      linkedInUrl: "https://www.linkedin.com/in/paul-abarnou-1b389080/",
      projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
      display: "mobile",
      bootcamp: "Web Dev Full Time",
      squad: "#111 - August 18"
      },{
        name: "LinkedIn",
        creators: ["Nizar Khalife"],
        screenshotUrl: "https://lh3.googleusercontent.com/z0gMa0aRAkLxjS-lVaSOO1Ygb48rttOcR5iRpgJPTM6_enkfeCuN37JWm_9qcHJaJw",
        description: "Custom React App is an e-commerce platform that you can manage on Wordpress and developped with React",
        gitHubUrl: "https://github.com/nizarkhalife",
        projectUrl: "http://nizarrrrrr.herokuapp.com/",
        tools: ["MongoDB","Node.js", "Express.js", "React.js"],
        likes: 87,
        linkedInUrl: "https://www.linkedin.com/in/nizarr-1b389080/",
        projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
        display: "web",
        bootcamp: "Web Dev Part Time",
        squad: "#111 - August 18"
        },{
          name: "Twitter",
          creators: ["Maya Despretz"],
          screenshotUrl: "https://lh3.googleusercontent.com/z0gMa0aRAkLxjS-lVaSOO1Ygb48rttOcR5iRpgJPTM6_enkfeCuN37JWm_9qcHJaJw",
          description: "Twitter is a social platform where you can post stuff on",
          gitHubUrl: "https://github.com/twitterofgithub",
          projectUrl: "http://twiwiter.herokuapp.com/",
          tools: ["MongoDB","Node.js", "Express.js", "React.js"],
          likes: 13,
          linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/",
          projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
          display: "web",
          bootcamp: "UX/UI Part Time",
          squad: "#51 - May 17"
          },{
            name: "Github",
            creators: ["Guy Theub"],
            screenshotUrl: "https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg",
            description: "Github is platform for developpers to collaborate and share blahblah",
            gitHubUrl: "https://github.com/twitterofgithub",
            projectUrl: "http://twiwiter.herokuapp.com/",
            tools: ["MongoDB","Node.js", "Express.js", "React.js"],
            likes: 13,
            linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/",
            projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
            display: "web",
            bootcamp: "UX/UI Part Time",
            squad: "#101 - October 18"
            },{
              name: "IronHack",
              creators: ["Aillero Nack"],
              screenshotUrl: "https://pbs.twimg.com/profile_images/1031555260911939586/e01tx3UC_400x400.jpg",
              description: "Github is platform for developpers to collaborate and share blahblah",
              gitHubUrl: "https://github.com/twitterofgithub",
              projectUrl: "http://ironhacck.herokuapp.com/",
              tools: ["MongoDB","Node.js", "Express.js", "React.js"],
              likes: 71,
              linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/",
              projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
              display: "mobile",
              bootcamp: "Data Analytics",
              squad: "#119 - May 19"
              },{
                name: "Crapfounder",
                creators: ["John Dimitroff"],
                screenshotUrl: "https://pbs.twimg.com/profile_images/1031555260911939586/e01tx3UC_400x400.jpg",
                description: "Github is platform for developpers to collaborate and share blahblah",
                gitHubUrl: "https://github.com/twitterofgithub",
                projectUrl: "http://ironhacck.herokuapp.com/",
                tools: ["MongoDB","Node.js", "Express.js", "React.js"],
                likes: 83,
                linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/",
                projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
                display: "mobile",
                bootcamp: "Data Analytics",
                squad: "#61 - March 17"
                },{
                  name: "Amazon",
                  creators: ["Jeff Bezos", "Paul Abarnou"],
                  screenshotUrl: "https://pbs.twimg.com/profile_images/1031555260911939586/e01tx3UC_400x400.jpg",
                  description: "Github is platform for developpers to collaborate and share blahblah",
                  gitHubUrl: "https://github.com/twitterofgithub",
                  projectUrl: "http://ironhacck.herokuapp.com/",
                  tools: ["MongoDB","Node.js", "Express.js", "React.js"],
                  likes: 14,
                  linkedInUrl: "https://www.linkedin.com/in/hey-1b389080/",
                  projectCredentials: ["p.abarnou38@gmail.com", "hey123"],
                  display: "mobile",
                  bootcamp: "Data Analytics",
                  squad: "#111 - August 18"
                  }
    
    
    ]

  ///////////////////////////////////////////////////////////////////////////////////



Project.create(projects)
  .then(projectResult => {
    console.log(`inserted ${projectResult.length} PROJECTS YAY`);
  })
  .catch(err => {
    console.log("Created failure!!", err);
  }); 




