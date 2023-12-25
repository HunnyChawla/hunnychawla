/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hunny Chawla",
  title: "Hi, I'm Hunny",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1E_VLGZctPiR7LoO6rNrqH0y9tsr5CzPs/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hunnychawla",
  linkedin: "https://www.linkedin.com/in/hunnychawla/",
  gmail: "hunnychawla528@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@hunnychawla28",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build robust and scalable backend systems to power the functionality and data management of your web and mobile applications."
    ),
    emoji("⚡ Implement and optimize server-side logic, databases, and APIs to enhance the performance and responsiveness of applications, providing a reliable and efficient user experience."),
    emoji(
      "⚡ Collaborate with cross-functional teams to design and implement secure and maintainable backend solutions, leveraging the latest technologies and best practices in software development."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indira Gandhi National Open University",
      logo: require("./assets/images/ignoulogo.png"),
      subHeader: "Master of Computer Application",
      duration: "Jan 2018 - Dec 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Kurukshetra University",
      logo: require("./assets/images/kuklogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Jun 2014 - May 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 2",
      company: "PayPal",
      companylogo: require("./assets/images/paypal-logo-2.png"),
      date: "Sep 2022 – Present",
      desc: "I'm playing a key role in developing and enhancing post-payment components, improving test coverage, implementing Kafka for efficient event processing, and collaborating with diverse teams to achieve project objectives.",
      descBullets: [
        "Contributed to coding post-payment components, including refunds and completions, to enhance system functionality.",
        "Increased test case coverage from 61% to 75%, ensuring thorough and comprehensive testing of the codebase.",
        "Successfully implemented Kafka for efficient event publication, leading to improved system performance and responsiveness."
      ]
    },
    {
      role: "Application Developer Consultant",
      company: "ThoughtWorks",
      companylogo: require("./assets/images/thoughtworkslogo.jpeg"),
      date: "Nov 2020 – Jul 2022",
      desc: "I design and develop user interfaces for data capture and visualization, utilizing Angular for frontend, optimizing data processing, implementing AG-Grid for data tables, and actively contributing to code design and technical discussions.",
      descBullets: [
        "Develop user interfaces for data capture and visualization using Angular, ensuring seamless integration between frontend and backend systems while adhering to Test-Driven Development (TDD) practices.",
        "Contribute to the optimization of data processing, implement AG-Grid for efficient data table presentation, and actively participate in technical discussions to enhance overall code design and functionality."
      ]
    },
    {
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcslogo.jpeg"),
      date: "Jul 2017 – Feb 2020",
      desc: "I designed user interfaces for data capture, orchestrated backend processes, led a team through requirement analysis and architecture design, implemented a high-speed bulk result upload utility, and delivered a generic solution for AJAX calls.",
      descBullets: [
        "Led the design of user interfaces for efficient data capture, managing both front-end presentation and back-end processing",
        "Spearheaded project initiatives as a Module Leader, overseeing requirement analysis, architecture design, team guidance, and successful implementation, including the development of a high-speed bulk result upload utility and a generic solution for AJAX calls."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "About the projects that I worked on in above organisation",
  projects: [
    {
      image: require("./assets/images/paypal-logo.png"),
      projectName: "PayPal PostPayments",
      projectDesc: "A System to handle all activity post payments like refund, reversal and many more.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://paypal.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/humana-logo.png"),
      projectName: "Humana Acuilty",
      projectDesc: "A System where we can manage patient, patient-medcation, doctor and hospital data to analyse growth areaa",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/hpblogo-2.png"),
      projectName: "Healthy 365",
      projectDesc: "Healthy 365, an app which fosters a healthier lifestyle through gamification, in-app challenges, and seamless integration with fitness trackers, empowering users to earn Healthpoints and rewards while tracking daily activity and making healthier choices with participating partners.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hpb.gov.sg/healthy-living/healthy-365"
        }
      ]
    },
    {
      image: require("./assets/images/icailogo-2.png"),
      projectName: "Self Service Portal",
      projectDesc: "The Institute of Chartered Accountants of India (ICAI) introduced the Self Service Portal (SSP) for Chartered Accountant (CA) students, firms and members. The ICAI regulates accountancy work, monitors quality through peer review, formulates accounting standards, etc., through the SSP portal.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eservices.icai.org/per/g21/pub/1666/SelfServices/templates/ICAI%20Member%20Landing%20Page01032021015049/Member%20Landing%20Page%20With%20Change%20Password/ICAI%20Member%20Landing%20Page19614801032021015102.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Advent of Code Winner",
      subtitle:
        "Winner of Advent of Code 2021 at office level in ThoughtWorks",
      image: require("./assets/images/advlogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "TCS iON JAVA Hackathon Winner",
      subtitle:
        "Won org level hackathon based on java language coding.",
      image: require("./assets/images/tcsionlogo.png"),
      imageAlt: "TCS iON logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Winner of UniversuMM 2017",
      subtitle: "Secure 2nd place in debugging",
      image: require("./assets/images/universumlogo.png"),
      imageAlt: "Universumm Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Gallery Section

const gallerySection = {
  title: emoji("Gallery 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TCS iON JAVA Hackathon Winner",
      subtitle:
        "Won org level hackathon based on java language coding.",
      image: require("./assets/images/gal2.jpg"),
      imageAlt: "TCS iON logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    { 
      image: require("./assets/images/gal3.jpg"),
      imageAlt: "Universumm Logo",
    },
    { 
      image: require("./assets/images/gal4.png"),
      imageAlt: "Universumm Logo",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "hunnychawla528@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  gallerySection
};
