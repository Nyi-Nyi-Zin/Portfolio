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
    value: "7+",
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
    "title": "Founder",
    "company": "Cloud Nine Software Company",
    "period": "2026 - Present",
    "location": "Yangon, Myanmar",
    "keyAchievements": [
      "Founded Cloud Nine Software Company with a team of experienced developers to build tailored software for clients.",
      "Lead client delivery from requirements and custom UI through production deployment.",
      "Provide programming instruction to students, helping them build practical software development skills."
    ]
  },
  {
    "title": "Software Development Team Lead",
    "company": "WaanSaung",
    "companyUrl": "https://waansaung.com",
    "period": "Nov 2025 - Present",
    "location": "Yangon, Myanmar",
    "keyAchievements": [
      "Lead technical direction, architecture, delivery coordination, code quality, and engineering standards across web, mobile, and admin applications.",
      "Create architecture documents, workflow diagrams, and technical standards to support consistent delivery as the platform grows.",
      "Coordinate cross-functional delivery and track progress against schedule and quality goals.",
      "Manage Alibaba Cloud infrastructure for a live production marketplace, including server configuration, monitoring, and operational support.",
      "Mentor junior developers, assign tasks, and review code."
    ]
  },
  {
    "title": "Full-Stack Software Developer",
    "company": "TRIOSYS IT Solutions and Services",
    "companyUrl": "https://triosys.info",
    "period": "Apr 2025 - Nov 2025",
    "location": "Yangon, Myanmar",
    "keyAchievements": [
      "Delivered client projects across frontend architecture, backend services, database design, security, testing, deployment, and technical documentation.",
      "Led projects and mentored junior developers from kickoff through production release.",
      "Implemented JWT authentication, refresh tokens, role-based access control, Zod validation, CSP/CSRF protections, and secure HTTP headers.",
      "Improved data-heavy interfaces with virtualization, infinite scrolling, debounced search, pagination, and bulk operations.",
      "Designed and tuned Go, Express, NestJS, and Next.js services using query and index tuning, connection pooling, Redis and HTTP caching, and horizontal scaling."
    ]
  },
  {
    "title": "Associate Developer",
    "company": "DomiTech",
    "period": "Jan 2018 - Feb 2025",
    "location": "Thantwe, Myanmar",
    "keyAchievements": [
      "Installed and configured Wi-Fi networks and CCTV systems across Rakhine State, repaired computers, and resolved technical and connectivity issues.",
      "Developed software projects following technical guidelines, with a focus on maintainable code and performance.",
      "Applied senior developers' code review feedback and learned the team's technology stack.",
      "Maintained and refactored code, wrote basic unit and integration tests, and maintained API documentation and setup guides.",
      "Joined daily standups to share progress, plan work, and discuss blockers."
    ]
  }
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
    "slug": "kpi-task-manager",
    "title": "KPI Task Manager",
    "description": "Project/team roles, task workflows, priorities, search, filters, activity logs, project KPIs, real-time chat, file sharing, reactions, replies, call activity, notifications, dashboards, calendar, and timeline views.",
    "image": "/projectImages/task-mangement-app.webp",
    "techStack": [
      "NestJS",
      "TypeScript",
      "GraphQL",
      "REST",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Passport",
      "Socket.io",
      "React",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "React Hook Form",
      "Axios",
      "Docker",
      "Jest"
    ],
    "featured": true
  },
  {
    "slug": "restaurant-pos-saas",
    "title": "Restaurant POS SaaS",
    "description": "A SaaS restaurant point-of-sale platform with separate customer, restaurant-owner, and centralized admin interfaces.",
    "image": "/projectImages/ecommerce.webp",
    "techStack": [],
    "featured": true
  },
  {
    "slug": "waansaung-delivery-system",
    "title": "Waansaung Delivery System",
    "description": "A live web, mobile, and admin marketplace for jobs, local services, property, and second-hand listings, with chat, push notifications, role-based access, multilingual support, and secure sign-in.",
    "image": "/projectImages/ecommerce.webp",
    "techStack": [
      "Next.js",
      "React Native",
      "Expo",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Alibaba Cloud",
      "Docker"
    ],
    "liveUrl": "https://waansaung.com",
    "featured": true
  },
  {
    "slug": "deltawatch-geoai",
    "title": "DeltaWatch — GeoAI Flood Intelligence & Early-Warning Platform",
    "description": "Analyzes satellite imagery, rainfall, and elevation to score flood risk across a 500-meter grid of 5,549 cells in Maubin Township.",
    "image": "/projectImages/price-changer.webp",
    "techStack": [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "Google Earth Engine",
      "CesiumJS"
    ],
    "liveUrl": "https://deltawatch-jayyutyh.manus.space",
    "featured": true
  },
  {
    "slug": "price-changer",
    "title": "Price Changer System",
    "description": "Centralized exchange-rate and multi-currency management with configurable pricing models, a secure decryption module to verify update payloads before broadcast, synchronized web/mobile prices, and historical trend and system analytics charts.",
    "image": "/projectImages/price-changer.webp",
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Mantine",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "NestJS",
      "REST",
      "WebSockets",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Docker",
      "Nginx"
    ],
    "featured": true
  },
  {
    "slug": "customer-relationship-management-system",
    "title": "Customer Relationship Management (CRM) System",
    "description": "Lead tracking, follow-up scheduling, conversion-based opportunity routing, sales-performance dashboards, and marketing-channel attribution analytics.",
    "image": "/projectImages/task-mangement-app.webp",
    "techStack": [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSocket",
      "Docker",
      "GitHub Actions"
    ],
    "featured": true
  },
  {
    "slug": "digital-payment-verification-platform",
    "title": "Digital Payment Verification Platform",
    "description": "OCR-based verification of KBZPay, AyaPay, and WavePay payment screenshots against transaction exports, with duplicate detection and optional push alerts.",
    "image": "/projectImages/ecommerce.webp",
    "techStack": [
      "Flutter",
      "Riverpod",
      "Dio",
      "NestJS",
      "Google Cloud Vision OCR",
      "Telegram Bot API",
      "PostgreSQL",
      "Cloudflare R2",
      "Docker",
      "Nginx",
      "Sentry",
      "Swagger"
    ],
    "featured": true
  },
  {
    "slug": "digital-product-marketplace",
    "title": "Digital Product Marketplace Website",
    "description": "Searchable digital product listings, category filters, product detail pages and purchasing, access to purchased products, and admin tools for listings and orders.",
    "image": "/projectImages/ecommerce.webp",
    "techStack": [
      "Next.js",
      "NestJS",
      "PostgreSQL"
    ],
    "featured": true
  },
  {
    "slug": "book-store-mobile-app",
    "title": "Book Store Mobile App",
    "description": "A Flutter app for browsing books, viewing details, purchasing books, and buying Premium access.",
    "image": "/projectImages/wedding-invitation.webp",
    "techStack": [
      "Flutter"
    ],
    "featured": true
  },
  {
    "slug": "expense-request-management-system",
    "title": "Expense Request Management System",
    "description": "Role- and attribute-based approvals for employees, managers, and finance, with claim-limit, department, and category policy checks; notifications and violation flags; multi-tier approvals; status and payout tracking; dashboards; and CSV/PDF audit reports.",
    "image": "/projectImages/task-mangement-app.webp",
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "Go",
      "REST",
      "WebSockets",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Nginx"
    ],
    "featured": true
  },
  {
    "slug": "educational-information-system",
    "title": "Educational Information System",
    "description": "REST API, admin dashboard, and public website with JWT-based permissions, background workers, SEO-friendly dynamic rendering, and content management.",
    "image": "/projectImages/educational-information.webp",
    "techStack": [
      "Go",
      "GORM",
      "PostgreSQL",
      "Next.js",
      "React Query",
      "Zustand"
    ],
    "liveUrl": "https://jca.com.mm",
    "featured": true
  },
  {
    "slug": "school-management-system",
    "title": "School Management System",
    "description": "Admin dashboard and student portal for courses, enrollments, lessons, assignments, quizzes, announcements, exams, progress tracking, submission review, and certificates after passing final exams.",
    "image": "/projectImages/educational-information.webp",
    "techStack": [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Vercel",
      "Tailwind CSS",
      "React Query"
    ],
    "liveUrl": "https://student.tezatechlab.online",
    "featured": true
  },
  {
    "slug": "wedding-invitation-website",
    "title": "Wedding Invitation Website",
    "description": "Shareable invitation with a welcome message, pre-wedding photos, ceremony date, time and venue, and a guest-wishes section.",
    "image": "/projectImages/wedding-invitation.webp",
    "techStack": [
      "Next.js",
      "PostgreSQL",
      "NestJS",
      "shadcn/ui",
      "React Query",
      "Docker"
    ],
    "featured": true
  },
  {
    "slug": "hotel-management-system",
    "title": "Hotel Management System",
    "description": "Room, reservation, and guest management; check-in/check-out; billing and invoices; occupancy and revenue reports; and administrator/reception access.",
    "image": "/projectImages/company-website.webp",
    "techStack": [
      "React Native",
      "Expo",
      "NestJS",
      "PostgreSQL",
      "Docker"
    ],
    "featured": true
  },
  {
    "slug": "delivery-crm-system",
    "title": "Delivery CRM System",
    "description": "Delivery operations and customer management for customer/order tracking, pricing, status workflows, and role-based dashboards.",
    "image": "/projectImages/task-mangement-app.webp",
    "techStack": [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "GitHub Actions"
    ],
    "featured": true
  },
  {
    "slug": "ai-eye-tracking-focus-monitoring-system",
    "title": "AI Eye-Tracking Focus Monitoring System",
    "description": "Webcam-based detection of drowsiness and loss of focus in drivers and students, with alerts.",
    "image": "/projectImages/eye-tracking.webp",
    "techStack": [
      "Python",
      "OpenCV",
      "MediaPipe"
    ],
    "featured": true
  },
  {
    "slug": "face-mask-detection-system",
    "title": "Face Mask Detection System",
    "description": "Computer-vision system to detect whether a person is wearing a face mask.",
    "image": "/projectImages/face-mask-detection.webp",
    "techStack": [
      "Python"
    ],
    "featured": true
  },
  {
    "slug": "face-recognition-system",
    "title": "Face Recognition System",
    "description": "Separate computer-vision system to detect and recognize faces.",
    "image": "/projectImages/face-recognization.webp",
    "techStack": [
      "Python"
    ],
    "featured": true
  },
  {
    "slug": "triosys-company-profile-website",
    "title": "TRIOSYS Company Profile Website",
    "description": "Company website presenting TRIOSYS's IT services.",
    "image": "/projectImages/company-website.webp",
    "techStack": [
      "Next.js"
    ],
    "liveUrl": "https://triosys.info",
    "featured": true
  }
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
