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

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     id: 1,
//     title: "Overview of Zustand",
//     description:
//       "A deep dive into the small, fast, and scalable state management library for React.",
//     date: "19.11.2025",
//     image: "/blog/Zustand.webp",
//     category: "frontend",
//     content: `
//       <h2>What is Zustand?</h2>
//       <p>Zustand is a small, fast, and scalable state management library for React. It allows you to create a global store (state) that can be accessed from any component in your application.</p>

//       <h2>Why Zustand?</h2>
//       <p>Developers choose Zustand because it solves the complexities of state management with very little friction. Here are the key advantages:</p>
//       <ul>
//         <li><strong>No Boilerplate:</strong> Unlike Redux, there are no reducers, dispatchers, or action types variables. You just write functions to change state.</li>
//         <li><strong>No Providers:</strong> You do not need to wrap your app in a <code>&lt;Provider&gt;</code> (like you do with Context or Redux). The state exists globally outside the component tree.</li>
//         <li><strong>Performance (Selective Re-renders):</strong> This is the biggest win. With React Context, if one piece of the context changes, often every component using that Context re-renders. With Zustand, components only re-render if the specific piece of state they are "listening" to changes.</li>
//         <li><strong>Async Handling:</strong> It handles async actions (fetching data) out of the box without needing middleware like Thunk or Saga.</li>
//         <li><strong>Flexible:</strong> It works with plain JavaScript, does not enforce a rigid structure, and can even be used outside of React components.</li>
//       </ul>

//       <h2>When to use Zustand?</h2>
//       <p><strong>Use useState if:</strong> The state is local to a single component or just shared between a parent and child.</p>

//       <p><strong>Use Zustand if:</strong></p>
//       <ul>
//         <li>You have "global" state (e.g., User Authentication, Dark Mode, Shopping Cart, Notifications).</li>
//         <li>You are currently using Context API but facing performance issues (unnecessary re-renders).</li>
//         <li>You want a global state solution that takes less than 5 minutes to set up.</li>
//         <li>You want to avoid "Prop Drilling" (passing data down through 10 layers of components).</li>
//       </ul>

//       <p><strong>Use Redux if:</strong> You are working on a massive enterprise app where strict architectural patterns, rigid traceability, and time-travel debugging are strict team requirements.</p>

//       <h2>Example Code: Counter App</h2>

//       <h3>1. store.js (Where the logic lives)</h3>
//       <pre><code class="language-javascript">import { create } from 'zustand'

// const useStore = create((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }))

// export default useStore</code></pre>

//       <h3>2. App.js (The UI Component)</h3>
//       <pre><code class="language-javascript">import React from 'react'
// import useStore from './store'

// function App() {
//   // 1. Get data from the store
//   const count = useStore((state) => state.count)
//   const increase = useStore((state) => state.increase)
//   const decrease = useStore((state) => state.decrease)
//   const reset = useStore((state) => state.reset)

//   return (
//     &lt;div style={{ padding: '20px' }}&gt;
//       &lt;h1&gt;Count: {count}&lt;/h1&gt;
//       &lt;button onClick={decrease}&gt; - &lt;/button&gt;
//       &lt;button onClick={reset}&gt; Reset &lt;/button&gt;
//       &lt;button onClick={increase}&gt; + &lt;/button&gt;
//     &lt;/div&gt;
//   )
// }

// export default App</code></pre>
//     `,
//   },
//   {
//     id: 2,
//     title: "Building Microservices with Golang",
//     description:
//       "A guide to structuring Go apps for high performance and concurrency.",
//     date: "15.08.2023",
//     image: "/Miracle.jpg",
//     category: "backend",
//     content: `
//       <p>Go was designed with concurrency in mind, making it an excellent choice for building microservices.</p>
//       <h2>Goroutines and Channels</h2>
//       <p>Unlike other languages that rely on heavy threads, Go uses lightweight Goroutines. You can spin up thousands of them without eating up your RAM.</p>
//       <h2>Structuring the App</h2>
//       <p>Don't use a framework like Django or Rails. In Go, the standard library is usually enough. Structure your service by domain logic rather than MVC layers.</p>
//     `,
//   },
//   {
//     id: 3,
//     title: "Understanding Docker Containers",
//     description: "Why containerization changes deployment forever.",
//     date: "01.09.2023",
//     image: "/Miracle.jpg",
//     category: "devops",
//     content: `
//       <p>Docker solves the "it works on my machine" problem. By bundling the OS, libraries, and code into a single image, we ensure consistency across environments.</p>
//       <h3>Images vs Containers</h3>
//       <p>Think of an <strong>Image</strong> as a class, and a <strong>Container</strong> as an instance of that class.</p>
//     `,
//   },
//   {
//     id: 4,
//     title: "Advanced Typescript Patterns",
//     description: "Leveraging Generics and Utility types for safer codebases.",
//     date: "22.10.2023",
//     image: "/Miracle.jpg",
//     category: "frontend",
//     content: `
//       <p>TypeScript is more than just adding types to variables. Generics allow you to write reusable code that maintains type safety.</p>
//       <h2>Utility Types</h2>
//       <p>Learn to use <code>Pick</code>, <code>Omit</code>, and <code>Partial</code>. They will save you from redefining interfaces constantly.</p>
//     `,
//   },
//   {
//     id: 5,
//     title: "Expo vs Native CLI",
//     description: "Choosing the right path for your React Native mobile app.",
//     date: "10.11.2023",
//     image: "/Miracle.jpg",
//     category: "mobile",
//     content:
//       "<p>With the introduction of Expo Router and Config Plugins, the gap between Expo and Native CLI has narrowed significantly.</p>",
//   },
//   {
//     id: 6,
//     title: "Generative AI for Developers",
//     description: "Integrating OpenAI APIs into your Next.js application.",
//     date: "05.12.2023",
//     image: "/Miracle.jpg",
//     category: "ai",
//     content:
//       "<p>Streaming responses from the OpenAI API in Next.js using the Vercel AI SDK provides a magical user experience.</p>",
//   },
//   {
//     id: 7,
//     title: "React Server Components Explained",
//     description: "How RSC works and why it improves performance.",
//     date: "12.01.2024",
//     image: "/Miracle.jpg",
//     category: "frontend",
//     content:
//       "<p>RSC allows you to run components solely on the server, reducing the JavaScript bundle sent to the client to zero for those parts.</p>",
//   },
// ];

// ── Services Data ──
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
    title: "E-Commerce Platform",
    description:
      "E-Commerce Web App is a full-stack, modern online shopping platform. It features a fast, interactive React frontend powered by Vite and a secure, scalable backend REST API built with Node.js, Express, and MongoDB. The application supports product and user management, shopping cart, secure authentication, media uploads, and order processing—making it a strong foundation for small businesses or teams launching an online store.",
    image: "/Miracle.jpg",
    techStack: ["React.js", "Vite ", "Redux Toolkit", "React Router DOM", "Tailwind CSS","Ant Design","Axios","Express.js","MongoDB","Mongoose","bcrypt","jsonwebtoken","express-validator","Cloudinary","Multer"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/e-commerce-web-app",
    featured: true,
  },
  {
    title: "Real Time Chat App",
    description:
      "real-time-chat-app is a full-stack real-time messaging application built with a modern JavaScript stack. The application enables users to communicate instantly through various chat rooms or channels, supporting seamless live messaging, user authentication, and a user-friendly interface. The frontend is developed using React with Vite for fast builds and a modern development experience, enhanced by Tailwind CSS for rapid UI styling. The backend is powered by Express.js and Socket.IO for scalable, event-driven real-time communication, with MongoDB (via Mongoose) as the database layer.",
    image: "/Miracle.jpg",
    techStack: ["React.js", "React-router-dom", "Tailwindcss", "Socket.io", "Vite","Express.js","Mongoose","Mongodb"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/real-time-chat-app",
    featured: true,
  },
  {
    title: "Face Mask Detection",
    description:
      "A Python-based Face Mask Detection system that leverages deep learning and computer vision techniques to automatically identify whether individuals in an image or video stream are wearing face masks. The model used for detection is custom-trained specifically for this project, ensuring robust and reliable performance in real-world scenarios such as CCTV monitoring, public safety systems, and workplace compliance.",
    image: "/Miracle.jpg",
    techStack: ["TensorFlow", "PyTorch", "Keras", "OpenCV","NumPy"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/face-mask-detection",
    featured: true,
  },
  {
    title: "Task Management Web App",
    description:
      "This project is a full-stack Task Management Application consisting of two main parts: a TypeScript-based frontend (using Vite and React) and a TypeScript Node.js backend (using Express and Sequelize).",
    image: "/Miracle.jpg",
    techStack: ["React.js", "React-Redux", "Tanstack/react-query", "Zod","Axios","React-router-dom","React-hook-form","sonner","vite","Type-script","Express.js","Jsonwebtoken","bcrypt","Sequelize","Mysql"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/task-management-app-frontend",
  },
  {
    title: "Face Recognition System",
    description:
      "The Face Recognition System is an advanced Python-based application designed to detect and recognize human faces in images or video streams. Leveraging state-of-the-art computer vision and machine learning techniques, it can be integrated into security, authentication, and attendance monitoring solutions. The system emphasizes accuracy, scalability, and ease of use, making it suitable for both academic and commercial applications. It provides APIs and a user-friendly interface for managing user data, enrolling new faces, and performing real-time recognition, while prioritizing performance and data security.",
    image: "/Miracle.jpg",
    techStack: ["Python", "CV2", "face_recognition", "numpy"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/face-recognization-system",
  },
  {
    title: "Eye Tracking Project",
    description:
      "a Python-based solution focused on real-time eye tracking and gaze estimation. The project leverages computer vision and machine learning techniques to detect and monitor eye movement using a standard webcam or video input. It can be used in applications such as human-computer interaction, accessibility tools, behavioral research, medical analysis, or gaming, providing robust and efficient eye tracking with modular components for detection, calibration, visualization, and analytics.",
    image: "/Miracle.jpg",
    techStack: ["Python", "Cv2", "mediapipe", "winsound","time"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nyi-Nyi-Zin/eye-tracking-project",
  },
];

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
