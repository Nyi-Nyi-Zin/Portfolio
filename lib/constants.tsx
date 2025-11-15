export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skill", label: "Skill" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "blogs", label: "Blogs" },
] as const;

export type NavLinkId = (typeof navLinks)[number]["id"];
