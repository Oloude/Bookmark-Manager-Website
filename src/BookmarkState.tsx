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
  sortBy: string;
  selectedTags: string[];
  handleThemeChange: () => void;
  handleActiveBookmarkChange: (active: string) => void;
  handleSortByChange: (sort: string) => void;
  handleSelectedTags: (tag: string) => void;
  handleArchiveBookmark: (id: string) => void;
  handleUnarchiveBookmark: (id: string) => void;
  handleDeleteBookmark: (id: string) => void;
  handleAddNewBookmark : (bookmark : BookmarkType) => void;
  handleVisitBookmark : (id : string) => void;
  handleTogglePinBookmark : (id : string) => void;
};

const useBookmark = create<BookmarkState>((set) => ({
  theme: "light",
  bookmarks: data.bookmarks,
  activeBookmark: "Home",
  sortBy: "Recently added",
  selectedTags: [],
  handleThemeChange: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  handleActiveBookmarkChange: (active) =>
    set((state) => {
      if (active !== "Tags") {
        return { selectedTags: [], activeBookmark: active };
      }
      return { activeBookmark: active };
    }),
  handleSortByChange: (sort) => set({ sortBy: sort }),
  handleSelectedTags: (tag) =>
    set((state) => ({
      // state.selectedTags.includes(tag) ? selectedTags : state.selectedTags.filter(t => t !== tag) : selectedTags: [...state.selectedTags, tag]
      selectedTags: state.selectedTags.includes(tag)
        ? state.selectedTags.filter((item) => item !== tag)
        : [...state.selectedTags, tag],
    })),
  handleArchiveBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, isArchived: true } : bookmark,
      ),
    })),
  handleUnarchiveBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, isArchived: false } : bookmark,
      ),
    })),
  handleDeleteBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
    })),
   handleAddNewBookmark : (bookmark) => set(state => ({bookmarks : [...state.bookmarks, bookmark]})),
   handleVisitBookmark : (id) => set(state => ({bookmarks : state.bookmarks.map(bookmark => bookmark.id ===id ? {...bookmark, visitCount : bookmark.visitCount + 1} : bookmark)})),
   handleTogglePinBookmark : (id) => set(state => ({bookmarks : state.bookmarks.map(bookmark => bookmark.id === id ? {...bookmark, pinned : !bookmark.pinned} : bookmark)}))
}));

export default useBookmark;
