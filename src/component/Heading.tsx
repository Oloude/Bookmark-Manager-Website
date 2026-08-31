import React, { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import SortDropdown from "./SortDropdown";
import useBookmark from "../BookmarkState";

function Heading() {
  const activeBookmark = useBookmark(state => state.activeBookmark)
  const selectedTags = useBookmark(state => state.selectedTags)
  const [shoDropdown, setShowDropdown] = useState(false);

  function handleToggleShowDrodown() {
    setShowDropdown((prev) => !prev);
  }
  // let title<string | React.ReactNode> = 'All bookmarks'
  let title: string | React.ReactNode = "All bookmarks";

  if(activeBookmark === 'Archived'){
    title = 'Archived bookmarks'
  }
  if(activeBookmark === 'Tags'){
    // title = `Bookmarks tagged: ${<span className='text-teal700'>selectedTags.join(', ')</span>}`
     title = (
  <>
    Bookmarks tagged:{" "}
    <span className="text-teal700">
      {selectedTags.join(", ")}
    </span>
  </>
);
  }
  return (
    <header className="flex items-center justify-between gap-4 relative">
      <h1 className="text-preset2 text-neutral900L dark:text-neutral0">{title}</h1>
      <button
        onClick={handleToggleShowDrodown}
        className="px-3 py-2.5 border border-neutral400L dark:border-neutral400D cursor-pointer hover:scale-105 transition-all rounded-lg flex items-center gap-2 bg-neutral0 dark:bg-neutral900D text-preset3M text-neutral900L dark:text-neutral0"
      >
        <LuArrowUpDown className="w-5 h-5" /> Sort by
      </button>
      {shoDropdown && <SortDropdown />}
    </header>
  );
}

export default Heading;
