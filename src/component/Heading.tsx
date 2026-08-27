import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
import SortDropdown from "./SortDropdown";

function Heading() {
  const [shoDropdown, setShowDropdown] = useState(false);

  function handleToggleShowDrodown() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <header className="flex items-center justify-between gap-4 relative">
      <h1 className="text-preset2 text-neutral900L">All bookmarks</h1>
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
