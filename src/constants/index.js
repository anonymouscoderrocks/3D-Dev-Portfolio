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
  python,
  wwv,
  solblocks,
  spacefalcon,
  avaxroyale,
  clothifyai,
  githubvis,
  musicanim,
  promptpad,
  webflix,
  whatsappchat,
  threejs,
  eth,
  polygon,
  solidity,
  solana,
  firebase,
  github,
  linkedin_logo,
  twitter,
  instagram,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Exp",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    icon: linkedin_logo,
    url: "https://www.linkedin.com/in/gauravraj0510/",
  },
  {
    title: "Github",
    icon: github,
    url: "https://github.com/gauravraj0510/",
  },
  {
    title: "Twitter",
    icon: twitter,
    url: "https://twitter.com/gauravraj0510/",
  },
  {
    title: "Instagram",
    icon: instagram,
    url: "https://instagram.com/gauravraj0510/",
  },
];

const services = [
  {
    title: "Web/App Development",
    icon: web,
  },
  {
    title: "Blockchain Development",
    icon: mobile,
  },
  {
    title: "Backend Developement",
    icon: backend,
  },
  {
    title: "Automation/Tools Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Ethereum",
    icon: eth,
  },
  {
    name: "Polygon",
    icon: polygon,
  },
  {
    name: "Solana",
    icon: solana,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Product Developer",
    company_name: "Walsh Wealth Ventures",
    icon: wwv,
    url: "https://wwventures.io/",
    iconBg: "#5a24b2",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js/Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and research team to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensuring scalability and performance of tools developed for the company.",
      "Participating in code reviews and providing constructive feedback to other team members.",
    ],
  },
  {
    title: "Co-founder & COO",
    company_name: "SolBlocks.tech",
    icon: solblocks,
    url: "https://solblocks.tech/",
    iconBg: "#fdeb4b",
    date: "Oct 2021 - Present",
    points: [
      "Managing a team of over 19 employees including developers, designers, content writers, and artists working remotely.",
      "Oversaw operations, including team meetings, audits and led the team to deliver more than 100 projects within 1 year.",
      "Proposed ambitious company plans, and long-term goals toward increasing client base and revenue generation.",
      "Communicating with clients on weekly basis for the continuous maintenance of all existing projects.",
    ],
  },
  {
    title: "Technical Head",
    company_name: "Space Falcon",
    icon: spacefalcon,
    url: "https://spacefalcon.io/",
    iconBg: "#099775",
    date: "Dec 2021 - Mar 2022",
    points: [
      "Worked on roadmap formation and NFT project execution plans with strict deadlines and risk management.",
      "Fulfilled all project technical requirements by understanding the needs, with efficient coding practices.",
      "Developed the Mint Website and Landing page of the NFT project using ReactJS, Metaplex, and Rust programming.",
      "Contributed to Tokenomics and developed rarity distribution of assets & airdrop mechanism. ",
      "Deployed of minting smart contract and website for the Company's NFT project using JavaScript and Rust.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gaurav is not only good at providing quality content but what attracts me the most is his responsiveness. I keep returning to Gaurav for all my web development requirement and he is brilliant at it. Keep up the good work!",
    name: "Aditya Sen Gupta",
    designation: "CEO & MD",
    company: "NXT Gen Vidya LLP",
    image: "https://gauravraj0510.github.io/img/testimonials/aditya.jpg",
  },
  {
    testimonial:
      "I really appreciate the level of professionalism, Gaurav had done a tremendous job with this website. would recommend him for any work related to handling, maintaining, and developing the website. looking forward to work again with him!",
    name: "Adarsh Tiwari",
    designation: "CMO",
    company: "Strive.tech",
    image: "https://gauravraj0510.github.io/img/testimonials/adarsh.jpg",
  },
  {
    testimonial:
      "I worked with Raj on a complex webapp project, and I must say, his expertise and dedication exceeded my expectations. It was evident that he possessed a deep understanding of the technologies and best practices in the field.",
    name: "Surbhi Arora",
    designation: "CEO",
    company: "Business Summits",
    image: "https://gauravraj0510.github.io/img/testimonials/surbhi.jpg",
  },
];

const projects = [
  {
    name: "AVAX Royale",
    description:
      "AVAX Royale is an exciting web3 game that combines the power of blockchain technology with immersive gameplay. Developed using Solidity and Next.js, this game offers players an engaging experience in the world of decentralized finance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: avaxroyale,
    source_code_link: "https://github.com/gauravraj0510/AVAX-Royale",
    deployed_link: "https://avax-royale-raj510.vercel.app/",
  },
  {
    name: "Clothify AI",
    description:
      "Innovative 3D AI Tshirt Design Generation website, crafted using React and harnessing the power of OpenAI. This cutting-edge platform allows users to effortlessly create unique and eye-catching Tshirt designs with the help of artificial intelligence.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: clothifyai,
    source_code_link: "https://github.com/gauravraj0510/Clothify-AI",
    deployed_link: "https://aiclothify-raj510.vercel.app/",
  },
  {
    name: "GitHub Viz",
    description:
      "Dynamic and informative data visualization website created using React and leveraging the GitHub API. This website offers users a visually compelling way to explore and understand data related to GitHub repositories and their activities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: githubvis,
    source_code_link:
      "https://github.com/gauravraj0510/Github-API-and-Visualizations",
    deployed_link: "https://github-visualizations-raj510.vercel.app/",
  },
  {
    name: "WebFlix",
    description:
      "A captivating Netflix clone website developed using React and powered by Styled Components. This website offers users a thrilling streaming experience reminiscent of the popular streaming platform, Netflix.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "netflix",
        color: "green-text-gradient",
      },
      {
        name: "clone",
        color: "pink-text-gradient",
      },
    ],
    image: webflix,
    source_code_link: "https://github.com/gauravraj0510/WebFlix",
    deployed_link: "https://webflix-by-raj.netlify.app/",
  },
  {
    name: "WhatsApp Viz",
    description:
      "WhatsApp Viz developed using Python and Streamlit. It offers users an interactive platform to analyze and visualize their WhatsApp chat data, providing valuable insights into their patterns and trends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "data-analytics",
        color: "pink-text-gradient",
      },
    ],
    image: whatsappchat,
    source_code_link:
      "https://github.com/gauravraj0510/WhatsApp-Chat-Data-Analysis",
    deployed_link: "https://whatsapp-chat-analysis-raj510.streamlit.app/",
  },
  {
    name: "Music & Animation",
    description:
      "Dynamic music and animation maker website created using HTML and JavaScript. This website offers users an exciting platform to unleash their creativity by combining the art of music animations.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "animationjs",
        color: "pink-text-gradient",
      },
    ],
    image: musicanim,
    source_code_link:
      "https://github.com/gauravraj0510/Music-and-Animation-Maker",
    deployed_link: "https://gauravraj0510.github.io/Music-and-Animation-Maker/",
  },
];

export {
  services,
  socialLinks,
  technologies,
  experiences,
  testimonials,
  projects,
};
