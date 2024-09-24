// src/constants/index.js

import { shopify, starbucks } from "../assets/images";
import {
  contact,
  css,
  git,
  python,
  threejs,
  github,
  java,
  spring,
  html,
  agaram,
  javascript,
  firebase,
  linkedin,
  react,
  tailwindcss,
  bootstrap,
  arrow,
} from "../assets/icons/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript, 
    name: "JS",
    type: "Backend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "GIT",
    type: "Verssion Control",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
//   {
//     imageUrl: "path/to/mongodb", // Replace with actual import or path
//     name: "MongoDB",
//     type: "Database",
//   },
//   {
//     imageUrl: motion,
//     name: "Motion",
//     type: "Animation",
//   },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: firebase, 
    name: "Firebase",
    type: "Backend API",
  },
  {
    imageUrl : java,
    name : "Java",
    type : "Backend",
  },
  {
    imageUrl : spring,
    name : "Spring boot",
    type : "Framework",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl : bootstrap,
    name: "Bootstrap",
    type:"Front-end",
  },
  {
    imageUrl : threejs,
    name : "threejs",
    type:"3D modeling",
  }
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Mr.Cooper",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "JULY 2024 - AUG 2024",
    points: [
      "Developed and Presented a Webapp named Crop Connect which solves the probem facing by the farmer in the market.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: "path/to/tesla", // Replace with actual import or path
//     iconBg: "#fbc3bc",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
  {
    title: "Junior Network Engineer",
    company_name: "Teleglobal Network Enterprises",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "JULY 2023 - AUG 2023",
    points: [
      "Assist in configuring and maintaining network devices like routers and switches.Monitor network performance and troubleshoot connectivity issues.",
      "Conduct tests to assess network performance and reliability.Use network testing tools to diagnose and resolve network issues.",
      "Gained practical knowledge of Radwin JetPro and Radwin Alpha systems, focusing on wireless broadband solutions.Familiarized with Cambium 400 technologies for point-to-point and point-to-multipoint connectivity.",
    ],
  },
//   {
//     title: "Full Stack Developer",
//     company_name: "Meta",
//     icon: "path/to/meta", // Replace with actual import or path
//     iconBg: "#a2d2ff",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: agaram,
    theme: "btn-back-green",
    name: "Agaram Webapp",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://rokeshkannanv.github.io/AGMProject",
  },
  // {
  //   iconUrl: "path/to/threads", // Replace with actual import or path
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: "path/to/car", // Replace with actual import or path
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: "path/to/snapgram", // Replace with actual import or path
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: "path/to/estate", // Replace with actual import or path
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: "path/to/summiz", // Replace with actual import or path
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];

// Default export for the constants file
const constants = {
  skills,
  experiences,
  socialLinks,
  projects,
};

export default constants;
