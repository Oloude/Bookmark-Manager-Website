import useBookmark from "../BookmarkState";
import BookmarkCard from "./BookmarkCard";
import sort from "../utils/sort";
import { useState } from "react";

function Bookmark() {
  const bookmarks = useBookmark((state) => state.bookmarks);
  const activeBookmark = useBookmark((state) => state.activeBookmark);
  const sortBy = useBookmark((state) => state.sortBy);
  const selectedTags = useBookmark((state) => state.selectedTags);
  const searchQuery = useBookmark((state) => state.searchQuery);
  const [shoDropdown, setShowDropdown] = useState<string | null>(null);

  function handleToggleShowDrodown(id: string) {
    setShowDropdown((prev) => (prev === id ? null : id));
  }
  // const [filteredData, setFilteredData] = useState(bookmarks);

  // useEffect(() => {
  //   let arr = filteredData.filter((bookmark) => {
  //     if (activeBookmark === "Archived") return bookmark.isArchived;
  //     return true;
  //   });

  //   setFilteredData(sort(arr, sortBy));
  // }, [activeBookmark]);

  // useEffect(() => {
  //   setFilteredData(sort(filteredData, sortBy));
  // }, [sortBy]);

  const filteredData = sort(
    bookmarks.filter((bookmark) => {
      if (!searchQuery) {
        if (activeBookmark === "Home") {
          return !bookmark.isArchived;
        }
        if (activeBookmark === "Archived") {
          return bookmark.isArchived;
        }
        if (activeBookmark === "Tags") {
          return selectedTags.every((tag) => bookmark.tags.includes(tag));
        }
      } else {
        return (
          // bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          // bookmark.tags.some((tag) =>
          //   tag.toLowerCase().includes(searchQuery.toLowerCase()),
          // )
          bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      return true;
    }),
    sortBy,
  );

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {filteredData.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          {...bookmark}
          handleToggleShowDropdown={() => handleToggleShowDrodown(bookmark.id)}
          showDropdown={shoDropdown}
        />
      ))}
    </section>
  );
}

export default Bookmark;
