import { BlogPost } from "@/types/blogs";
import { z } from "zod";
import {
  Globe,
  Server,
  Smartphone,
  Database,
  Cloud,
  Code2,
  type LucideIcon,
} from "lucide-react";

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

export const CategoryEnum = z.enum([
  "frontend",
  "backend",
  "devops",
  "ai",
  "mobile",
  "database",
  "system design",
  "security",
  "testing",
] as const);

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
    value: "50+",
    icon: "zap" as IconName,
    color: "green",
  },
  {
    title: "Certificates",
    value: "3+",
    icon: "shield" as IconName,
    color: "purple",
  },
] as const;

export const experience = [
  {
    title: "Software Development Team Leader",
    company: "Wann Saung",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "Nov 2025 - Present",
    location: "Yangon Region, Myanmar • Remote",
    keyAchievements: [
      "Led software development team, conducted code reviews, ensured code quality and documentation across frontend and backend, and promoted knowledge sharing and best practices.",
      "Defined project architecture and workflow, created flow diagrams, documented project processes, and implemented project-wide technical guidelines and standards.",
      "Assigned tasks, tracked project progress, and coordinated across frontend, backend, and UI/UX teams to ensure timely and high-quality deliverables.",
      "Led UI/UX team, provided guidance and feedback, ensuring design consistency and user-friendly interfaces.",
    ],
  },
  {
    title: "Software Developer",
    company: "Triosys",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "April 2025 - Nov 2025",
    location: "Yangon Region, Myanmar • Hybrid",
    keyAchievements: [
      "Led full-cycle software development projects, including frontend architecture, backend systems, and system design.",
      "Built high-performance Next.js frontend with server components, dynamic imports, image optimization, PWA support, and secure authentication (JWT, RBAC, Zod validation).",
      "Implemented backend optimization across Golang, Express, NestJS, and Next.js: efficient database queries, caching strategies (Redis, HTTP caching), pagination, bulk operations.",
      "Improved reliability and observability with Sentry monitoring, error boundaries, retry logic, performance tracking, automated testing (Jest, Vitest), and CI/CD pipelines with Docker and Jenkins.",
      "Ensured security and performance best practices: rate limiting, input validation, CSRF/CSP protection, secure headers, and optimized data serialization.",
    ],
  },
  {
    title: "IT & Software Solutions Engineer",
    company: "Domi Tech",
    companyUrl:
      "https://www.linkedin.com/company/myanmar-information-technology-pte-ltd",
    period: "Jan 2023 - Feb 2025",
    location: "Thandwe , Myanmar • Onsite",
    keyAchievements: [
      "Provided hands-on IT support, repairing and maintaining computers, desktops, and mobile devices, and delivering software troubleshooting services.",
      "Installed and configured Wi-Fi networks and CCTV systems for homes and businesses.",
      "Transitioned into software development, starting with Flutter for cross-platform mobile applications.",
      "Developed web applications using Node.js and React, delivering client-focused software solutions.",
      "Collaborated on end-to-end projects, from frontend to backend, ensuring high-quality, scalable, and functional applications.",
      "Continuously improved technical skills by learning modern development tools, frameworks, and best practices, adapting quickly to new technologies.",
    ],
  },
];

export const tags = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "ai", label: "AI" },
  { value: "mobile", label: "Mobile" },
  { value: "database", label: "Database" },
  { value: "system design", label: "System Design" },
  { value: "security", label: "Security" },
  { value: "testing", label: "Testing" },
] as const;

export type TagValue = (typeof tags)[number]["value"];

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
};

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive web applications with Next.js, React, and cutting-edge technologies. SEO-optimized and performance-driven.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend Development",
    description:
      "Designing robust server-side architectures with Node.js, Golang, and Express.js. RESTful APIs, GraphQL, and microservices.",
    icon: Server,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using Flutter and React Native. Native-like performance with a single codebase.",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Database Design",
    description:
      "Expert database architecture with PostgreSQL, MySQL, MongoDB, and Firebase. Optimized queries and data modeling.",
    icon: Database,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, Docker containerization, and cloud deployments. Scalable infrastructure on AWS and Vercel.",
    icon: Cloud,
    gradient: "from-pink-500 to-rose-400",
  },
  {
    title: "API Integration",
    description:
      "Seamless third-party API integration, payment gateways, OAuth, and custom middleware development.",
    icon: Code2,
    gradient: "from-indigo-500 to-blue-400",
  },
];

// ── Projects Data ──
export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    slug: "price-changer",
    title: "Price Changer",
    description: `The Price Changer is a full-stack application designed to manage product price changes systematically. It consists of a backend API built with NestJS and a frontend web app using React, with PostgreSQL as the database and Prisma as the ORM.

Key Features
User Management: JWT-based authentication, role-based access control, user CRUD operations, and account status management.
Price Change Workflow: Bulk price change requests with approval process (request → approve/reject), audit logs, and tracking.
Item Management: Item import/export, stock synchronization, image uploads, and barcode scanner integration.
Additional Features: Excel import/export, responsive UI (Mantine + Tailwind CSS), API documentation (Swagger), Docker support, and CI/CD (Jenkins).`,
    image: "/projectImages/price-changer.png",
    techStack: [
      "Nest.js",
      "TypeScript",
      "Prisma ORM",
      "JWT",
      "Jest ",
      "React",
      "Vite",
      "Mantine",
      "Tailwind CSS",
      "Swagger",
      "Docker",
      "Jenkins",
      "PostgreSQL",
      "TanStack React Query",
      " React Hook Form",
      "Zod",
      "React Router Dom",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "educational-information-system",
    title: "Educational Information System",
    description: `A full-stack educational management platform built with three integrated parts:
Backend (Go API): Handles business logic, authentication, and data management for users, courses, content, and more using PostgreSQL, with support for background jobs and email notifications.
Admin Dashboard (React + TypeScript): A Vite-based interface for administrators to manage all platform data and operations via the API.
User Website (Next.js): A modern, responsive frontend for students and visitors to explore courses, instructors, and educational content.`,
    image: "/projectImages/educational-information.png",
    techStack: ["React.js", "React-Router-Dom", "Tailwind-css", "SMTP", "Vite"],
    liveUrl: "https://www.jca.com.mm/",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "company-website",
    title: "Company Website",
    description:
      "This project is a modern, single-page wedding invitation website built with React and Vite. It provides an interactive and visually appealing platform for sharing wedding details, showcasing the couple, displaying a photo gallery, and collecting guest RSVPs.",
    image: "/projectImages/company-website.png",
    techStack: ["React.js", "React-Router-Dom", "Tailwind-css", "SMTP", "Vite"],
    liveUrl: "https://www.triosys.info/",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "E-Commerce Web App is a full-stack, modern online shopping platform. It features a fast, interactive React frontend powered by Vite and a secure, scalable backend REST API built with Node.js, Express, and MongoDB. The application supports product and user management, shopping cart, secure authentication, media uploads, and order processing—making it a strong foundation for small businesses or teams launching an online store.",
    image: "/projectImages/ecommerce.png",
    techStack: [
      "React.js",
      "Vite ",
      "Redux Toolkit",
      "React Router DOM",
      "Tailwind CSS",
      "Ant Design",
      "Axios",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "bcrypt",
      "jsonwebtoken",
      "express-validator",
      "Cloudinary",
      "Multer",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/e-commerce-web-app",
  },
  {
    slug: "real-time-chat-app",
    title: "Real Time Chat App",
    description:
      "real-time-chat-app is a full-stack real-time messaging application built with a modern JavaScript stack. The application enables users to communicate instantly through various chat rooms or channels, supporting seamless live messaging, user authentication, and a user-friendly interface. The frontend is developed using React with Vite for fast builds and a modern development experience, enhanced by Tailwind CSS for rapid UI styling. The backend is powered by Express.js and Socket.IO for scalable, event-driven real-time communication, with MongoDB (via Mongoose) as the database layer.",
    image: "/projectImages/real-time-chat-app.png",
    techStack: [
      "React.js",
      "React-router-dom",
      "Tailwindcss",
      "Socket.io",
      "Vite",
      "Express.js",
      "Mongoose",
      "Mongodb",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/real-time-chat-app",
  },
  {
    slug: "face-mask-detection",
    title: "Face Mask Detection",
    description:
      "A Python-based Face Mask Detection system that leverages deep learning and computer vision techniques to automatically identify whether individuals in an image or video stream are wearing face masks. The model used for detection is custom-trained specifically for this project, ensuring robust and reliable performance in real-world scenarios such as CCTV monitoring, public safety systems, and workplace compliance.",
    image: "/projectImages/face-mask-detection.png",
    techStack: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "NumPy"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/face-mask-detection",
  },
  {
    slug: "task-management-web-app",
    title: "Task Management Web App",
    description:
      "This project is a full-stack Task Management Application consisting of two main parts: a TypeScript-based frontend (using Vite and React) and a TypeScript Node.js backend (using Express and Sequelize).",
    image: "/projectImages/task-mangement-app.png",
    techStack: [
      "React.js",
      "React-Redux",
      "Tanstack/react-query",
      "Zod",
      "Axios",
      "React-router-dom",
      "React-hook-form",
      "sonner",
      "vite",
      "Type-script",
      "Express.js",
      "Jsonwebtoken",
      "bcrypt",
      "Sequelize",
      "Mysql",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/task-management-app-frontend",
  },
  {
    slug: "face-recognition-system",
    title: "Face Recognition System",
    description:
      "The Face Recognition System is an advanced Python-based application designed to detect and recognize human faces in images or video streams. Leveraging state-of-the-art computer vision and machine learning techniques, it can be integrated into security, authentication, and attendance monitoring solutions. The system emphasizes accuracy, scalability, and ease of use, making it suitable for both academic and commercial applications. It provides APIs and a user-friendly interface for managing user data, enrolling new faces, and performing real-time recognition, while prioritizing performance and data security.",
    image: "/projectImages/face-recognization.png",
    techStack: ["Python", "CV2", "face_recognition", "numpy"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/face-recognization-system",
  },
  {
    slug: "eye-tracking-project",
    title: "Eye Tracking Project",
    description:
      "a Python-based solution focused on real-time eye tracking and gaze estimation. The project leverages computer vision and machine learning techniques to detect and monitor eye movement using a standard webcam or video input. It can be used in applications such as human-computer interaction, accessibility tools, behavioral research, medical analysis, or gaming, providing robust and efficient eye tracking with modular components for detection, calibration, visualization, and analytics.",
    image: "/projectImages/eye-tracking.png",
    techStack: ["Python", "Cv2", "mediapipe", "winsound", "time"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/eye-tracking-project",
  },
  {
    slug: "wedding-invitation-website",
    title: "Wedding Invitation Website",
    description:
      "This project is a modern, single-page wedding invitation website built with React and Vite. It provides an interactive and visually appealing platform for sharing wedding details, showcasing the couple, displaying a photo gallery, and collecting guest RSVPs.",
    image: "/projectImages/wedding-invitation.png",
    techStack: ["React.js", "React-Router-Dom", "Tailwind-css", "SMTP", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug);
}

// ── Social & Contact Data ──
export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Nyi-Nyi-Zin", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/nyi-nyi-zin-8515742b8",
    icon: "linkedin",
  },
  { label: "Twitter", url: "https://x.com/NyiZin321", icon: "twitter" },
];

export const contactInfo = {
  email: "nyinyizin1818@gmail.com",
  phone: "+95 9675507310",
  location: "Yangon, Myanmar",
};

export type NavLinkId = (typeof navLinks)[number]["id"];
