import { BlogPost } from "@/types/blogs";

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
    title: "Full Stack Developer",
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
] as const;

export type TagValue = (typeof tags)[number]["value"];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Overview of Zustand",
    description:
      "A deep dive into the small, fast, and scalable state management library for React.",
    date: "19.11.2025",
    image: "/blog/Zustand.webp",
    category: "frontend",
    content: `
      <h2>What is Zustand?</h2>
      <p>Zustand is a small, fast, and scalable state management library for React. It allows you to create a global store (state) that can be accessed from any component in your application.</p>
      
      <h2>Why Zustand?</h2>
      <p>Developers choose Zustand because it solves the complexities of state management with very little friction. Here are the key advantages:</p>
      <ul>
        <li><strong>No Boilerplate:</strong> Unlike Redux, there are no reducers, dispatchers, or action types variables. You just write functions to change state.</li>
        <li><strong>No Providers:</strong> You do not need to wrap your app in a <code>&lt;Provider&gt;</code> (like you do with Context or Redux). The state exists globally outside the component tree.</li>
        <li><strong>Performance (Selective Re-renders):</strong> This is the biggest win. With React Context, if one piece of the context changes, often every component using that Context re-renders. With Zustand, components only re-render if the specific piece of state they are "listening" to changes.</li>
        <li><strong>Async Handling:</strong> It handles async actions (fetching data) out of the box without needing middleware like Thunk or Saga.</li>
        <li><strong>Flexible:</strong> It works with plain JavaScript, does not enforce a rigid structure, and can even be used outside of React components.</li>
      </ul>

      <h2>When to use Zustand?</h2>
      <p><strong>Use useState if:</strong> The state is local to a single component or just shared between a parent and child.</p>
      
      <p><strong>Use Zustand if:</strong></p>
      <ul>
        <li>You have "global" state (e.g., User Authentication, Dark Mode, Shopping Cart, Notifications).</li>
        <li>You are currently using Context API but facing performance issues (unnecessary re-renders).</li>
        <li>You want a global state solution that takes less than 5 minutes to set up.</li>
        <li>You want to avoid "Prop Drilling" (passing data down through 10 layers of components).</li>
      </ul>
      
      <p><strong>Use Redux if:</strong> You are working on a massive enterprise app where strict architectural patterns, rigid traceability, and time-travel debugging are strict team requirements.</p>

      <h2>Example Code: Counter App</h2>
      
      <h3>1. store.js (Where the logic lives)</h3>
      <pre><code class="language-javascript">import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export default useStore</code></pre>

      <h3>2. App.js (The UI Component)</h3>
      <pre><code class="language-javascript">import React from 'react'
import useStore from './store'

function App() {
  // 1. Get data from the store
  const count = useStore((state) => state.count)
  const increase = useStore((state) => state.increase)
  const decrease = useStore((state) => state.decrease)
  const reset = useStore((state) => state.reset)

  return (
    &lt;div style={{ padding: '20px' }}&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={decrease}&gt; - &lt;/button&gt;
      &lt;button onClick={reset}&gt; Reset &lt;/button&gt;
      &lt;button onClick={increase}&gt; + &lt;/button&gt;
    &lt;/div&gt;
  )
}

export default App</code></pre>
    `,
  },
  {
    id: 2,
    title: "Building Microservices with Golang",
    description:
      "A guide to structuring Go apps for high performance and concurrency.",
    date: "15.08.2023",
    image: "/Miracle.jpg",
    category: "backend",
    content: `
      <p>Go was designed with concurrency in mind, making it an excellent choice for building microservices.</p>
      <h2>Goroutines and Channels</h2>
      <p>Unlike other languages that rely on heavy threads, Go uses lightweight Goroutines. You can spin up thousands of them without eating up your RAM.</p>
      <h2>Structuring the App</h2>
      <p>Don't use a framework like Django or Rails. In Go, the standard library is usually enough. Structure your service by domain logic rather than MVC layers.</p>
    `,
  },
  {
    id: 3,
    title: "Understanding Docker Containers",
    description: "Why containerization changes deployment forever.",
    date: "01.09.2023",
    image: "/Miracle.jpg",
    category: "devops",
    content: `
      <p>Docker solves the "it works on my machine" problem. By bundling the OS, libraries, and code into a single image, we ensure consistency across environments.</p>
      <h3>Images vs Containers</h3>
      <p>Think of an <strong>Image</strong> as a class, and a <strong>Container</strong> as an instance of that class.</p>
    `,
  },
  {
    id: 4,
    title: "Advanced Typescript Patterns",
    description: "Leveraging Generics and Utility types for safer codebases.",
    date: "22.10.2023",
    image: "/Miracle.jpg",
    category: "frontend",
    content: `
      <p>TypeScript is more than just adding types to variables. Generics allow you to write reusable code that maintains type safety.</p>
      <h2>Utility Types</h2>
      <p>Learn to use <code>Pick</code>, <code>Omit</code>, and <code>Partial</code>. They will save you from redefining interfaces constantly.</p>
    `,
  },
  {
    id: 5,
    title: "Expo vs Native CLI",
    description: "Choosing the right path for your React Native mobile app.",
    date: "10.11.2023",
    image: "/Miracle.jpg",
    category: "mobile",
    content:
      "<p>With the introduction of Expo Router and Config Plugins, the gap between Expo and Native CLI has narrowed significantly.</p>",
  },
  {
    id: 6,
    title: "Generative AI for Developers",
    description: "Integrating OpenAI APIs into your Next.js application.",
    date: "05.12.2023",
    image: "/Miracle.jpg",
    category: "ai",
    content:
      "<p>Streaming responses from the OpenAI API in Next.js using the Vercel AI SDK provides a magical user experience.</p>",
  },
  {
    id: 7,
    title: "React Server Components Explained",
    description: "How RSC works and why it improves performance.",
    date: "12.01.2024",
    image: "/Miracle.jpg",
    category: "frontend",
    content:
      "<p>RSC allows you to run components solely on the server, reducing the JavaScript bundle sent to the client to zero for those parts.</p>",
  },
];

export type NavLinkId = (typeof navLinks)[number]["id"];
