import {
  mobile,
  backend,
  creator as designer,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,

  //  postgres
  // flutter
  // django rest framework
  // spring boot
  // python
  // aws
  // postman
  // adobe illustrator
  // wordpress
  asimith,
  healthaid,
  threejs,
  azurite,
  spring,
  django,
  aws,
  illustrator,
  flutter,
  xerogo,
  bluechip,
  musaib,
  siddaram,
  srivatsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: designer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Spring boot",
    icon: spring,
  },
  {
    name: "Django Rest Framework",
    icon: django,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Azurite",
    icon: azurite,
    iconBg: "#fff",
    date: "May 2022 - Oct 2022",
    points: [
      "Played a role in development of the frontend of the learning management system.",
      "Played Major role in development of REST API for the LMS and its deployment on AWS.",
      "Lead and Collaborate with team to accomplish tasks within the given deadline.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Asimith by RvRH",
    icon: asimith,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2022",
    points: [
      "Developed MVP of a mobile app using React Native.",
      "Played a crucial role in developing an API that connected with ABHA API, utilizing Java Spring Boot.",
      "Developed a significant portion of a web app using lit.dev.",
      "Made analytical decisions from a customer's perspective, ensuring alignment with their needs.",
      "Successfully managed and coordinated a team to achieve project milestones and deliverables.",
    ],
  },
];

const socialMediaHandles = [
  { name: "instagram", link: "https://www.instagram.com/yaseeen057/" },
  { name: "twitter", link: "https://twitter.com/Yaseen57485/" },
  { name: "github", link: "https://github.com/yaseeen96/" },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/syed-yaseen-58b2b4213/",
  },
];

const testimonials = [
  {
    testimonial:
      "During a recent hackathon, I had the privilege of working closely with Yaseen, and I am delighted to provide a review that reflects his exceptional skills and qualities. Despite being relatively new to React Native, Yaseen made a lasting impression with his remarkable ability to grasp concepts swiftly and deliver high-quality work at an impressive speed. Furthermore, his attentive listening skills and profound understanding of project requirements made our collaboration seamless and successful.",
    name: "Md Musaib Ali",
    designation: "Frontend Developer",
    company: "Cloud Fabrix",
    image: musaib,
  },
  {
    testimonial:
      "I had the privilege of working with Yaseen on a startup, and I can genuinely attest to his exceptional ability to swiftly grasp and learn new concepts. Yaseen's rapid adaptability allowed him to deliver high-quality work with ease. His aptitude for quickly understanding and applying new ideas was truly impressive. Working with Yaseen on our startup was a pleasure, as his expertise and proficiency in learning new concepts greatly contributed to our success.",
    name: "Siddaram Hebbal",
    designation: "Sr Software Developer",
    company: "Minds Solvit Pvt Ltd",
    image: siddaram,
  },
  {
    testimonial:
      "Yaseen's skills as a developer are truly impressive. From our collaboration, I noticed his solid grasp of the basics and his attentive listening skills, which greatly contribute to his effectiveness. What sets Yaseen apart is his exceptional leadership abilities and his knack for infusing creativity into his work. His strong communication skills and impressive presentation abilities make working with him a pleasure.",
    name: "Srivatsa Sugurkar",
    designation: "Java Developer",
    company: "TCS",
    image: srivatsa,
  },
];

const projects = [
  {
    name: "Bluechip - Event Management System",
    description:
      "The mobile application for event management simplifies event registration for students, allowing them to easily browse and sign up for workshops and events with a single tap.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: bluechip,
    source_code_link: "https://github.com/yaseeen96/student_app",
  },
  {
    name: "HealthAid-Backend",
    description:
      "HealthAid-backend is an API developed using Django Rest Framework. It provides an API for MRMC College in Kalaburagi, which allows staff in hospitals to manage patients via a website or application. This repository serves as the backend for the project.",
    tags: [
      {
        name: "django-rest-framework",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: healthaid,
    source_code_link: "https://github.com/yaseeen96/healthaid-backend",
  },
  {
    name: "xeroGO - Printing Simplified",
    description:
      "The project Introduces a unique and cost effective solution for Xerox shops - a comprehensive mobile application that enables vendors to take their business online, without the burden of expensive CRM systems.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
    ],
    image: xerogo,
    source_code_link:
      "https://github.com/yaseeen96/pixel-trio-hackowasp-app/tree/master",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaHandles,
};
