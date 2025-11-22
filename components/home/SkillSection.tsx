"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Layout,
  Server,
  Settings,
  Sparkles,
  Users,
  Cloud,
  Briefcase,
  Layers,
  Terminal,
  Code2,
  Cpu,
  Globe,
  MessageSquare,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#61DAFB]">
    <ellipse
      cx="12"
      cy="12"
      rx="3"
      ry="8"
      transform="rotate(45 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="3"
      ry="8"
      transform="rotate(-45 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="3"
      ry="8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const NextJsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 text-black dark:text-white"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 9V15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 15V9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#3178C6]">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 16V12H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 16C14 16 14.5 16 15 16C16 16 16.5 15.5 16.5 15C16.5 14.5 16 14.25 15.5 14.25C15 14.25 14.5 14 14.5 13.5C14.5 13 15 12.5 15.5 12.5C16 12.5 16.5 12.5 16.5 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#02569B]">
    <path d="M14 2L5 11L8 14L21 2H14Z" fill="currentColor" />
    <path d="M14 22L5 13L8 10L21 22H14Z" fill="currentColor" />
    <path
      d="M11.5 13.5L14.5 16.5L18 13L15 10L11.5 13.5Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#4FC08D]">
    <path d="M12 22L2 4H5L12 16L19 4H22L12 22Z" fill="currentColor" />
    <path d="M12 16.5L6.5 6H9.5L12 11L14.5 6H17.5L12 16.5Z" fill="#35495E" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#38B2AC]">
    <path
      d="M7 17C4 17 2 15 2 12C2 8 5 6 8 6C9.5 6 11 6.5 12 7.5C13 6.5 14.5 6 16 6C19 6 22 8 22 12C22 16 19 18 16 18C14.5 18 13 17.5 12 16.5C11 17.5 9.5 18 8 18C6 18 4.5 17 4 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#00ADD8]">
    <path
      d="M4 12C4 8.5 6 6 10 6H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 18C6 18 4 15.5 4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M19 14C20.5 14 21 13 21 12C21 11 20 9.5 18.5 9.5C17.5 9.5 16.5 10 16.5 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16.5 14.5C16.5 14.5 17.5 15 18.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#339933]">
    <path
      d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12L18 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12L6 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#2496ED]">
    <path
      d="M4 13H6V15H4V13ZM7 13H9V15H7V13ZM10 13H12V15H10V13ZM4 10H6V12H4V10ZM7 10H9V12H7V10ZM10 10H12V12H10V10ZM13 10H15V12H13V10ZM7 7H9V9H7V7ZM10 7H12V9H10V7Z"
      fill="currentColor"
    />
    <path
      d="M2 15V16C2 19 5 20 12 20C19 20 22 19 22 16V14C22 14 20 16 12 16C4 16 2 14 2 14V15Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

// --- TYPES ---

type SkillCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Tools"
  | "Soft Skills";

interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: ReactNode;
  level: "Expert" | "Advanced" | "Intermediate";
  description: string;
  proficiency: number;
  years: number;
  projects: number;
}

// --- DATA ---

const skills: Skill[] = [
  // --- FRONTEND ---
  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: <ReactIcon />,
    level: "Expert",
    description: "Component-based UI library",
    proficiency: 95,
    years: 4,
    projects: 25,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: <NextJsIcon />,
    level: "Expert",
    description: "App Router & Server Components",
    proficiency: 92,
    years: 3,
    projects: 15,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "Frontend",
    icon: <VueIcon />,
    level: "Advanced",
    description: "Progressive JavaScript Framework",
    proficiency: 85,
    years: 2,
    projects: 10,
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Frontend",
    icon: <FlutterIcon />,
    level: "Advanced",
    description: "Cross-platform mobile apps",
    proficiency: 88,
    years: 2,
    projects: 8,
  },
  {
    id: "dart",
    name: "Dart",
    category: "Frontend",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: "Advanced",
    description: "Optimized for UI",
    proficiency: 85,
    years: 2,
    projects: 8,
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    icon: <Globe className="w-8 h-8 text-orange-600" />,
    level: "Expert",
    description: "Semantic markup structure",
    proficiency: 100,
    years: 5,
    projects: 50,
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    level: "Expert",
    description: "Modern layout & animations",
    proficiency: 98,
    years: 5,
    projects: 50,
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    icon: <Code2 className="w-8 h-8 text-yellow-500" />,
    level: "Expert",
    description: "ES6+ Asynchronous programming",
    proficiency: 95,
    years: 5,
    projects: 40,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <TailwindIcon />,
    level: "Expert",
    description: "Utility-first CSS framework",
    proficiency: 98,
    years: 3,
    projects: 30,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-purple-600" />,
    level: "Expert",
    description: "Responsive grid system",
    proficiency: 95,
    years: 4,
    projects: 20,
  },

  // --- BACKEND ---
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: <NodeIcon />,
    level: "Expert",
    description: "JavaScript runtime",
    proficiency: 92,
    years: 4,
    projects: 30,
  },
  {
    id: "golang",
    name: "Golang",
    category: "Backend",
    icon: <GoIcon />,
    level: "Intermediate",
    description: "High-performance systems",
    proficiency: 75,
    years: 1,
    projects: 4,
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    icon: <Server className="w-8 h-8 text-gray-500" />,
    level: "Expert",
    description: "Minimalist web framework",
    proficiency: 95,
    years: 4,
    projects: 25,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Backend",
    icon: <Server className="w-8 h-8 text-red-600" />,
    level: "Advanced",
    description: "Enterprise-grade Node framework",
    proficiency: 88,
    years: 2,
    projects: 12,
  },

  // --- DATABASE ---
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    level: "Advanced",
    description: "Relational SQL Database",
    proficiency: 88,
    years: 3,
    projects: 15,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: <Database className="w-8 h-8 text-green-500" />,
    level: "Expert",
    description: "NoSQL Document Store",
    proficiency: 92,
    years: 4,
    projects: 20,
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    level: "Advanced",
    description: "Relational Database",
    proficiency: 85,
    years: 4,
    projects: 18,
  },
  {
    id: "neondb",
    name: "NeonDB",
    category: "Database",
    icon: <Cloud className="w-8 h-8 text-emerald-400" />,
    level: "Intermediate",
    description: "Serverless Postgres",
    proficiency: 80,
    years: 1,
    projects: 5,
  },
  {
    id: "mariadb",
    name: "MariaDB",
    category: "Database",
    icon: <Database className="w-8 h-8 text-brown-400" />,
    level: "Advanced",
    description: "Open Source SQL",
    proficiency: 85,
    years: 3,
    projects: 10,
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Database",
    icon: <Cloud className="w-8 h-8 text-yellow-500" />,
    level: "Expert",
    description: "Backend-as-a-Service",
    proficiency: 90,
    years: 3,
    projects: 20,
  },
  {
    id: "firestore",
    name: "Firestore",
    category: "Database",
    icon: <Database className="w-8 h-8 text-orange-500" />,
    level: "Expert",
    description: "Real-time NoSQL",
    proficiency: 92,
    years: 3,
    projects: 15,
  },

  // --- DEVOPS ---
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    icon: <DockerIcon />,
    level: "Advanced",
    description: "Containerization",
    proficiency: 85,
    years: 2,
    projects: 10,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "DevOps",
    icon: <Settings className="w-8 h-8 text-gray-700" />,
    level: "Intermediate",
    description: "CI/CD Automation",
    proficiency: 70,
    years: 1,
    projects: 5,
  },
  {
    id: "linux",
    name: "Linux",
    category: "DevOps",
    icon: <Terminal className="w-8 h-8 text-black dark:text-white" />,
    level: "Advanced",
    description: "Server Management & Shell",
    proficiency: 82,
    years: 3,
    projects: 20,
  },
  {
    id: "aws",
    name: "AWS",
    category: "DevOps",
    icon: <Cloud className="w-8 h-8 text-orange-400" />,
    level: "Intermediate",
    description: "Cloud Infrastructure",
    proficiency: 75,
    years: 1,
    projects: 5,
  },

  // --- TOOLS ---
  {
    id: "typescript",
    name: "TypeScript",
    category: "Tools",
    icon: <TypeScriptIcon />,
    level: "Advanced",
    description: "Type-safety & tooling",
    proficiency: 88,
    years: 3,
    projects: 15,
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
    level: "Expert",
    description: "Version Control",
    proficiency: 95,
    years: 5,
    projects: 50,
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    level: "Advanced",
    description: "API Testing & Doc",
    proficiency: 90,
    years: 4,
    projects: 30,
  },

  // --- SOFT SKILLS ---
  {
    id: "communication",
    name: "Communication",
    category: "Soft Skills",
    icon: <Users className="w-8 h-8 text-purple-400" />,
    level: "Expert",
    description: "Cross-functional teamwork",
    proficiency: 98,
    years: 5,
    projects: 20,
  },
  {
    id: "mentoring",
    name: "Mentoring",
    category: "Soft Skills",
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    level: "Advanced",
    description: "Code reviews & guidance",
    proficiency: 85,
    years: 2,
    projects: 10,
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Soft Skills",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    level: "Expert",
    description: "Analytical thinking",
    proficiency: 95,
    years: 5,
    projects: 50,
  },
];

const categories: { name: SkillCategory; icon: ReactNode }[] = [
  { name: "All", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Frontend", icon: <Layout className="w-4 h-4" /> },
  { name: "Backend", icon: <Server className="w-4 h-4" /> },
  { name: "Database", icon: <Database className="w-4 h-4" /> },
  { name: "DevOps", icon: <Cloud className="w-4 h-4" /> },
  { name: "Tools", icon: <Settings className="w-4 h-4" /> },
  { name: "Soft Skills", icon: <Users className="w-4 h-4" /> },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 my-5 p-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === category.name
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md"
            )}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold",
                    skill.level === "Expert"
                      ? "bg-emerald-100 text-emerald-600"
                      : skill.level === "Advanced"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                  )}
                >
                  {skill.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {skill.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6 h-10 line-clamp-2">
                {skill.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">Proficiency</span>
                  <span className="text-gray-900 font-bold">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={cn(
                      "h-full rounded-full",
                      skill.level === "Expert"
                        ? "bg-emerald-500"
                        : skill.level === "Advanced"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>{skill.years}+ years</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>{skill.projects}+ projects</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default SkillsSection;
