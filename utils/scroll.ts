export function scrollToSection(id: string, navbarHeight = 60) {
  const section = document.getElementById(id);
  if (!section) return;

  const offset =
    section.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
