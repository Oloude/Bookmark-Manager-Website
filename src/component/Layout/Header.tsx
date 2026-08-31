import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import ProfileDropdown from "../ProfileDropdown";
import AddBookmarkModal from "../AddBookmarkModal";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropwdown, setShowProfileDropdown] = useState(false);
  const [showAddBookmarkModal, setShowAddBookmarkModal] = useState(false);

  function handleToggleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleToggleProfileDropwdown() {
    setShowProfileDropdown((prev) => !prev);
  }

  function handleOpenAddBookmarkModal() {
    setShowAddBookmarkModal(true);
  }

  function handleCloseAddBookmarkModal() {
    setShowAddBookmarkModal(false);
  }

  return (
    <>
      {showAddBookmarkModal && (
        <AddBookmarkModal handleClose={handleCloseAddBookmarkModal} />
      )}
      <header className="w-full min-w-0 px-4 py-3 md:px-8 md:py-4 flex items-center gap-4 bg-neutral0 dark:bg-neutral800D border-b border-b-neutral100L dark:border-b-neutral500D">
        {/* Left */}
        <div className="flex items-center gap-2.5 md:gap-4 flex-1 min-w-0">
          <button
            onClick={handleToggleShowMenu}
            className="w-10 h-10 md:w-11 md:h-11 flex lg:hidden items-center justify-center border border-neutral400L dark:border-neutral400D bg-neutral800D rounded-lg cursor-pointer shrink-0"
          >
            <IoIosMenu className="w-5 h-5 text-neutral800L dark:text-neutral0" />
          </button>

          <div className="border border-neutral100L dark:border-neutral500D dark:bg-neutral600D rounded-lg flex items-center gap-2 px-3 py-2.5 md:py-3 shadow-input w-full max-w-80 min-w-0">
            <button className="cursor-pointer shrink-0">
              <CiSearch className="w-5 h-5 text-neutral800L dark:text-neutral100D" />
            </button>

            <input
              type="text"
              placeholder="Search by title..."
              className="outline-none text-neutral800L dark:text-neutral100D text-preset4M w-full min-w-0"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2.5 md:gap-4 shrink-0">
          <button
            onClick={handleOpenAddBookmarkModal}
            className="bg-teal700 sm:px-4 sm:py-3 rounded-lg text-preset3M text-neutral0 hidden md:flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <GoPlus className="w-4 h-4" />
            Add Bookmark
          </button>

          <button
            onClick={handleOpenAddBookmarkModal}
            className="bg-teal700 shrink-0 p-2.5 rounded-lg text-preset3M text-neutral0 md:hidden cursor-pointer"
          >
            <GoPlus className="w-4 h-4" />
          </button>

          <button
            onClick={handleToggleProfileDropwdown}
            className={`cursor-pointer shrink-0 ${
              showProfileDropwdown
                ? "outline-neutral900L outline-2 rounded-full outline-offset-2"
                : ""
            }`}
          >
            <img
              src="/image-avatar.webp"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </button>
        </div>
        {showProfileDropwdown && <ProfileDropdown />}
        <div
          className={`bg-black/10 backdrop-blur-xs backdrop-brightness-80 w-full transition-all duration-500 ease-in-out fixed lg:hidden top-0 left-0 z-30 h-screen ${showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
        >
          {" "}
          <MobileSidebar handleToggleShowMenu={handleToggleShowMenu} />
        </div>
      </header>
    </>
  );
}

export default Header;
