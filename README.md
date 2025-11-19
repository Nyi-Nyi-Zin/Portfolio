# Portfolio 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![React](https://img.shields.io/badge/React-20232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB)]()

This is a personal portfolio project built with Next.js and TypeScript. It showcases skills, experience, and projects. The portfolio is designed with a modern, responsive layout using Tailwind CSS, and includes a blog section.

## Table of Contents 📚

- [Features ✨](#features-)
- [Tech Stack 💻](#tech-stack-)
- [Installation 🛠️](#installation-)
- [Usage 🚀](#usage-)
- [Project Structure 📂](#project-structure-)
- [Contributing 🤝](#contributing-)
- [License 📜](#license-)
- [Important Links 🔗](#important-links-)
- [Footer 📝](#footer-)

## Features ✨

- **Modern Design**: Utilizes Tailwind CSS for a clean and responsive design. 🎨
- **Interactive Navigation**: Smooth scrolling and active section highlighting using `useSectionObserver` hook. 🖱️
- **Blog Section**: A dedicated blog section built with Next.js and MDX for content creation. ✍️
- **Theme Toggle**: A theme toggle for switching between light and dark modes. 🌗
- **Animated Text**: An animated text component showcasing skills using `framer-motion`. 🎬
- **Search Functionality**: Blog search functionality implemented using Zustand for state management. 🔍
- **Responsive Layout**: Fully responsive design, ensuring optimal viewing experience across devices.

## Tech Stack 💻

- **Framework**: [Next.js](https://nextjs.org) - for server-side rendering and routing. 🌐
- **Language**: [TypeScript](https://www.typescriptlang.org/) - for type safety and improved code quality. ⚙️
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - for utility-first CSS styling. 💅
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - for accessible and unstyled UI primitives.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) - for simple and scalable state management.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - for declarative animations.
- **Markdown Rendering**: [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - to render markdown files.

## Installation 🛠️

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Nyi-Nyi-Zin/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install # or yarn install or pnpm install or bun install
   ```

## Usage 🚀

1. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. **Open your browser and navigate to** `http://localhost:3000` to view the portfolio.

### Key Features and Usage

- **Navigation**: The `MainNavbar` component handles navigation between different sections of the portfolio. It uses the `useSectionObserver` hook to highlight the active section based on the user's current scroll position.

```typescript
// Example from components/common/header/MainNavbar.tsx
import { useSectionObserver } from "@/hooks/useSectionObserver";

function MainNavbar() {
  const [activeSection, setActiveSection] = useState<NavLinkId>("home");
  const [prevSection, setPrevSection] = useState<NavLinkId | null>(null);

  useSectionObserver(activeSection, setActiveSection, setPrevSection);
}
```

- **Blog**: The blog section displays a list of blog posts fetched from the `content/blogs` directory. It uses `next-mdx-remote` to render MDX content.

```typescript
// Example from app/blogs/[slug]/page.tsx
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogDetailPage(props: PageProps) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  return <MDXRemote source={post.content} />;
}
```

- **Theme Toggle**: The `ThemeToggle` component allows users to switch between light and dark themes. It uses local storage to persist the user's theme preference.

```typescript
// Example from components/theme/theme-toggle.tsx
import { ThemeToggle } from "@/components/theme/theme-toggle";

function MainNavbar() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

## Project Structure 📂

```
Portfolio
├── app                     # Next.js app directory
│   ├── (root)              # Root layout and pages
│   ├── blogs               # Blog related pages
│   ├── fonts.ts            # Font configuration
│   ├── globals.css         # Global CSS styles
│   └── layout.tsx          # Main layout
├── components              # React components
│   ├── blog                # Blog components
│   ├── common              # Common components
│   ├── home                # Home page components
│   ├── ui                  # UI components
│   └── theme               # Theme related components
├── content                 # Blog posts content
├── hooks                   # Custom React hooks
├── lib                     # Utility functions and constants
├── public                  # Public assets
├── store                   # Zustand store
├── types                   # TypeScript types
├── utils                   # Utility functions
├── .eslintrc.json        # ESLint configuration
├── components.json       # Components configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Contributing 🤝

Contributions are always welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch with a descriptive name
3. Make your changes
4. Test your changes
5. Commit your changes with a clear message
6. Push your branch to your forked repository
7. Create a pull request

## License 📜

This project is open source and available under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Important Links 🔗

- **Repository**: [https://github.com/Nyi-Nyi-Zin/Portfolio](https://github.com/Nyi-Nyi-Zin/Portfolio)
- **Author's Profile**: Add author profile link here
- **Live Demo**: Add live demo link here

## Footer 📝

---

Repository: [Portfolio](https://github.com/Nyi-Nyi-Zin/Portfolio) | Made with ❤️ by Nyi Nyi Zin

⭐️ [Star](https://github.com/Nyi-Nyi-Zin/Portfolio) the repository

Fork, like, star, and raise issues to help improve this project! 🙏

---
