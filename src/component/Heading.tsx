import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import SortDropdown from "./SortDropdown";
import useBookmark from "../BookmarkState";

function Heading() {
  const activeBookmark = useBookmark(state => state.activeBookmark)
  const [shoDropdown, setShowDropdown] = useState(false);

  function handleToggleShowDrodown() {
    setShowDropdown((prev) => !prev);
  }
  let title = 'All bookmarks'

  if(activeBookmark === 'Archived'){
    title = 'Archived bookmarks'
  }
  return (
    <header className="flex items-center justify-between gap-4 relative">
      <h1 className="text-preset2 text-neutral900L">{title}</h1>
      <button
        onClick={handleToggleShowDrodown}
        className="px-3 py-2.5 border border-neutral400L cursor-pointer hover:scale-105 transition-all rounded-lg flex items-center gap-2 bg-neutral0 text-preset3M text-neutral900L"
      >
        <LuArrowUpDown className="w-5 h-5" /> Sort by
      </button>
      {shoDropdown && <SortDropdown />}
    </header>
  );
}

export default Heading;
