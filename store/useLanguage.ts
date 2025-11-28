// store/useLanguage.ts
import { create } from "zustand";

type Language = "en" | "mm";

interface LanguageState {
  lang: Language;
  setLang: (l: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  lang:
    (typeof window !== "undefined"
      ? (localStorage.getItem("lang") as Language)
      : "en") || "en",
  setLang: (l) => {
    localStorage.setItem("lang", l);
    set({ lang: l });
  },
}));
