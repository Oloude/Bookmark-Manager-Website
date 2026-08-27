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
  bookmarks: BookmarkType[];
  activeBookmark: string;
  sortBy : string;
  handleThemeChange: () => void;
  handleActiveBookmarkChange: (active: string) => void;
  handleSortByChange :(sort:string) => void;
};

const useBookmark = create<BookmarkState>((set) => ({
  theme: "light",
  bookmarks: data.bookmarks,
  activeBookmark: "Home",
  sortBy : 'Recently added',
  handleThemeChange: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  handleActiveBookmarkChange: (active) => set({ activeBookmark: active }),
  handleSortByChange : (sort) => set({sortBy : sort}),
}));

export default useBookmark;
