
import client2 from "./assets/irfan.jpg";
import client3 from "./assets/thiru.jpg";


import client6 from "./assets/ara.jpg";
import Port from "./assets/port.png";
import animationPortfolio from "./assets/anime.jpg";

import gym from "./assets/gym.jpg";
import terminalPortfolio from "./assets/terminal-portfolio-showcase.png";
import dynamicTerminal from "./assets/dynamic-terminal-portfolio.png";
import globalRelocate from "./assets/global-relocate.png";
import seamless from "./assets/seamless.png";
import { FaChartBar, FaCloud, FaPhoneAlt, FaMapMarkerAlt, FaUserCheck, FaHeadset, FaSyncAlt, FaLaptopCode, FaDatabase, FaServer, FaInstagram, FaGithub, FaPaintBrush, FaReact, FaNodeJs, FaFigma, FaLinkedin } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";
import { MdEmail, MdAnalytics } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiSwift, SiKotlin, SiPostman, SiXcode, SiFlutter, SiAdobexd, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiHtml5, SiSvelte, SiPrismic, SiPowershell } from "react-icons/si";
import { TbBrandReactNative, TbDeviceMobileCode } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { IoShieldCheckmark } from "react-icons/io5";

export const tabs = [
    {name:"About",id:'about'},
     {name:"Services",id:'services'},
    {name:"Skills",id:'skill'},
   
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title: "Expert Web Development",
    icon: <FaUserCheck/>,
    link: "",
  },
  {
    title: "SEO-Driven Strategies",
    icon: <FaChartBar/>,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <FaHeadset/>,
    link: "",
  },
  {
    title: "Creative Problem Solving",
    icon: <FaSyncAlt/>,
    link: "",
  },
  {
    title: "Flexible Development Process",
    icon: <FaLaptopCode/>,
    link: "",
  },
  {
    title: "Cybersecurity Focus",
    icon: <IoShieldCheckmark/>,
    link: "",
  },
  {
    title: "Always Learning & Improving",
    icon: <TfiWrite/>,
    link: "",
  },
  {
    title: "Teamwork & Transparent Communication",
    icon: <FaHandsHelping/>,
    link: "",
  },
]

export const services = [
  {
    name: "Mobile App Development",
    icon: <TbDeviceMobileCode/>,
    description: `I develop cross platform mobile applications that provide seamless user experiences 
    across different devices. Leveraging versatile development frameworks, I craft seamless, high-performance 
    applications that deliver an exceptional user experience on both iOS and Android platforms.`,
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode/>,
    description: `We enhance your online visibility through keyword research, technical SEO, and on-page strategies to drive organic traffic and boost your search rankings effectively.`,
  },
  {
    name: "SEO Optimization",
    icon: <IoShieldCheckmark/>,
    description: `I implement robust security measures to protect your digital assets from potential threats. 
    My expertise in cybersecurity ensures that your applications and systems are fortified against 
    vulnerabilities, giving you peace of mind in an increasingly digital world.`,
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush/>,
    description: `I create intuitive and visually appealing user interfaces that enhance user experience. 
    By combining aesthetics with functionality, I ensure your digital products not only look great but also 
    provide seamless interaction for your users.`,
  },
  {
    name: "Content Creation",
    icon: <TfiWrite/>,
    description: `I craft compelling digital content that engages your audience and strengthens your brand. 
    Whether it's blog posts, social media content, or technical documentation, I ensure your message is 
    clear, concise, and impactful.`,
  },
  
  {
    name: "API Development",
    icon: <FaServer/>,
    description: `I create robust, well documented APIs that power seamless communication between different 
    software systems. Whether RESTful or GraphQL, my APIs are designed for efficiency, scalability, and ease of integration.`,
  },
  
  
]

export const skills = [
  {
    title: "App Development",
    data: [
      {
        skill: "Flutter",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
      {
        skill: "iOS (Swift)",
        level: "Experienced",
      },
      {
        skill: "Android (Kotlin)",
        level: "Experienced",
      },
      {
        skill: "Xcode",
        level: "Experienced",
      },
      {
        skill: "Android Studio",
        level: "Experienced",
      },
    ]
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "TypeScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
      },
      {
        skill: "Vue.js",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
      },
      {
        skill: "Express.js",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "PostgreSQL",
        level: "Intermediate",
      },
      {
        skill: "PHP",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Cybersecurity",
    data: [
      {
        skill: "Network Security",
        level: "Experienced",
      },
      {
        skill: "Penetration Testing",
        level: "Experienced",
      },
      {
        skill: "Security Auditing",
        level: "Experienced",
      },
      {
        skill: "Digital Forensics",
        level: "Experienced",
      },
      {
        skill: "Threat Modeling",
        level: "Intermediate",
      },
      {
        skill: "Incident Response",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Cloud & DevOps",
    data: [
      {
        skill: "AWS",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "Kubernetes",
        level: "Basic",
      },
      {
        skill: "CI/CD Pipelines",
        level: "Intermediate",
      },
      {
        skill: "Azure",
        level: "Basic",
      },
      {
        skill: "Google Cloud Platform",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Database Management",
    data: [
      {
        skill: "SQL",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "Redis",
        level: "Basic",
      },
      {
        skill: "Database Optimization",
        level: "Intermediate",
      },
      {
        skill: "Data Modeling",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "API Development",
    data: [
      {
        skill: "RESTful APIs",
        level: "Experienced",
      },
      {
        skill: "GraphQL",
        level: "Intermediate",
      },
      {
        skill: "Swagger",
        level: "Experienced",
      },
      {
        skill: "OpenAPI",
        level: "Intermediate",
      },
      {
        skill: "API Security",
        level: "Experienced",
      },
      {
        skill: "Postman",
        level: "Experienced",
      },
    ]
  },
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "Adobe XD",
        level: "Intermediate",
      },
      {
        skill: "InVision",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "Emerging Technologies",
    data: [
      {
        skill: "Machine Learning",
        level: "Intermediate",
      },
      {
        skill: "IoT Development",
        level: "Intermediate",
      },
      {
        skill: "Serverless Architecture",
        level: "Intermediate",
      },
      {
        skill: "Progressive Web Apps",
        level: "Experienced",
      },
    ]
  },
]

export const projects = [
  // {
  //   id: 1,
  //   title: 'Zenode - Web3 Developer Platform',
  //   image: 'https://github.com/Jossyboydgenius/Zenode/blob/main/public/active-challenges.png?raw=true',
  //   category: "Web",
  //   description: `Level up your coding journey with Zenode - where Web3 contributions become fun and rewarding. 
  //   Our gamified platform transforms open-source development into an exciting adventure with XP points, 
  //   daily streaks, and loot boxes. Join 10,000+ active developers, contribute to 50,000+ pull requests, 
  //   and earn onchain credentials while mastering Solidity and Rust. Track your progress, compete on 
  //   global leaderboards, and land your dream Web3 job 4x faster.`,
  //   demoLink: "https://zenode.netlify.app/",
  //   stack: [
  //     {
  //       name: "Next.js",
  //       icon: <SiNextdotjs/>,
  //       iconColor: "black",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: <SiTypescript/>,
  //       iconColor: "blue",
  //     },
  //     {
  //       name: "Tailwind",
  //       icon: <SiTailwindcss/>,
  //       iconColor: "lightblue",
  //     },
  //   ]
  // },
  // {
  //   id: 2,
  //   title: 'Fizzi - 3D E-commerce',
  //   image: 'https://github.com/user-attachments/assets/d8285ccb-737f-4f49-b85a-b3c32c111166',
  //   category: "Web",
  //   description: `Experience the future of beverage shopping with Fizzi's immersive 3D e-commerce platform. 
  //   Discover gut-friendly sodas perfected with real fruit juice, prebiotics, and probiotics. Featuring 
  //   stunning 3D product visualization powered by GSAP animations, explore five delicious flavors with just 
  //   3-5g sugar and 9g fiber. Our innovative interface makes shopping for healthier alternatives an engaging 
  //   and interactive experience.`,
  //   demoLink: "https://fizzii.vercel.app/",
  //   stack: [
  //     {
  //       name: "Next.js",
  //       icon: <SiNextdotjs/>,
  //       iconColor: "black",
  //     },
  //     {
  //       name: "GSAP",
  //       icon: <SiJavascript/>,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: <SiTypescript/>,
  //       iconColor: "blue",
  //     },
  //   ]
  // },
  // {
  //   id: 3,
  //   title: 'Seamless Project Management',
  //   image: seamless,
  //   category: "Web",
  //   description: `Take control of your projects with Seamless - the ultimate project management solution. 
  //   From real-time communication to financial transparency, we've revolutionized project oversight. 
  //   Features include centralized management, seamless communication, and comprehensive financial tracking. 
  //   Dream it, build it, and make it happen effortlessly with Seamless.`,
  //   demoLink: "https://buildwithseamless.co/",
  //   stack: [
  //     {
  //       name: "ReactJs",
  //       icon: <FaReact/>,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "Figma",
  //       icon: <FaFigma/>,
  //       iconColor: "orangered",
  //     },
  //   ]
  // },
  // {
  //   id: 4,
  //   title: 'Global Relocate',
  //   image: globalRelocate,
  //   category: "Web",
  //   description: `Your AI-powered platform for seamless relocation, legal guidance, and global living. 
  //   Compare countries side by side, analyzing key factors like cost of living, tax rates, and quality of life. 
  //   Leverage smart AI-powered insights and connect with like-minded global nomads through forums and groups. 
  //   Making international relocation decisions has never been easier.`,
  //   demoLink: "https://globalrelocatetest.netlify.app/",
  //   stack: [
  //     {
  //       name: "Vite",
  //       icon: <SiJavascript/>,
  //       iconColor: "yellow",
  //     },
  //     {
  //       name: "Figma",
  //       icon: <FaFigma/>,
  //       iconColor: "orangered",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress/>,
  //     },
  //   ]
  // },
  // {
  //   id: 5,
  //   title: 'Blog website',
  //   image: blogWebsite,
  //   category: "Web",
  //   description: `Dive into the world of innovation with TechInsight Blog. Our platform offers in-depth articles on startups, cutting-edge technology, AI advancements, app development, and cybersecurity. Stay informed and ahead of the curve in the rapidly evolving tech landscape.`,
  //   demoLink: "https://github.com/Jossyboydgenius/Blog-website",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <FaReact/>,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       icon: <SiTailwindcss/>,
  //       iconColor: "lightblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs/>,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "MySQL",
  //       icon: <SiCss3/>,
  //       iconColor: "orange",
  //     },
  //   ],
  // },
  {
    id: 6,
    title: 'Anime Tracker',
    image: animationPortfolio,
    category: "Web",
    description: `Experience the future of web design with this immersive 3D animation portfolio. Showcasing cutting-edge techniques and creative prowess, this website pushes the boundaries of what's possible in web-based 3D animations.`,
    demoLink: "https://aniflows.live/",
    stack: [
      {
        name: "TypeScript",
        icon: <SiTypescript/>,
        iconColor: "blue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        iconColor: "yellow",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss/>,
        iconColor: "lightblue",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs/>,
        iconColor: "black",
      },
      {
        name: "Prismic",
        icon: <SiPrismic/>,
        iconColor: "purple",
      },
    ],
  },
  // {
  //   id: 7,
  //   title: 'Interactive Terminal Website',
  //   image: interactiveTerminal,
  //   category: "Web",
  //   description: `Step into the world of command-line interfaces with this unique terminal-themed website. Navigate through content using familiar terminal commands, offering a nostalgic yet innovative user experience for tech enthusiasts.`,
  //   demoLink: "https://techapostleterminal.vercel.app/",
  //   stack: [
  //     {
  //       name: "TypeScript",
  //       icon: <SiTypescript/>,
  //       iconColor: "blue",
  //     },
  //     {
  //       name: "JavaScript",
  //       icon: <SiJavascript/>,
  //       iconColor: "yellow",
  //     },
  //     {
  //       name: "CSS",
  //       icon: <SiCss3/>,
  //       iconColor: "lightblue",
  //     },
  //     {
  //       name: "HTML",
  //       icon: <SiHtml5/>,
  //       iconColor: "orange",
  //     },
  //     {
  //       name: "Svelte",
  //       icon: <SiSvelte/>,
  //       iconColor: "red",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Terminal Portfolio Showcase',
  //   image: terminalPortfolio,
  //   category: "Web",
  //   description: `Discover a unique approach to personal branding with this terminal-themed portfolio website. Presenting professional accomplishments and skills through a command-line interface, it offers an engaging and memorable user experience for fellow developers and tech recruiters.`,
  //   demoLink: "https://aj-terminalportfolio.vercel.app/",
  //   stack: [
  //     {
  //       name: "TypeScript",
  //       icon: <SiTypescript/>,
  //       iconColor: "blue",
  //     },
  //     {
  //       name: "JavaScript",
  //       icon: <SiJavascript/>,
  //       iconColor: "yellow",
  //     },
  //     {
  //       name: "CSS",
  //       icon: <SiCss3/>,
  //       iconColor: "lightblue",
  //     },
  //     {
  //       name: "Shell",
  //       icon: <SiPowershell/>,
  //       iconColor: "black",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Dynamic Terminal Portfolio',
  //   image: dynamicTerminal,
  //   category: "Web",
  //   description: `Experience a blend of nostalgia and innovation with this animated terminal-themed portfolio website. Featuring dynamic animations and interactive elements, this project showcases technical skills and creativity in a unique, engaging format.`,
  //   demoLink: "https://awejosephterminal.vercel.app/",
  //   stack: [
  //     {
  //       name: "JavaScript",
  //       icon: <SiJavascript/>,
  //       iconColor: "yellow",
  //     },
  //     {
  //       name: "CSS",
  //       icon: <SiCss3/>,
  //       iconColor: "blue",
  //     },
  //     {
  //       name: "HTML",
  //       icon: <SiHtml5/>,
  //       iconColor: "orange",
  //     },
  //   ],
  // },
  // { 
  //   id: 10,
  //   title: 'AI Powered School',
  //   image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
  //   category: "UI/UX",
  //   description: `Imagine a learning platform where AI becomes your personal tutor. Our School UI Design 
  //   revolutionizes education, offering an intuitive interface that adapts to each student's unique learning style. 
  //   Smart features like personalized study plans and real time progress tracking make learning engaging and 
  //   efficient. Step into the future of education where technology and pedagogy blend seamlessly.`,
  //   demoLink: "https://github.com/Jossyboydgenius/Wisdom-Wizard-GPT.git",
  //   stack: [
  //     {
  //       name: "XD",
  //       icon: <SiAdobexd/>,
  //       iconColor: "skyblue",
  //     },
  //   ]
  // },
  // {
  //   id: 11,
  //   title: 'Robotic Engineering Web Application',
  //   image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
  //   category: "Web",
  //   description: `Step into the world of tomorrow with our Robotic Engineering Web Application. 
  //   This platform is where imagination meets innovation, allowing engineers to design, simulate, 
  //   and optimize robotic systems with unprecedented ease. From drag and drop component assembly 
  //   to real time 3D visualization, we're not just building robots, we're crafting the future of automation.`,
  //   demoLink: "https://wakatime.com/@TechApostle",
  //   stack: [
  //     {
  //       name: "ReactJs",
  //       icon: <FaReact/>,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs/>,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress/>,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb/>,
  //       iconColor: "limegreen",
  //     },
  //   ]
  // },
  // {
  //   id: 12,
  //   title: 'Project Management application',
  //   image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
  //   category: "Apps",
  //   description: `Say goodbye to chaotic project management and hello to streamlined success. 
  //   Our intuitive Project Management application turns complex workflows into a breeze. With 
  //   real time collaboration, customizable dashboards, and intelligent task prioritization, 
  //   your team's productivity will soar to new heights. It's not just about managing projects,
  //   it's about empowering teams to achieve greatness.`,
  //   demoLink: "https://github.com/Jossyboydgenius/Blog-App.git",
  //   stack: [
  //     {
  //       name: "React Native",
  //       icon: <TbBrandReactNative/>,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs/>,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress/>,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb/>,
  //       iconColor: "limegreen",
  //     },
  //   ]
  // },
  {
    id: 13,
    title: 'User Portfolio',
    image: Port,
    category: "Portfolio",
    description: `Banking reimagined for the digital age. Our Mobile Bank app design puts financial 
    power at your fingertips with a sleek, intuitive interface. From seamless transactions to 
    personalized financial insights, every tap brings you closer to your financial goals. It's not 
    just a banking app, it's your personal financial companion, available 24/7.`,
    demoLink: "",
    stack: [
      {
        name: "Figma",
        icon: <FaFigma/>,
        iconColor: "orangered",
      },
      {
        name: "ReactJs",
         icon: <FaReact/>,
       iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        iconColor: "yellow",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss/>,
        iconColor: "lightblue",
      },
      
    ]
  },
  {
    id: 14,
    title: 'Fitness Tracker',
    image: gym,
    category: "Apps",
    description: `Learning meets excitement in our innovative Quiz App. Designed to make knowledge 
    acquisition addictive, this app turns every question into an opportunity for growth. With 
    adaptive difficulty levels, multimedia content, and social learning features, it transforms 
    the way people engage with information. Get ready to quiz, learn, and grow, all at the tap of a screen.`,
    demoLink: "",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative/>,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs/>,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb/>,
        iconColor: "limegreen",
      },
    ]
  },
]

export const clients = [
  {
    image: client6,
    name: 'Aravind J',
    position: 'Client',
    review: `Working with Brook Bytes was a game changer for our startup. Their technical expertise and innovative thinking turned our vision into a scalable, high-performing platform. What stood out most was their foresight—proactively identifying and resolving potential security vulnerabilities before they became issues. A reliable team that consistently exceeds expectations.`
  },
  {
    image: client2,
    name: 'Irfan',
    position: 'Client',
    review: `I can't speak highly enough of Brook Bytes' work. They transformed our outdated website into a modern, user-friendly interface that has significantly boosted customer engagement. Their attention to detail and commitment to delivering a secure, high-performance solution was evident throughout the entire project.`
  },
  {
    image: client3,
    name: 'Thiru K',
    position: 'Client',
    review: `Brook Bytes’ expertise in both frontend and backend development was instrumental in building our complex web application. They handled technical challenges with confidence and kept us updated every step of the way. Their cybersecurity insights added tremendous value to the project. Highly recommended!`
  },
  // {
  //   image: client4,
  //   name: 'Emily Rodriguez',
  //   position: 'COO of MobileFirst Inc.',
  //   review: `We hired Brook Bytes to develop a mobile app for our business, and the results exceeded our expectations. Their expertise in Flutter delivered a smooth, responsive app that our users love. Additionally, their proactive approach to security gave us full confidence in the integrity of our product.`
  // },
  // {
  //   image: client5,
  //   name: 'David Nwosu',
  //   position: 'IT Director at AfriBank',
  //   review: `Awe Joseph's technical skills are matched only by his excellent communication and 
  //            project management abilities. He took the time to understand our business needs and 
  //            delivered a solution that not only met but exceeded our requirements. His cybersecurity 
  //            expertise was an added bonus that ensured our peace of mind.`
  // },
];

export const contactOptions = [
  {
    title:"Email",
    value:"brookbytes@gmail.com",
    icon:<MdEmail />,
  },
  {
    title:"Phone Number",
    value:"6374668805",
    icon:<FaPhoneAlt/>,
  },
  {
    title:"Address",
    value:"Chennai,TN",
    icon:<FaMapMarkerAlt/>,
  },
]

export const socialHandles = [   
    {
      name:"LinkedIn",
      icon:<FaLinkedin/>,
      link:"https://www.linkedin.com/company/brook-bytes/?viewAsMember=true",
    },
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"https://www.instagram.com/brookbytes.in/",
    },
    // {
    //   name:"Wakatime",
    //   icon:<SiWakatime/>,
    //   link:"https://wakatime.com/@TechApostle",
    // },
    
];

export const productions = [
  {
    id: 1,
    title: 'Production Alpha',
    image: 'https://via.placeholder.com/300x200.png?text=Production+Alpha',
    category: "Category A",
    description: `Description for Production Alpha. This is a sample production project.`,
    demoLink: "https://example.com/production-alpha",
    stack: [
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
    ]
  },
  {
    id: 2,
    title: 'Production Beta',
    image: 'https://via.placeholder.com/300x200.png?text=Production+Beta',
    category: "Category B",
    description: `Description for Production Beta. This is another sample production project.`,
    demoLink: "https://example.com/production-beta",
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        iconColor: "black",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        iconColor: "blue",
      },
    ]
  },
]

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Us",id:'about'},
      {name:"",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]
