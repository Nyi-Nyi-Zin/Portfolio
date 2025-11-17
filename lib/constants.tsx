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

export const aboutCardData = [
  {
    title: "Years Experience",
    value: "3+",
    icon: <BriefcaseBusiness color="red" size={48} />,
  },
  {
    title: "Projects Completed",
    value: "50+",
    icon: <Code color="blue" size={48} />,
  },
  {
    title: "Technologies",
    value: "15+",
    icon: <Zap color="green" size={48} />,
  },
  {
    title: "Certificates",
    value: "5+",
    icon: <ShieldCheck color="purple" size={48} />,
  },
];

export type NavLinkId = (typeof navLinks)[number]["id"];
