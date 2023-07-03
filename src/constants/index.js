import {
  mobile,
  backend,
  creator,
  web,
  canva,
  css,
  eth,
  figma,
  firebase,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  polygon,
  python,
  reactjs,
  redux,
  solana,
  solidity,
  tailwind,
  typescript,
  threejs,
  wwv,
  solblocks,
  spacefalcon,
  carrent,
  jobit,
  tripguide,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Solidity",
    icon: solidity,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "canva",
  //   icon: canva,
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
