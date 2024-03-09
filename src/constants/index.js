import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name:"C",
    },
    {
      name:"C++",
    },
    {
      name:"Java",
    },
    {
      name:"Java3D",
    },
    {
      name:"Python",
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
  ];
  
  const experiences = [
    {
      title: "Web Design Intern",
      company_name: "Wine and Spirits Lab",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Utilized HTML, CSS, and JavaScript to design visually appealing and user-friendly website layouts.",
        "Employed Notion as a project management tool to enhance communication, monitor updates, and foster seamless collaborative teamwork within the organization.",
        "Contributed to the development of engaging web interfaces, ensuring a positive user experience for visitors to the Wine and Spirits Lab website.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "CIPL",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Collaborated remotely with a team to develop software solutions and enhance existing systems",
        "Designed and executed a CI/CD pipeline using Jenkins, resulting in a 40% improvement in software deployment efficiency.",
        "Contributed to the development of software components, including algorithms and data representations, demonstrating proficiency in software engineering principles and practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      title: "ScrumW23",
      description:
        "As part of the ScrumW23 project, I created a visually stunning maze game using Java with Java3D and Blender. I integrated Azure DevOps for effective project management and implemented the Scrum methodology. Utilizing Agile methodologies and techniques, we optimized development processes for efficiency.",
        tags:[
        {
          title: "Azure DevOps",
          color: "blue-text-gradient",
        },
        {
          title: "JAVA3D",
          color: "green-text-gradient",
        },
        {
          title: "JAVA",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "I independently developed a Tic-Tac-Toe game project in C. This project showcased my expertise in the C programming language and algorithmic design. I applied strategic thinking to architect efficient algorithms for managing game logic, ensuring a seamless gaming experience.",
      tags: [
        {
          title: "C",
          color: "blue-text-gradient",
        },
        {
          title: "Algorithm Desing",
          color: "green-text-gradient",
        },
        {
          title: "Game Logic",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
    title: "Gen Aid",
    description:
      "In the ongoing GenAID project, I developed a user-friendly mobile application using the React Native framework. This application includes features such as profile creation and speech-to-text functionality, catering to diverse audiences. I implemented CI/CD pipelines leveraging Jenkins and GitHub to ensure automated testing and deployment processes for enhanced reliability and scalability.",
    tags: [
      {
        title: "React Native",
        color: "blue-text-gradient",
      },
      {
        title: "Jenkins",
        color: "green-text-gradient",
      },
      {
        title: "Database Management",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  ];
  
  export { services, technologies, experiences, testimonials, projects };