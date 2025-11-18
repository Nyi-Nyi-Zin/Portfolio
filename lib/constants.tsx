import { BriefcaseBusiness, Code, ShieldCheck, Zap } from "lucide-react";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skill", label: "Skill" },
  { id: "service", label: "Service" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const skills = [
  "Golang",
  "React js",
  "Java Script",
  "Tailwind CSS",
  "Next js",
  "Bootstrap",
  "Flutter",
  "Dart",
  "Framer Motion",
  "Redux",
  "Zustand",
  "Type Script",
  "Node js",
  "Express.js",
  "Nest js",
  "Gin",
  "Fiber",
  "Echo",
  "Bcrypt",
  "OAuth",
  "MySQL",
  "Postgresql",
  "MariaDB",
  "MongoDB",
  "NeonDB",
  "Firebase",
  "Firestore",
  "Git",
  "GitHub",
  "Linux",
  "Husky",
  "Docker",
  "Jenkin",
  "Progressive Web Apps",
];

export type IconName = "briefcase" | "code" | "zap" | "shield";

export const aboutCardData = [
  {
    title: "Years Experience",
    value: "3+",
    icon: "briefcase" as IconName,
    color: "red",
  },
  {
    title: "Projects Completed",
    value: "50+",
    icon: "code" as IconName,
    color: "blue",
  },
  {
    title: "Technologies",
    value: "15+",
    icon: "zap" as IconName,
    color: "green",
  },
  {
    title: "Certificates",
    value: "5+",
    icon: "shield" as IconName,
    color: "purple",
  },
] as const;

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Wann Saung",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "Nov 2025 - Present",
    location: "Yangon Region, Myanmar • Remote",
    keyAchievements: [
      "Developed enterprise web applications using Angular and Spring Boot",
      "Built scalable APIs with Node.js and Java Spring framework",
      "Designed and optimized relational databases (MySQL, PostgreSQL)",
      "Implemented secure authentication and authorization systems",
      "Integrated third-party services and APIs for enhanced functionality",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company: "Triosys",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "April 2025 - Nov 2025",
    location: "Yangon Region, Myanmar • Hybrid",
    keyAchievements: [
      "Developed enterprise web applications using Angular and Spring Boot",
      "Built scalable APIs with Node.js and Java Spring framework",
      "Designed and optimized relational databases (MySQL, PostgreSQL)",
      "Implemented secure authentication and authorization systems",
      "Integrated third-party services and APIs for enhanced functionality",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Domi Tech",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "Jan 2023 - Feb 2025",
    location: "Thandwe , Myanmar • Hybrid",
    keyAchievements: [
      "Developed enterprise web applications using Angular and Spring Boot",
      "Built scalable APIs with Node.js and Java Spring framework",
      "Designed and optimized relational databases (MySQL, PostgreSQL)",
      "Implemented secure authentication and authorization systems",
      "Integrated third-party services and APIs for enhanced functionality",
    ],
  },
];

export type NavLinkId = (typeof navLinks)[number]["id"];
