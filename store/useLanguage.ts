// store/useLanguage.ts
import { create } from "zustand";

type Language = "en" | "mm";

interface LanguageState {
  lang: Language;
  setLang: (l: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: "en",
  setLang: (l) => {
    localStorage.setItem("lang", l);
    set({ lang: l });
  },
}));
