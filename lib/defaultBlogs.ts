import type { SerializedBlogPost } from "@/types/blogs";

/**
 * Curated posts keep the public blog useful even when the database has not
 * been seeded yet. Database posts are merged with these entries at runtime.
 */
export const defaultBlogPosts = [
  {
    id: "software-development-maintainable-nextjs",
    image: "/logo.png",
    createdAt: "2026-07-28T09:00:00.000Z",
    updatedAt: "2026-07-28T09:00:00.000Z",
    translations: {
      en: {
        title: "How to Design a Maintainable Next.js Application",
        description:
          "A practical guide to separating routes, UI, data access, and domain logic so a Next.js project can grow without becoming difficult to change.",
        category: "system design",
        detail: `<h2>Start with clear boundaries</h2><p>A maintainable application is easier to understand when each part has one clear responsibility. Keep route handlers focused on HTTP concerns, place reusable UI in components, and isolate data access behind small server-side functions.</p><h2>A structure that scales</h2><ul><li><strong>App routes:</strong> compose pages and define request boundaries.</li><li><strong>Components:</strong> render interfaces and receive typed props.</li><li><strong>Libraries:</strong> contain data access, integrations, and domain helpers.</li><li><strong>Types and schemas:</strong> describe the contracts shared across the application.</li></ul><p>This separation reduces accidental coupling and makes testing, code review, and future refactoring much safer.</p><h2>Prefer composition over giant components</h2><p>Large pages are usually a sign that several responsibilities have been combined. Split sections into focused components and pass data explicitly. The result is not only cleaner code; it also makes loading states and responsive behavior easier to reason about.</p><h2>Make the boundary explicit</h2><p>Use server components for data retrieval whenever possible, and add client components only where interactivity is required. Keeping the client boundary small improves performance and prevents browser-only concerns from spreading through the project.</p>`,
      },
      mm: {
        title: "ထိန်းသိမ်းပြင်ဆင်ရလွယ်ကူသော Next.js Application တည်ဆောက်နည်း",
        description:
          "Next.js project ကြီးထွားလာတဲ့အခါ ပြင်ဆင်ရခက်မသွားအောင် route၊ UI၊ data access နဲ့ domain logic တွေကို ခွဲခြားတည်ဆောက်နည်းကို လက်တွေ့ရှင်းပြထားပါတယ်။",
        category: "system design",
        detail: `<h2>တာဝန်ယူမှုနယ်နိမိတ်ကို ရှင်းလင်းထားပါ</h2><p>Application တစ်ခုကို နားလည်ရလွယ်ကူစေဖို့ အပိုင်းတိုင်းမှာ တာဝန်တစ်ခုစီ ရှင်းလင်းနေသင့်ပါတယ်။ Route handler တွေကို HTTP အလုပ်များအတွက်သာ အသုံးပြုပြီး reusable UI ကို component အဖြစ်ထားကာ data access ကို server-side function အသေးများနောက်ကွယ်မှာ ခွဲထားနိုင်ပါတယ်။</p><h2>Project ကြီးလာတဲ့အခါ အသုံးဝင်သောဖွဲ့စည်းပုံ</h2><ul><li><strong>App routes:</strong> page နဲ့ request boundary တွေကို စီမံပေးပါတယ်။</li><li><strong>Components:</strong> interface ကို render လုပ်ပြီး typed props ကို လက်ခံပါတယ်။</li><li><strong>Libraries:</strong> data access၊ integration နဲ့ domain helper တွေကို ထည့်ထားပါတယ်။</li><li><strong>Types နဲ့ schemas:</strong> application အပိုင်းများကြား contract ကို သတ်မှတ်ပေးပါတယ်။</li></ul><p>ဒီလိုခွဲခြားထားခြင်းက coupling လျှော့ချပေးပြီး testing၊ code review နဲ့ refactoring တွေကို ပိုလုံခြုံစေပါတယ်။</p><h2>Component ကြီးတစ်ခုအစား composition ကို သုံးပါ</h2><p>Page တစ်ခုမှာ တာဝန်များလွန်းနေခြင်းဟာ component ကြီးလွန်းနေကြောင်း ပြသတတ်ပါတယ်။ Section တွေကို အာရုံစိုက်ထားတဲ့ component အသေးများအဖြစ် ခွဲပြီး data ကို explicit အဖြစ် ပေးပို့ပါ။</p>`,
      },
    },
  },
  {
    id: "typescript-api-validation-zod",
    image: "/logo.png",
    createdAt: "2026-07-22T09:00:00.000Z",
    updatedAt: "2026-07-22T09:00:00.000Z",
    translations: {
      en: {
        title: "Type-Safe API Validation with TypeScript and Zod",
        description:
          "Why runtime validation matters and how schemas can protect API boundaries from malformed or unexpected input.",
        category: "backend",
        detail: `<h2>Types alone do not validate requests</h2><p>TypeScript disappears at runtime. A request coming from a browser, mobile client, or third-party integration can still contain missing fields, incorrect types, or unexpected values. Runtime validation closes that gap.</p><h2>Define one schema at the boundary</h2><p>A Zod schema can describe the expected payload and produce a typed result after parsing. Keep the schema close to the API contract, validate before business logic runs, and return a consistent error shape to the client.</p><pre><code>const CreateUser = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const input = CreateUser.parse(requestBody);</code></pre><h2>Validate more than the body</h2><p>Path parameters, query strings, headers, uploaded files, and environment variables are all external input. Applying the same discipline to every boundary prevents many production-only bugs.</p><h2>Keep error messages useful</h2><p>Do not expose stack traces or internal implementation details. Return field-level messages that help a user correct their input while logging the full diagnostic context on the server.</p>`,
      },
      mm: {
        title: "TypeScript နဲ့ Zod အသုံးပြုပြီး Type-Safe API Validation လုပ်နည်း",
        description:
          "Runtime validation ဘာကြောင့်လိုအပ်သလဲနဲ့ မမှန်ကန်တဲ့ request input တွေကနေ API boundary ကို schema တွေနဲ့ ကာကွယ်နည်းကို ရှင်းပြထားပါတယ်။",
        category: "backend",
        detail: `<h2>TypeScript type တစ်ခုတည်းနဲ့ request ကို validate မလုပ်နိုင်ပါ</h2><p>TypeScript type တွေဟာ runtime မှာ ပျောက်သွားပါတယ်။ Browser၊ mobile client ဒါမှမဟုတ် third-party integration ကနေ လာတဲ့ request မှာ field ပျောက်နေတာ၊ type မှားနေတာ၊ မမျှော်လင့်ထားတဲ့ value ပါနေတာတွေ ဖြစ်နိုင်ပါတယ်။ Runtime validation က ဒီကွာဟချက်ကို ဖြည့်ပေးပါတယ်။</p><h2>Boundary မှာ schema တစ်ခု သတ်မှတ်ပါ</h2><p>Zod schema က လက်ခံရမယ့် payload ကို ဖော်ပြပြီး parse လုပ်ပြီးနောက် typed result ရစေပါတယ်။ API contract အနီးမှာ schema ထားပြီး business logic မစမီ validate လုပ်ပါ။</p><h2>Body တင်မက validate လုပ်ပါ</h2><p>Path parameter၊ query string၊ header၊ uploaded file နဲ့ environment variable တွေဟာလည်း external input တွေပါ။ Boundary တိုင်းမှာ validation လုပ်ခြင်းက production မှာသာပေါ်လာတတ်တဲ့ bug တွေကို လျှော့ချပေးပါတယ်။</p><h2>Error message ကို အသုံးဝင်အောင်ထားပါ</h2><p>User က ပြင်ဆင်နိုင်မယ့် field-level message ပေးပြီး stack trace နဲ့ internal detail များကို မပြပါနဲ့။ Server log ထဲမှာတော့ diagnostic context အပြည့်အစုံကို သိမ်းထားနိုင်ပါတယ်။</p>`,
      },
    },
  },
  {
    id: "postgresql-indexes-practical-guide",
    image: "/logo.png",
    createdAt: "2026-07-16T09:00:00.000Z",
    updatedAt: "2026-07-16T09:00:00.000Z",
    translations: {
      en: {
        title: "PostgreSQL Indexes: A Practical Performance Guide",
        description:
          "Learn when an index helps, how composite indexes work, and why query plans should guide database optimization decisions.",
        category: "database",
        detail: `<h2>An index is a trade-off</h2><p>Indexes can make reads faster by avoiding a full table scan, but they consume storage and make writes more expensive. The goal is not to index every column; it is to support the queries the application actually runs.</p><h2>Start with the query pattern</h2><p>Use <code>EXPLAIN ANALYZE</code> to inspect a slow query. Look for sequential scans on large tables, expensive sorts, and filters that remove most rows only after reading them.</p><h2>Composite index order matters</h2><p>For a query filtering by tenant and sorting by creation time, an index such as <code>(tenant_id, created_at)</code> is often more useful than two unrelated single-column indexes. The leading columns should match the most selective and common access pattern.</p><h2>Measure after every change</h2><p>Database performance depends on data size and distribution. Benchmark with realistic records, compare query plans before and after, and remove indexes that no longer serve a real workload.</p>`,
      },
      mm: {
        title: "PostgreSQL Index ကို အသုံးချပြီး Performance မြှင့်တင်နည်း",
        description:
          "Index ဘယ်အချိန်မှာ အကျိုးရှိသလဲ၊ composite index ဘယ်လိုအလုပ်လုပ်သလဲနဲ့ query plan ကိုကြည့်ပြီး database optimization ဆုံးဖြတ်နည်းကို ရှင်းပြထားပါတယ်။",
        category: "database",
        detail: `<h2>Index ဆိုတာ trade-off တစ်ခုပါ</h2><p>Index က table အားလုံးကို scan မလုပ်ဘဲ read ကို မြန်စေနိုင်ပေမယ့် storage နေရာယူပြီး write operation ကို ပိုကုန်ကျစေပါတယ်။ Column တိုင်းကို index လုပ်ဖို့မဟုတ်ဘဲ application အမှန်တကယ်သုံးတဲ့ query တွေအတွက်သာ index ထားသင့်ပါတယ်။</p><h2>Query pattern ကနေ စပါ</h2><p><code>EXPLAIN ANALYZE</code> ကိုသုံးပြီး slow query ကို စစ်ဆေးပါ။ Table ကြီးပေါ်မှာ sequential scan ဖြစ်နေတာ၊ sort အလွန်ကုန်ကျနေတာနဲ့ row အများစုကို ဖတ်ပြီးမှ filter လုပ်နေတာတွေကို သတိထားပါ။</p><h2>Composite index မှာ အစီအစဉ်အရေးကြီးပါတယ်</h2><p>Tenant နဲ့ filter လုပ်ပြီး creation time နဲ့ sort လုပ်တဲ့ query အတွက် <code>(tenant_id, created_at)</code> လို index က single-column index နှစ်ခုထက် ပိုအသုံးဝင်နိုင်ပါတယ်။</p><h2>ပြောင်းလဲမှုတိုင်းပြီးရင် တိုင်းတာပါ</h2><p>Database performance က data size နဲ့ distribution ပေါ်မူတည်ပါတယ်။ အမှန်တကယ်နီးစပ်တဲ့ record များနဲ့ benchmark လုပ်ပြီး query plan ကို မပြောင်းမီနဲ့ ပြောင်းပြီး နှိုင်းယှဉ်ပါ။</p>`,
      },
    },
  },
  {
    id: "react-frontend-performance-checklist",
    image: "/logo.png",
    createdAt: "2026-07-10T09:00:00.000Z",
    updatedAt: "2026-07-10T09:00:00.000Z",
    translations: {
      en: {
        title: "A Frontend Performance Checklist for React Applications",
        description:
          "A repeatable checklist for reducing unnecessary work, improving loading speed, and keeping React interfaces responsive.",
        category: "frontend",
        detail: `<h2>Measure before optimizing</h2><p>Use browser performance tools and real user metrics to find the largest bottleneck. A faster component is not useful if the actual problem is an oversized image, a slow API, or a layout shift.</p><h2>Reduce the initial payload</h2><ul><li>Prefer server rendering for content that does not need client interaction.</li><li>Lazy-load heavy widgets and below-the-fold images.</li><li>Remove unused dependencies and split large feature bundles.</li></ul><h2>Control rendering work</h2><p>Keep state close to the components that use it, avoid recreating expensive values on every render, and use memoization only when profiling shows a benefit. Stable list keys are essential for predictable updates.</p><h2>Protect the experience on slow devices</h2><p>Use skeletons and progressive loading instead of blocking the entire page. Test with CPU throttling, a small viewport, and a slow network profile before calling the work complete.</p>`,
      },
      mm: {
        title: "React Application တွေအတွက် Frontend Performance စစ်ဆေးရန်စာရင်း",
        description:
          "မလိုအပ်တဲ့အလုပ်တွေကို လျှော့ချပြီး loading speed နဲ့ React interface ရဲ့ responsiveness ကို တိုးတက်စေမယ့် လက်တွေ့ checklist တစ်ခုပါ။",
        category: "frontend",
        detail: `<h2>Optimization မလုပ်မီ တိုင်းတာပါ</h2><p>Browser performance tool နဲ့ real user metric တွေကို သုံးပြီး အကြီးမားဆုံး bottleneck ကို ရှာပါ။ Component တစ်ခုမြန်လာပေမယ့် အမှန်တကယ်ပြဿနာက image ကြီးနေတာ ဒါမှမဟုတ် API နှေးနေတာ ဖြစ်နိုင်ပါတယ်။</p><h2>အစပိုင်း payload ကို လျှော့ပါ</h2><ul><li>Interaction မလိုတဲ့ content တွေအတွက် server rendering ကို ဦးစားပေးပါ။</li><li>လေးလံတဲ့ widget နဲ့ အောက်ပိုင်း image တွေကို lazy-load လုပ်ပါ။</li><li>မသုံးတဲ့ dependency တွေဖယ်ပြီး feature bundle ကြီးတွေကို ခွဲပါ။</li></ul><h2>Rendering အလုပ်ကို ထိန်းချုပ်ပါ</h2><p>State ကို အသုံးပြုတဲ့ component အနီးမှာထားပြီး expensive value တွေကို render တိုင်း ပြန်မဖန်တီးပါနဲ့။ Memoization ကို profiling က အကျိုးရှိကြောင်းပြမှ သုံးပါ။</p><h2>Device နှေးတဲ့အချိန်ကိုလည်း စဉ်းစားပါ</h2><p>Page တစ်ခုလုံးကို ပိတ်ထားမယ့်အစား skeleton နဲ့ progressive loading သုံးပါ။ CPU throttling၊ viewport အသေးနဲ့ network နှေးတဲ့အခြေအနေမှာ စမ်းသပ်ပြီးမှ ပြီးစီးတယ်လို့ သတ်မှတ်ပါ။</p>`,
      },
    },
  },
  {
    id: "accessible-react-component-design",
    image: "/logo.png",
    createdAt: "2026-07-04T09:00:00.000Z",
    updatedAt: "2026-07-04T09:00:00.000Z",
    translations: {
      en: {
        title: "Accessible React Components Are Better Components",
        description:
          "Practical habits for building interfaces that work with keyboards, screen readers, different contrast needs, and real-world input methods.",
        category: "frontend",
        detail: `<h2>Start with semantic HTML</h2><p>Use a button for an action, a link for navigation, a heading for structure, and a form label for every input. Semantic elements provide useful behavior before any custom styling is applied.</p><h2>Keyboard interaction is a requirement</h2><p>Every interactive control should be reachable with Tab, have a visible focus state, and respond to the expected keyboard actions. Custom dropdowns and dialogs need careful focus management.</p><h2>State should be understandable</h2><p>Loading, success, and error states must be announced or visually clear. Do not communicate important information with color alone, and ensure text remains readable in both light and dark themes.</p><h2>Test with assistive technology</h2><p>Automated audits are helpful, but they cannot replace keyboard-only navigation and screen-reader testing. Accessibility is most effective when it is considered during component design rather than added at the end.</p>`,
      },
      mm: {
        title: "Accessible React Component တွေက ပိုကောင်းတဲ့ Component တွေဖြစ်တယ်",
        description:
          "Keyboard၊ screen reader၊ contrast လိုအပ်ချက်နဲ့ အမျိုးမျိုးသော input method တွေနဲ့ အလုပ်လုပ်နိုင်မယ့် interface တည်ဆောက်ရာမှာ အသုံးဝင်တဲ့ အလေ့အကျင့်များ။",
        category: "frontend",
        detail: `<h2>Semantic HTML ကနေ စတင်ပါ</h2><p>Action အတွက် button၊ navigation အတွက် link၊ structure အတွက် heading နဲ့ input တိုင်းအတွက် form label သုံးပါ။ Semantic element တွေက custom styling မလုပ်ခင်ကတည်းက အသုံးဝင်တဲ့ behavior ပေးနိုင်ပါတယ်။</p><h2>Keyboard interaction က မဖြစ်မနေလိုအပ်ပါတယ်</h2><p>Interactive control တိုင်းကို Tab နဲ့ရောက်နိုင်ရမယ်၊ focus state ကို မြင်ရမယ်၊ သင့်တော်တဲ့ keyboard action ကို တုံ့ပြန်ရမယ်။ Custom dropdown နဲ့ dialog တွေမှာ focus management ကို သေချာစဉ်းစားပါ။</p><h2>State ကို နားလည်ရလွယ်အောင် ပြပါ</h2><p>Loading၊ success နဲ့ error state တွေကို announcement သို့မဟုတ် မြင်သာတဲ့ပုံစံနဲ့ ပြပါ။ အရေးကြီးတဲ့အချက်အလက်ကို color တစ်ခုတည်းနဲ့ မပြောပါနဲ့။</p><h2>Assistive technology နဲ့ စမ်းသပ်ပါ</h2><p>Automated audit တွေက အကူအညီဖြစ်ပေမယ့် keyboard-only navigation နဲ့ screen reader testing ကို အစားမထိုးနိုင်ပါဘူး။ Accessibility ကို နောက်ဆုံးမှ ထည့်တာထက် component design အစကတည်းက ထည့်စဉ်းစားတာ ပိုထိရောက်ပါတယ်။</p>`,
      },
    },
  },
  {
    id: "docker-node-production-workflow",
    image: "/logo.png",
    createdAt: "2026-06-28T09:00:00.000Z",
    updatedAt: "2026-06-28T09:00:00.000Z",
    translations: {
      en: {
        title: "Containerizing a Node.js Application for Production",
        description:
          "How a small Docker image, a non-root user, and a repeatable build process make Node.js deployments safer and more predictable.",
        category: "devops",
        detail: `<h2>Build for repeatability</h2><p>A production image should be created from a lockfile and a known base image. Copy dependency manifests first so Docker can reuse the install layer when application source changes.</p><h2>Use a multi-stage build</h2><p>Keep compilers and development dependencies in the builder stage, then copy only the runtime output into a smaller final image. This reduces attack surface and makes startup and transfer faster.</p><h2>Run as a non-root user</h2><p>The application should not need root privileges. A dedicated user limits the impact of a compromised process and makes the container's permissions easier to reason about.</p><h2>Configuration belongs outside the image</h2><p>Use environment variables or a managed secret store for database URLs, API keys, and other deployment-specific values. Never bake credentials into an image or commit them to the repository.</p>`,
      },
      mm: {
        title: "Node.js Application ကို Production အတွက် Dockerize လုပ်နည်း",
        description:
          "Docker image အသေး၊ non-root user နဲ့ ပြန်လည်ထုတ်လုပ်နိုင်တဲ့ build process တွေက Node.js deployment ကို ပိုလုံခြုံပြီး ခန့်မှန်းရလွယ်စေတဲ့နည်းလမ်းများ။",
        category: "devops",
        detail: `<h2>ပြန်လည်ထုတ်လုပ်နိုင်အောင် build လုပ်ပါ</h2><p>Production image ကို lockfile နဲ့ သတ်မှတ်ထားတဲ့ base image ကနေ တည်ဆောက်သင့်ပါတယ်။ Application source ပြောင်းလဲတဲ့အခါ install layer ကို ပြန်အသုံးချနိုင်ဖို့ dependency manifest ကို အရင် copy လုပ်ပါ။</p><h2>Multi-stage build သုံးပါ</h2><p>Compiler နဲ့ development dependency တွေကို builder stage ထဲမှာပဲထားပြီး runtime output လိုအပ်တာကို final image ထဲ copy လုပ်ပါ။ ဒါက attack surface လျှော့ပြီး image ကို ပိုသေးစေပါတယ်။</p><h2>Root မဟုတ်တဲ့ user နဲ့ run ပါ</h2><p>Application က root privilege မလိုသင့်ပါဘူး။ သီးသန့် user သုံးခြင်းက process compromise ဖြစ်တဲ့အခါ ထိခိုက်မှုကို လျှော့ပေးပါတယ်။</p><h2>Configuration ကို image အပြင်မှာထားပါ</h2><p>Database URL၊ API key နဲ့ deployment-specific value တွေအတွက် environment variable ဒါမှမဟုတ် managed secret store သုံးပါ။ Credential တွေကို image ထဲမထည့်ပါနဲ့၊ repository ထဲလည်း မcommit ပါနဲ့။</p>`,
      },
    },
  },
  {
    id: "github-actions-ci-cd-basics",
    image: "/logo.png",
    createdAt: "2026-06-21T09:00:00.000Z",
    updatedAt: "2026-06-21T09:00:00.000Z",
    translations: {
      en: {
        title: "A Reliable CI/CD Workflow with GitHub Actions",
        description:
          "Design a pipeline that gives fast feedback on pull requests and deploys only code that has passed repeatable checks.",
        category: "devops",
        detail: `<h2>Every pull request should receive feedback</h2><p>Start with a workflow that installs from the lockfile, runs type checking, executes tests, and performs linting. These checks should be fast enough that developers do not avoid them.</p><h2>Separate verification from deployment</h2><p>Build artifacts and deployment permissions should be protected. A common pattern is to verify every pull request, then deploy only from a trusted branch after the same checks pass.</p><h2>Use caching carefully</h2><p>Dependency caching can make workflows much faster, but the cache key should include the lockfile. A stale cache must never be allowed to hide a changed dependency graph.</p><h2>Keep secrets out of logs</h2><p>Use repository or environment secrets, give tokens the smallest required permissions, and avoid printing environment objects during debugging. CI is part of the application's security boundary.</p>`,
      },
      mm: {
        title: "GitHub Actions နဲ့ ယုံကြည်ရတဲ့ CI/CD Workflow တည်ဆောက်နည်း",
        description:
          "Pull request အတွက် feedback မြန်မြန်ရပြီး repeatable check တွေ ဖြတ်ကျော်ပြီးသား code ကိုသာ deploy လုပ်မယ့် pipeline တည်ဆောက်နည်း။",
        category: "devops",
        detail: `<h2>Pull request တိုင်းမှာ feedback ရသင့်ပါတယ်</h2><p>Lockfile ကနေ install လုပ်ခြင်း၊ type check၊ test နဲ့ lint ကို workflow ထဲမှာ ထည့်ပါ။ Developer တွေ မရှောင်ကြဉ်အောင် ဒီ check တွေက မြန်သင့်ပါတယ်။</p><h2>Verification နဲ့ deployment ကို ခွဲထားပါ</h2><p>Build artifact နဲ့ deployment permission တွေကို ကာကွယ်ထားသင့်ပါတယ်။ Pull request တိုင်းကို verify လုပ်ပြီး trusted branch ကနေသာ check အောင်မြင်ပြီးနောက် deploy လုပ်တဲ့ pattern ကို အသုံးများပါတယ်။</p><h2>Cache ကို သတိထားသုံးပါ</h2><p>Dependency cache က workflow ကို မြန်စေနိုင်ပေမယ့် cache key ထဲမှာ lockfile ပါသင့်ပါတယ်။ Stale cache ကြောင့် dependency ပြောင်းလဲမှုကို မဖုံးကွယ်စေပါနဲ့။</p><h2>Secret တွေကို log ထဲ မထည့်ပါနဲ့</h2><p>Repository သို့မဟုတ် environment secret သုံးပြီး token ကို လိုအပ်သလောက် permission ပဲ ပေးပါ။ Debugging လုပ်တဲ့အခါ environment object တစ်ခုလုံးကို print မလုပ်ပါနဲ့။</p>`,
      },
    },
  },
  {
    id: "secure-jwt-authentication-principles",
    image: "/logo.png",
    createdAt: "2026-06-14T09:00:00.000Z",
    updatedAt: "2026-06-14T09:00:00.000Z",
    translations: {
      en: {
        title: "Secure JWT Authentication: Principles That Matter",
        description:
          "A concise security guide covering token lifetime, refresh flows, password storage, and authorization boundaries.",
        category: "security",
        detail: `<h2>Authentication and authorization are different</h2><p>Authentication answers who the user is. Authorization answers what that user may do. A valid token should never automatically grant access to every resource.</p><h2>Keep access tokens short-lived</h2><p>Short access-token lifetimes reduce the impact of theft. A refresh flow can issue a new access token after validating a refresh token, device state, and revocation policy.</p><h2>Never store passwords directly</h2><p>Use a slow, adaptive password hash such as Argon2 or bcrypt with an appropriate cost factor. Plaintext passwords and reversible encryption are not acceptable substitutes.</p><h2>Check the resource owner</h2><p>Role checks alone are not enough. An endpoint must also confirm that the requested record belongs to the current user or that the user has an explicit administrative capability.</p>`,
      },
      mm: {
        title: "Secure JWT Authentication အတွက် အရေးကြီးတဲ့ Principle များ",
        description:
          "Token lifetime၊ refresh flow၊ password သိမ်းဆည်းမှုနဲ့ authorization boundary တွေကို လုံခြုံအောင်ထားဖို့ အခြေခံလမ်းညွှန်။",
        category: "security",
        detail: `<h2>Authentication နဲ့ authorization မတူပါ</h2><p>Authentication က user ဘယ်သူလဲဆိုတာ ဖြေပြီး authorization က အဲဒီ user ဘာလုပ်ခွင့်ရှိလဲဆိုတာ ဖြေပါတယ်။ Token မှန်တယ်ဆိုတာနဲ့ resource အားလုံးကို access ပေးလို့မရပါဘူး။</p><h2>Access token ကို အချိန်တိုတိုထားပါ</h2><p>Access token သက်တမ်းတိုရင် ခိုးယူခံရတဲ့အခါ ထိခိုက်မှုလျော့ပါတယ်။ Refresh token၊ device state နဲ့ revocation policy ကို စစ်ပြီး access token အသစ် ထုတ်ပေးနိုင်ပါတယ်။</p><h2>Password ကို တိုက်ရိုက်မသိမ်းပါနဲ့</h2><p>Argon2 ဒါမှမဟုတ် bcrypt လို slow adaptive password hash ကို သင့်တော်တဲ့ cost factor နဲ့ သုံးပါ။ Plaintext password နဲ့ ပြန်ဖော်လို့ရတဲ့ encryption က လက်ခံနိုင်တဲ့အစားထိုးမဟုတ်ပါဘူး။</p><h2>Resource ပိုင်ရှင်ကို စစ်ပါ</h2><p>Role check တစ်ခုတည်းနဲ့ မလုံလောက်ပါဘူး။ Requested record က လက်ရှိ user ပိုင်တာလား ဒါမှမဟုတ် admin capability ရှိတာလားဆိုတာပါ endpoint က စစ်ရပါမယ်။</p>`,
      },
    },
  },
  {
    id: "testing-pyramid-modern-javascript",
    image: "/logo.png",
    createdAt: "2026-06-07T09:00:00.000Z",
    updatedAt: "2026-06-07T09:00:00.000Z",
    translations: {
      en: {
        title: "Using the Testing Pyramid in Modern JavaScript Projects",
        description:
          "How unit, integration, and end-to-end tests can work together to provide confidence without creating a slow and fragile test suite.",
        category: "testing",
        detail: `<h2>Different tests answer different questions</h2><p>Unit tests check a small function in isolation. Integration tests verify that multiple modules work together. End-to-end tests validate a real user journey through the running application.</p><h2>Keep the base fast</h2><p>Most business rules should be covered by quick unit tests. They are cheap to run locally and make failures easy to diagnose. Use integration tests for database queries, API contracts, and important boundaries.</p><h2>Choose end-to-end tests carefully</h2><p>Browser tests are valuable for login, checkout, or other critical flows, but they are slower and more sensitive to environment changes. A small set of stable journeys is better than testing every visual detail through a browser.</p><h2>Test behavior, not implementation</h2><p>Assertions should describe what a user or API consumer can observe. Tests that depend on private variables or exact component structure become expensive whenever the implementation improves.</p>`,
      },
      mm: {
        title: "Modern JavaScript Project တွေမှာ Testing Pyramid အသုံးချနည်း",
        description:
          "Unit၊ integration နဲ့ end-to-end test တွေကို ပေါင်းစပ်ပြီး နှေးကွေးပြီး ပျက်လွယ်တဲ့ test suite မဖြစ်ဘဲ ယုံကြည်မှုရအောင် တည်ဆောက်နည်း။",
        category: "testing",
        detail: `<h2>Test အမျိုးအစားတိုင်းက မေးခွန်းမတူပါ</h2><p>Unit test က function အသေးတစ်ခုကို သီးခြားစစ်ပါတယ်။ Integration test က module အများကြား ပူးပေါင်းအလုပ်လုပ်မှုကို စစ်ပါတယ်။ End-to-end test က running application ထဲမှာ user journey အမှန်ကို စစ်ပါတယ်။</p><h2>အောက်ခြေကို မြန်အောင်ထားပါ</h2><p>Business rule အများစုကို မြန်တဲ့ unit test နဲ့ cover လုပ်ပါ။ Local မှာ run ရလွယ်ပြီး failure ကိုလည်း ရှာဖွေရလွယ်ပါတယ်။ Database query၊ API contract နဲ့ အရေးကြီး boundary တွေအတွက် integration test သုံးပါ။</p><h2>End-to-end test ကို ရွေးချယ်သုံးပါ</h2><p>Login နဲ့ အရေးကြီးတဲ့ flow တွေအတွက် browser test က အသုံးဝင်ပေမယ့် နှေးပြီး environment ပြောင်းလဲမှုကို ခံစားလွယ်ပါတယ်။ Stable journey အနည်းငယ်က visual detail အားလုံးကို browser နဲ့ စမ်းတာထက် ပိုကောင်းပါတယ်။</p><h2>Implementation မဟုတ်ဘဲ behavior ကို test လုပ်ပါ</h2><p>Assertion တွေက user ဒါမှမဟုတ် API consumer မြင်နိုင်တဲ့ အကျိုးရလဒ်ကို ဖော်ပြသင့်ပါတယ်။ Private variable နဲ့ component structure အတိအကျကို မှီခိုတဲ့ test တွေက implementation တိုးတက်တိုင်း ပြင်ရခက်လာပါတယ်။</p>`,
      },
    },
  },
  {
    id: "building-ai-assistant-responsibly",
    image: "/logo.png",
    createdAt: "2026-05-31T09:00:00.000Z",
    updatedAt: "2026-05-31T09:00:00.000Z",
    translations: {
      en: {
        title: "Building a Useful AI Assistant Inside a Web App",
        description:
          "A practical architecture for context, streaming responses, safe boundaries, and a user experience that remains helpful when the model is uncertain.",
        category: "ai",
        detail: `<h2>Give the model a focused context</h2><p>An assistant is more useful when it receives a small, curated profile or document context instead of an entire codebase. Keep the context current, structured, and limited to information the user should be allowed to see.</p><h2>Stream the response</h2><p>Streaming makes the interface feel responsive and lets users stop an unhelpful answer early. The server should still handle timeouts, cancellation, rate limits, and provider errors explicitly.</p><h2>Design for uncertainty</h2><p>Prompt instructions cannot guarantee perfect answers. Link answers to trusted source material where possible, avoid making claims about data the system has not received, and provide a clear path to contact a human.</p><h2>Protect the boundary</h2><p>Never place provider credentials in browser code. Validate incoming messages, limit request size, log failures without storing sensitive content unnecessarily, and apply abuse controls before the endpoint becomes public.</p>`,
      },
      mm: {
        title: "Web App အတွင်းမှာ အသုံးဝင်တဲ့ AI Assistant တည်ဆောက်နည်း",
        description:
          "Context၊ streaming response၊ လုံခြုံတဲ့ boundary နဲ့ model မသေချာတဲ့အခါမှာပါ အသုံးဝင်နေစေမယ့် AI assistant architecture လက်တွေ့လမ်းညွှန်။",
        category: "ai",
        detail: `<h2>Model ကို အာရုံစိုက်ထားတဲ့ context ပေးပါ</h2><p>Codebase တစ်ခုလုံးပေးတာထက် စနစ်တကျရွေးထားတဲ့ profile ဒါမှမဟုတ် document context အနည်းငယ်ပေးတာက ပိုအသုံးဝင်ပါတယ်။ Context ကို update ဖြစ်အောင်ထားပြီး user မြင်ခွင့်ရှိတဲ့အချက်အလက်ပဲ ထည့်ပါ။</p><h2>Response ကို stream လုပ်ပါ</h2><p>Streaming က interface ကို တုံ့ပြန်မြန်သလို ခံစားရစေပြီး အသုံးမဝင်တဲ့အဖြေကို အစောပိုင်းမှာ ရပ်နိုင်စေပါတယ်။ Server ဘက်မှာ timeout၊ cancellation၊ rate limit နဲ့ provider error တွေကို စီမံထားရပါမယ်။</p><h2>မသေချာမှုအတွက် design လုပ်ပါ</h2><p>Prompt instruction တစ်ခုတည်းနဲ့ အဖြေတိုင်းမှန်မယ်လို့ မအာမခံနိုင်ပါဘူး။ ရနိုင်တဲ့အခါ trusted source နဲ့ ချိတ်ပေးပြီး system မရရှိထားတဲ့ data ကို မခန့်မှန်းပါနဲ့။</p><h2>Boundary ကို ကာကွယ်ပါ</h2><p>Provider credential ကို browser code ထဲ မထည့်ပါနဲ့။ Incoming message နဲ့ request size ကို validate လုပ်ပြီး sensitive content မလိုအပ်ဘဲ မသိမ်းပါနဲ့။ Public endpoint ဖြစ်လာမီ abuse control ထည့်ပါ။</p>`,
      },
    },
  },
  {
    id: "flutter-react-native-mobile-architecture",
    image: "/logo.png",
    createdAt: "2026-05-24T09:00:00.000Z",
    updatedAt: "2026-05-24T09:00:00.000Z",
    translations: {
      en: {
        title: "Choosing a Mobile Architecture for Flutter and React Native",
        description:
          "Compare feature-based organization, state boundaries, offline behavior, and API layers when building a maintainable cross-platform app.",
        category: "mobile",
        detail: `<h2>Organize by feature, not only by file type</h2><p>Putting every screen, hook, and service into one global folder becomes difficult as the app grows. Feature-based modules keep related UI, state, validation, and API logic close together.</p><h2>Make state ownership explicit</h2><p>Local form state should not become global state by accident. Keep transient UI state near the screen, while shared session, cache, and offline data belong in a deliberate store or query layer.</p><h2>Design for unreliable networks</h2><p>Mobile users change networks, background apps, and lose connectivity. Show clear pending states, retry safely, cache useful data, and make mutations idempotent whenever possible.</p><h2>Keep the API contract stable</h2><p>Mobile clients can remain installed for months. Backends should evolve compatibly, document breaking changes, and use versioned contracts when a migration cannot be avoided.</p>`,
      },
      mm: {
        title: "Flutter နဲ့ React Native အတွက် Mobile Architecture ရွေးချယ်နည်း",
        description:
          "Cross-platform app တည်ဆောက်ရာမှာ feature-based organization၊ state boundary၊ offline behavior နဲ့ API layer တွေကို maintainable ဖြစ်အောင် ချမှတ်နည်း။",
        category: "mobile",
        detail: `<h2>File type အလိုက်ပဲ မခွဲဘဲ feature အလိုက် ခွဲပါ</h2><p>Screen၊ hook နဲ့ service အားလုံးကို global folder တစ်ခုထဲထားရင် app ကြီးလာတဲ့အခါ ပြင်ဆင်ရခက်ပါတယ်။ Feature-based module က ဆက်စပ်နေတဲ့ UI၊ state၊ validation နဲ့ API logic တွေကို အနီးမှာထားပေးပါတယ်။</p><h2>State ပိုင်ဆိုင်မှုကို ရှင်းလင်းထားပါ</h2><p>Form ရဲ့ local state ကို မတော်တဆ global state မဖြစ်စေပါနဲ့။ ယာယီ UI state ကို screen အနီးမှာထားပြီး shared session၊ cache နဲ့ offline data ကိုသာ သီးသန့် store ဒါမှမဟုတ် query layer ထဲထားပါ။</p><h2>Network မတည်ငြိမ်တာအတွက် design လုပ်ပါ</h2><p>Mobile user တွေက network ပြောင်းနိုင်ပြီး app ကို background ချနိုင်ပါတယ်။ Pending state နဲ့ retry ကို ရှင်းလင်းစွာပြပြီး data အရေးကြီးတာကို cache လုပ်ပါ။</p><h2>API contract ကို တည်ငြိမ်အောင်ထားပါ</h2><p>Mobile client က လပေါင်းများစွာ install ဖြစ်နေနိုင်ပါတယ်။ Backend ကို compatible ဖြစ်အောင် ပြောင်းလဲပြီး breaking change မရှောင်နိုင်ရင် versioned contract သုံးပါ။</p>`,
      },
    },
  },
  {
    id: "event-driven-system-design-basics",
    image: "/logo.png",
    createdAt: "2026-05-17T09:00:00.000Z",
    updatedAt: "2026-05-17T09:00:00.000Z",
    translations: {
      en: {
        title: "Event-Driven Systems: Start with the Boundary",
        description:
          "Understand events, commands, consumers, and idempotency before introducing queues or asynchronous workflows into a production system.",
        category: "system design",
        detail: `<h2>An event describes something that happened</h2><p>An event such as <code>OrderPlaced</code> should be a durable fact, not an instruction disguised as a fact. Commands ask a component to do something; events tell other components what has already happened.</p><h2>Asynchronous work needs ownership</h2><p>Every consumer should have a clear responsibility, retry policy, and failure destination. A queue does not remove complexity; it moves the complexity into delivery guarantees, monitoring, and recovery.</p><h2>Make consumers idempotent</h2><p>Messages can be delivered more than once. Consumers should use a stable event ID or business key to avoid sending duplicate emails, charging a customer twice, or applying the same state transition repeatedly.</p><h2>Observe the whole journey</h2><p>Track correlation IDs, queue age, processing latency, retry counts, and dead-letter messages. Without these signals, asynchronous failures remain invisible until users report them.</p>`,
      },
      mm: {
        title: "Event-Driven System Design ကို Boundary ကနေ စတင်ပါ",
        description:
          "Production system ထဲကို queue ဒါမှမဟုတ် asynchronous workflow ထည့်မီ event၊ command၊ consumer နဲ့ idempotency အကြောင်း နားလည်ရန်လမ်းညွှန်။",
        category: "system design",
        detail: `<h2>Event က ဖြစ်ပြီးသားအရာကို ဖော်ပြပါတယ်</h2><p><code>OrderPlaced</code> လို event က instruction မဟုတ်ဘဲ ဖြစ်ပြီးသား fact တစ်ခု ဖြစ်သင့်ပါတယ်။ Command က component တစ်ခုခုလုပ်ဖို့ တောင်းဆိုတာဖြစ်ပြီး event က အဲဒီအလုပ်ဖြစ်ပြီးသားကို အခြား component တွေကို ပြောတာဖြစ်ပါတယ်။</p><h2>Asynchronous အလုပ်မှာ ပိုင်ရှင်ရှိရပါမယ်</h2><p>Consumer တိုင်းမှာ တာဝန်၊ retry policy နဲ့ failure destination ရှင်းလင်းရပါမယ်။ Queue က complexity ကို ဖျောက်တာမဟုတ်ဘဲ delivery guarantee၊ monitoring နဲ့ recovery ဆီကို ရွှေ့ပေးတာပါ။</p><h2>Consumer ကို idempotent ဖြစ်အောင်လုပ်ပါ</h2><p>Message တစ်ခုက တစ်ကြိမ်ထက်ပိုပြီး ရောက်လာနိုင်ပါတယ်။ Stable event ID ဒါမှမဟုတ် business key သုံးပြီး email နှစ်ခါပို့တာ၊ customer ကို နှစ်ခါ charge လုပ်တာကို ကာကွယ်ပါ။</p><h2>Journey တစ်ခုလုံးကို စောင့်ကြည့်ပါ</h2><p>Correlation ID၊ queue age၊ processing latency၊ retry count နဲ့ dead-letter message တွေကို track လုပ်ပါ။ ဒီ signal တွေမရှိရင် asynchronous failure ကို user က ပြောမှပဲ သိရပါလိမ့်မယ်။</p>`,
      },
    },
  },
  {
    id: "clean-code-code-review-practices",
    image: "/logo.png",
    createdAt: "2026-05-10T09:00:00.000Z",
    updatedAt: "2026-05-10T09:00:00.000Z",
    translations: {
      en: {
        title: "Clean Code Is a Team Communication Practice",
        description:
          "A code review is more than a style check: it is a way to make intent, trade-offs, and future maintenance costs visible to the whole team.",
        category: "testing",
        detail: `<h2>Review the intent first</h2><p>Before discussing formatting, ask what problem the change solves and whether the design matches that problem. A perfectly formatted solution can still be difficult to maintain.</p><h2>Keep pull requests focused</h2><p>Small pull requests are easier to review, safer to roll back, and more likely to receive useful feedback. Separate refactors from behavior changes when possible.</p><h2>Prefer specific comments</h2><p>Instead of saying that code is unclear, explain which assumption is hidden and suggest a clearer name, boundary, or test. Questions are often more productive than commands.</p><h2>Automate repeatable opinions</h2><p>Formatters, linters, type checking, and tests should handle mechanical feedback. Human reviewers can then focus on architecture, correctness, security, and user impact.</p>`,
      },
      mm: {
        title: "Clean Code ဆိုတာ Team Communication Practice တစ်ခုပါ",
        description:
          "Code review က style စစ်တာထက် ပိုပါတယ်။ Intent၊ trade-off နဲ့ နောက်ပိုင်းထိန်းသိမ်းရမယ့်ကုန်ကျစရိတ်ကို team အားလုံးမြင်နိုင်အောင်လုပ်တဲ့နည်းလမ်းဖြစ်ပါတယ်။",
        category: "testing",
        detail: `<h2>အရင်ဆုံး intent ကို review လုပ်ပါ</h2><p>Format မဆွေးနွေးခင် change က ဘယ်ပြဿနာကို ဖြေရှင်းတာလဲ၊ design က အဲဒီပြဿနာနဲ့ ကိုက်ညီရဲ့လားဆိုတာ မေးပါ။ Format လှပတဲ့ code ကလည်း maintain လုပ်ရခက်နိုင်ပါတယ်။</p><h2>Pull request ကို အာရုံစိုက်ထားပါ</h2><p>Pull request အသေးတွေက review လုပ်ရလွယ်၊ rollback လုပ်ရလုံခြုံပြီး အသုံးဝင်တဲ့ feedback ရနိုင်ခြေ ပိုများပါတယ်။ Refactor နဲ့ behavior change ကို ဖြစ်နိုင်ရင် ခွဲပါ။</p><h2>Comment ကို တိကျအောင်ရေးပါ</h2><p>Code မရှင်းဘူးလို့သာ မပြောဘဲ ဘယ် assumption က ဖုံးကွယ်နေသလဲနဲ့ နာမည်၊ boundary ဒါမှမဟုတ် test ကို ဘယ်လိုရှင်းနိုင်သလဲဆိုတာ ပြောပါ။</p><h2>ထပ်ခါတလဲလဲအမြင်တွေကို automate လုပ်ပါ</h2><p>Formatter၊ linter၊ type check နဲ့ test တွေက mechanical feedback ကို ကိုင်တွယ်ပါစေ။ လူ review က architecture၊ correctness၊ security နဲ့ user impact ကို အာရုံစိုက်နိုင်ပါလိမ့်မယ်။</p>`,
      },
    },
  },
  {
    id: "rest-api-pagination-filtering-design",
    image: "/logo.png",
    createdAt: "2026-05-03T09:00:00.000Z",
    updatedAt: "2026-05-03T09:00:00.000Z",
    translations: {
      en: {
        title: "Designing Pagination and Filtering for REST APIs",
        description:
          "Avoid slow list endpoints by choosing a pagination model, validating filters, and returning metadata clients can use reliably.",
        category: "backend",
        detail: `<h2>Choose pagination for the workload</h2><p>Offset pagination is easy to understand and works well for small, stable datasets. Cursor pagination is more consistent for large or frequently changing lists because it does not repeatedly scan the same page boundary.</p><h2>Validate and constrain filters</h2><p>Allow only known filter fields and sort directions. Put upper bounds on page size, reject expensive combinations, and never concatenate user input directly into SQL or query expressions.</p><h2>Return a predictable response</h2><p>A useful list response includes the data, applied filters, and pagination information such as the next cursor or total count when that count is affordable. Consistency makes frontend components much simpler.</p><h2>Index the real access path</h2><p>Pagination and filtering are database concerns as much as API concerns. Verify that the query plan supports the order and filters used by the endpoint, and measure with realistic data volume.</p>`,
      },
      mm: {
        title: "REST API အတွက် Pagination နဲ့ Filtering Design လုပ်နည်း",
        description:
          "Pagination model ရွေးချယ်ခြင်း၊ filter validate လုပ်ခြင်းနဲ့ client က ယုံကြည်စွာသုံးနိုင်မယ့် metadata ပြန်ပေးခြင်းနဲ့ list endpoint နှေးကွေးမှုကို ရှောင်ရှားနည်း။",
        category: "backend",
        detail: `<h2>Workload အလိုက် pagination ရွေးပါ</h2><p>Offset pagination က နားလည်ရလွယ်ပြီး data အသေးနဲ့ မကြာခဏမပြောင်းတဲ့ list တွေအတွက် သင့်တော်ပါတယ်။ Data ကြီးပြီး အမြဲပြောင်းနေတဲ့ list တွေအတွက် cursor pagination က page boundary တူတူကို ထပ်မဖတ်ရလို့ ပိုတည်ငြိမ်ပါတယ်။</p><h2>Filter ကို validate နဲ့ ကန့်သတ်ပါ</h2><p>သိထားတဲ့ filter field နဲ့ sort direction ပဲ လက်ခံပါ။ Page size အမြင့်ဆုံး သတ်မှတ်ပြီး စရိတ်ကြီးတဲ့ combination ကို ပယ်ပါ။ User input ကို SQL ထဲ တိုက်ရိုက်မပေါင်းပါနဲ့။</p><h2>ခန့်မှန်းရလွယ်တဲ့ response ပြန်ပါ</h2><p>List response ထဲမှာ data၊ အသုံးပြုထားတဲ့ filter နဲ့ next cursor ဒါမှမဟုတ် လိုအပ်ရင် total count ပါသင့်ပါတယ်။ Consistent response က frontend component ကို ပိုရိုးရှင်းစေပါတယ်။</p><h2>အမှန်တကယ်သုံးမယ့် access path ကို index လုပ်ပါ</h2><p>Pagination နဲ့ filtering က API တင်မက database ပြဿနာလည်း ဖြစ်ပါတယ်။ Endpoint သုံးမယ့် order နဲ့ filter ကို query plan က ထောက်ပံ့ရဲ့လား စစ်ပြီး data volume အမှန်နီးစပ်စွာ တိုင်းတာပါ။</p>`,
      },
    },
  },
  {
    id: "observability-for-fullstack-apps",
    image: "/logo.png",
    createdAt: "2026-04-26T09:00:00.000Z",
    updatedAt: "2026-04-26T09:00:00.000Z",
    translations: {
      en: {
        title: "Observability for Full-Stack Applications",
        description:
          "Combine logs, metrics, and traces to understand what users experience instead of guessing from isolated error messages.",
        category: "devops",
        detail: `<h2>Logs explain events</h2><p>Structured logs should answer what happened, where it happened, and which request or user was involved. Include a correlation ID, but avoid writing passwords, tokens, or unnecessary personal data.</p><h2>Metrics reveal patterns</h2><p>Track request rate, error rate, latency percentiles, queue depth, database pool usage, and resource saturation. Percentiles are more informative than an average when a small group of users experiences very slow requests.</p><h2>Traces connect the path</h2><p>A trace can show that a slow page came from an API call, which waited on a database query, which in turn waited on a remote service. This context shortens diagnosis time dramatically.</p><h2>Define an actionable alert</h2><p>Alert on symptoms that need a human response, not every exception. Each alert should have an owner, a runbook, and a clear definition of when the incident is resolved.</p>`,
      },
      mm: {
        title: "Full-Stack Application တွေအတွက် Observability",
        description:
          "ခွဲထွက်နေတဲ့ error message တွေကို ခန့်မှန်းတာမဟုတ်ဘဲ user experience အမှန်ကို နားလည်နိုင်ဖို့ log၊ metric နဲ့ trace တွေ ပေါင်းစပ်အသုံးချနည်း။",
        category: "devops",
        detail: `<h2>Log က ဖြစ်ရပ်ကို ရှင်းပြပါတယ်</h2><p>Structured log က ဘာဖြစ်သလဲ၊ ဘယ်မှာဖြစ်သလဲ၊ ဘယ် request ဒါမှမဟုတ် user နဲ့ ဆက်စပ်သလဲဆိုတာ ဖြေနိုင်သင့်ပါတယ်။ Correlation ID ထည့်ပြီး password၊ token နဲ့ မလိုအပ်တဲ့ personal data မရေးပါနဲ့။</p><h2>Metric က pattern ကို ပြပါတယ်</h2><p>Request rate၊ error rate၊ latency percentile၊ queue depth၊ database pool usage နဲ့ resource saturation ကို track လုပ်ပါ။ Average တစ်ခုတည်းထက် percentile က user အချို့မှာ အလွန်နှေးနေတာကို ပိုဖော်ပြနိုင်ပါတယ်။</p><h2>Trace က လမ်းကြောင်းကို ချိတ်ပေးပါတယ်</h2><p>Page နှေးနေတာက API call ကြောင့်လား၊ database query ကို စောင့်နေရတာလား၊ remote service ကို စောင့်နေရတာလားဆိုတာ trace နဲ့ မြင်နိုင်ပါတယ်။</p><h2>လုပ်ဆောင်နိုင်တဲ့ alert သတ်မှတ်ပါ</h2><p>Exception တိုင်းကို alert မလုပ်ဘဲ လူက တုံ့ပြန်ရမယ့် symptom ကိုသာ alert လုပ်ပါ။ Alert တိုင်းမှာ owner၊ runbook နဲ့ incident ပြီးဆုံးကြောင်း သတ်မှတ်ချက် ရှိသင့်ပါတယ်။</p>`,
      },
    },
  },
] satisfies SerializedBlogPost[];
