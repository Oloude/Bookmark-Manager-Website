import { create } from "zustand";
import data from "../src/data.json";

type BookmarkType = {
  id: string;
  title: string;
  url: string;
  favicon: string;
  description: string;
  tags: string[];
  pinned: boolean;
  isArchived: boolean;
  visitCount: number;
  createdAt: string;
  lastVisited: string | null;
};

type BookmarkState = {
  theme: "light" | "dark";
  handleThemeChange: () => void;
  bookmarks: BookmarkType[];
};

const useBookmark = create<BookmarkState>((set) => ({
  theme: "light",
  bookmarks: data.bookmarks,
  handleThemeChange: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useBookmark;
