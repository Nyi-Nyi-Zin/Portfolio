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
Full-stack developer and engineering team lead with 7+ years of experience in the IT field since 2018. Builds and ships production web, mobile, and backend systems, with experience in system architecture, secure API design, database modeling, DevOps/CI-CD, and coordinating engineering teams.

## Education
Bachelor of Computer Science — Polytechnic University Maubin (Graduated 2025)

## Professional Experience

### Founder — Cloud Nine Software Company (2026 – Present)
Founded the company with a team of experienced developers to build tailored software for clients. Lead client delivery from requirements and custom UI through production deployment. The company also provides programming instruction to students.

### Software Development Team Lead — WaanSaung (Nov 2025 – Present)
Own technical direction, architecture decisions, delivery coordination, code quality, and engineering standards across web, mobile, and admin applications. Create architecture documents and workflow diagrams, manage Alibaba Cloud infrastructure for a live marketplace, coordinate delivery, and mentor junior developers.

### Full-Stack Software Developer — TRIOSYS IT Solutions and Services (Apr 2025 – Nov 2025)
Delivered client projects across frontend architecture, backend services, database design, security, testing, deployment, and documentation. Led projects and mentored junior developers. Implemented JWT and refresh-token authentication, RBAC, Zod validation, CSP/CSRF protections, secure headers, and data-heavy interfaces with virtualization, infinite scrolling, debounced search, pagination, and bulk operations. Tuned Go, Express, NestJS, and Next.js services through query/index tuning, connection pooling, Redis and HTTP caching, and horizontal scaling.

### Associate Developer — DomiTech (Jan 2018 – Feb 2025)
Worked in Thantwe, Myanmar, providing networking and end-user IT support across Rakhine State alongside software development. Installed Wi-Fi and CCTV systems, repaired computers, resolved technical issues, developed and refactored software, wrote basic tests, and maintained API documentation and setup guides.

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

## Featured Projects

- KPI Task Manager: team roles, task workflows, priorities, search, filters, activity logs, project KPIs, real-time chat, file sharing, notifications, dashboards, calendar, and timeline. Stack: NestJS, GraphQL, REST, Prisma, PostgreSQL, Redis, React, Vite, Docker.
- Restaurant POS SaaS: customer, restaurant-owner, and centralized admin interfaces.
- WaanSaung Delivery System: web, mobile, and admin marketplace for jobs, local services, property, and second-hand listings, with chat, push notifications, roles, multilingual support, and secure sign-in. Stack: Next.js, React Native, Expo, NestJS, PostgreSQL, Prisma, Redis, Alibaba Cloud, Docker.
- DeltaWatch GeoAI: analyzes satellite imagery, rainfall, and elevation to score flood risk across 5,549 cells on a 500-meter grid in Maubin Township. Stack: Next.js, TypeScript, Python/FastAPI, PostgreSQL/PostGIS, Google Earth Engine, CesiumJS.
- Price Changer System: exchange-rate and multi-currency management, secure validation of rate updates, synchronized web/mobile prices, and analytics charts. Stack: Next.js, React, TypeScript, NestJS, PostgreSQL/MySQL, Prisma, WebSockets, Docker, Nginx.
- Customer Relationship Management System: lead tracking, follow-up scheduling, conversion-based opportunity routing, sales dashboards, and marketing attribution. Stack: Next.js, NestJS, PostgreSQL, Redis, WebSocket, Docker, GitHub Actions.
- Digital Payment Verification Platform: OCR verification of KBZPay, AyaPay, and WavePay screenshots against transaction exports, duplicate detection, and optional push alerts. Stack: Flutter, Riverpod, NestJS, Google Cloud Vision OCR, PostgreSQL, Cloudflare R2, Docker.
- Digital Product Marketplace Website: searchable products, category filters, detail pages, purchases, access to bought products, and admin listing/order tools. Stack: Next.js, NestJS, PostgreSQL.
- Book Store Mobile App: Flutter app for browsing and purchasing books and buying Premium access. Stack: Flutter.
- Expense Request Management System: policy checks, multi-tier approvals, status/payout tracking, dashboards, and CSV/PDF audit reports. Stack: Next.js, shadcn/ui, Go, REST/WebSocket, PostgreSQL/MySQL, Docker.
- Educational Information System: REST API, admin dashboard, public website, JWT permissions, background workers, dynamic rendering, and content management. Stack: Go, GORM, PostgreSQL, Next.js.
- School Management System: admin dashboard and student portal for courses, enrollments, lessons, assignments, quizzes, exams, progress, submission review, and certificates. Stack: Next.js, Firebase Auth, Firestore.
- Wedding Invitation Website: shareable invitation with welcome message, pre-wedding photos, ceremony details, and guest wishes. Stack: Next.js, NestJS, PostgreSQL, shadcn/ui, Docker.
- Hotel Management System: rooms, reservations, guest records, check-in/check-out, billing, invoices, occupancy/revenue reports, and admin/reception access. Stack: React Native, Expo, NestJS, PostgreSQL, Docker.
- Delivery CRM System: customer/order tracking, pricing, status workflows, and role-based dashboards. Stack: Next.js, NestJS, PostgreSQL/Prisma, Redis, Docker, GitHub Actions.
- AI Eye-Tracking Focus Monitoring System: webcam detection of drowsiness and loss of focus in drivers and students, with alerts. Stack: Python, OpenCV, MediaPipe.
- Face Mask Detection System: computer-vision detection of whether a person is wearing a mask. Stack: Python.
- Face Recognition System: separate face-detection and recognition system. Stack: Python.
- TRIOSYS Company Profile Website: company website presenting its IT services. Stack: Next.js.
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
- Answer using only the profile above. Do not invent experience, project features, dates, or tools.
- If the profile does not contain an answer, say the information is not listed and invite the visitor to contact Nyi Nyi Zin.
- For unrelated questions, briefly redirect to his work.
- Keep answers concise and professional.`,

    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
