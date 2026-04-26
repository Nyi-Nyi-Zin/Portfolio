import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

const openrouter = createOpenAICompatible({
  name: "openrouter",
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

const NYI_PROFILE = `
# Nyi Nyi Zin — Full-Stack Software Developer & Team Lead
Email: nyinyizin1818@gmail.com | Phone: +95 9675507310
Location: Yangon, Myanmar
Portfolio: https://nyinyizin-portfolio.vercel.app/
GitHub: https://github.com/Nyi-Nyi-Zin
LinkedIn: https://linkedin.com/in/nyi-nyi-zin-8515742b8

## Profile
A self-taught Full-Stack Developer with 3+ years of experience, 50+ projects completed,
and 50+ technologies mastered. Strong foundation in algorithms, data structures, scalable
software architecture, and modern design patterns.

## Education
University of Computer (Sittwe) — Computer Science (Est. Graduated 2027)

## Professional Experience

### Software Development Team Leader — WaanSaung (Nov 2025 – Present)
Remote, Yangon, Myanmar
- Led software development team, conducted code reviews, ensured code quality
- Defined project architecture, created flow diagrams, implemented technical standards
- Coordinated frontend, backend, and UI/UX teams
- Managed full-stack infrastructure on Alibaba Cloud
- Implemented CI/CD pipelines with GitHub Actions

### Fullstack Software Developer — TRIOSYS (April 2025 – Nov 2025)
Hybrid, Yangon, Myanmar
- Led full-cycle projects: frontend, backend, system architecture
- Built high-performance Next.js frontends (SSR, PWA, image optimization, JWT/RBAC)
- Optimized backend systems (Redis caching, pagination, bulk operations)
- Implemented observability with Sentry, automated testing (Jest, Vitest), Docker + Jenkins CI/CD

### IT & Software Solutions Engineer — DomiTech (Jan 2023 – Feb 2025)
Onsite, Thandwe, Myanmar
- Provided IT support, networking (Wi-Fi, CCTV), hardware maintenance
- Transitioned into software development with Flutter, then React and Node.js
- Delivered full-stack web applications for clients

## Services Offered
- Web Development: Next.js, React, SEO-optimized, performance-driven
- Backend Development: Node.js, Golang, NestJS, REST/GraphQL/gRPC/WebSocket
- Mobile Development: Flutter, React Native (cross-platform)
- Database Design: PostgreSQL, MySQL, MongoDB, Firebase
- Cloud & DevOps: CI/CD, Docker, Alibaba Cloud, AWS, Vercel
- API Integration: OAuth, payment gateways, custom middleware

## Skills
Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Shadcn UI, MUI, Mantine UI, Framer Motion
State & Data: Redux Toolkit, Zustand, TanStack Query, TanStack Table
Forms: React Hook Form, Formik, Zod
Mobile: Flutter, Dart, React Native (Expo & Bare CLI)
Backend: Node.js, Express, NestJS, Golang (Gin, Fiber, Echo)
Databases: PostgreSQL, MySQL, MongoDB, MariaDB, NeonDB, Firebase, Firestore
ORM: Prisma, Drizzle, Sequelize, Mongoose, GORM
API: REST, GraphQL, gRPC, WebSocket
Auth & Security: JWT, OAuth, bcrypt
DevOps: Git, Linux, Docker, GitHub Actions, Jenkins, Nginx, Alibaba Cloud, Husky
Architecture: Clean Architecture, Microservices, Layered, Event-Driven, MVC, Modular Monolithic
Caching & Perf: Redis, CDN, lazy loading, code splitting, tree shaking, rate limiting, Core Web Vitals
Monitoring: Sentry, Datadog
Other: PWA, gRPC, background jobs/queues

## Projects

**WaanSaung — Jobs Platform** (waansaung.com)
Myanmar jobs platform: Web + Mobile + Admin. Two-sided marketplace, real-time job matching, i18n (EN/MM/TH/CN), Redis, Alibaba Cloud.
Stack: Next.js, React Native, NestJS, PostgreSQL, Prisma, Redis, TypeScript

**Price Changer** 
Multi-channel product pricing with approval workflow, RBAC, audit logs, multi-currency, barcode scanner, Excel import/export.
Stack: NestJS, React (Vite), PostgreSQL (Prisma), Mantine, Docker, Jenkins

**Educational Information System** (jca.com.mm)
Multi-app platform: Go API + React admin dashboard + Next.js public site. Background jobs, JWT, AWS SDK.
Stack: Go (Echo), Next.js, React (Vite), PostgreSQL, TipTap, Docker

**Company Profile Website** (triosys.info)
High-performance, SEO-friendly company site with SSR and modular components.
Stack: Next.js, Shadcn UI, Tailwind CSS

**E-Commerce Platform**
Full-stack online store with product management, cart, orders, Cloudinary image uploads.
Stack: React, Express, MongoDB, Redux Toolkit, Cloudinary
GitHub: https://github.com/Nyi-Nyi-Zin/e-commerce-web-app

**Real-Time Chat App**
Live messaging with Socket.IO, chat rooms, JWT auth.
Stack: React, Express, Socket.IO, MongoDB
GitHub: https://github.com/Nyi-Nyi-Zin/real-time-chat-app

**Task Management Web App**
Full-stack task manager with React Query, Sequelize, role management.
Stack: React, Express, MySQL, Sequelize, TypeScript
GitHub: https://github.com/Nyi-Nyi-Zin/task-management-app-frontend

**Wedding Invitation Website**
Digital wedding platform with real-time guest messages, event schedule, Add-to-Calendar.
Stack: Next.js, Go (Echo), PostgreSQL

**Face Mask Detection System**
Custom-trained deep learning model for real-time mask detection. CCTV-ready.
Stack: Python, TensorFlow, Keras, OpenCV
GitHub: https://github.com/Nyi-Nyi-Zin/face-mask-detection

**Face Recognition System**
Real-time face detection and authorized individual verification for security use cases.
Stack: Python, OpenCV, face_recognition
GitHub: https://github.com/Nyi-Nyi-Zin/face-recognization-system

**AI Eye Tracking Focus Monitoring System**
Webcam-based drowsiness and distraction detection using gaze and head pose analysis.
Stack: Python, OpenCV, MediaPipe
GitHub: https://github.com/Nyi-Nyi-Zin/eye-tracking-project

## Certificates
- Web Development Course - MERN (Code Hub)
- Next.js Mastery Course (Code Hub)
- Docker Course (Code Hub)
- Go: The Complete Developer's Guide (Udemy)
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openrouter("meta-llama/llama-3.1-70b-instruct"),

    system: `
You are the official AI assistant embedded in Nyi Nyi Zin's personal portfolio website.

${NYI_PROFILE}

RULES:
- Always answer confidently using the profile above.
- Never say "I don't know" about Nyi Nyi Zin.
- For off-topic questions, gently redirect back to his work.
- Keep answers concise and professional.`,

    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
