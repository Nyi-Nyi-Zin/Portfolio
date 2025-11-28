export const getStoredLang = () => {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("lang") || "en";
};

export const setStoredLang = (lang: "en" | "mm") => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
  }
};
