import { create } from "zustand";

type SearchState = {
  searchKey: string;
  setSearchKey: (term: string) => void;
};

export const useSearch = create<SearchState>((set) => ({
  searchKey: "",
  setSearchKey: (term) => set({ searchKey: term }),
}));
