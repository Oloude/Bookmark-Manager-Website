import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import ProfileDropdown from "../ProfileDropdown";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropwdown, setShowProfileDropdown] = useState(false)

  function handleToggleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleToggleProfileDropwdown(){
   setShowProfileDropdown(prev => !prev)
  }
  return (
    <header className="px-4 py-3 md:px-8 md:py-4 flex items-center justify-between gap-4 bg-neutral0 border-b border-b-neutral100L">
      <div className="flex items-center gap-2.5 ">
        <button
          onClick={handleToggleShowMenu}
          className="w-10 h-10 flex lg:hidden items-center justify-center border border-neutral400L rounded-lg cursor-pointer shrink-0"
        >
          <IoIosMenu className="w-5 h-5 text-neutral800L" />
        </button>
        <div className="border border-neutral100L rounded-lg flex items-center gap-2 p-3 shadow-input w-full md:w-80">
          <button className="cursor-pointer shrink-0">
            <CiSearch className="w-5 h-5 text-neutral800L" />
          </button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by title..."
            className="outline-none text-neutral800L text-preset4M flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-2.5 lg:gap-4">
        <button className="bg-teal700 sm:px-4 sm:py-3 rounded-lg text-preset3M text-neutral0 hidden md:flex items-center gap-2">
          {" "}
          <GoPlus className="w-4 h-4" /> Add Bookmark
        </button>
        <button className="bg-teal700 p-2.5 rounded-lg text-preset3M text-neutral0 md:hidden">
          {" "}
          <GoPlus className="w-4 h-4" />{" "}
        </button>
        <button onClick={handleToggleProfileDropwdown} className={`cursor-pointer ${showProfileDropwdown ? 'outline-neutral900L outline-2 rounded-full outline-offset-2' : ''}`}>
             <img
          src="/image-avatar.webp"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        </button>
       

      </div>
      {showProfileDropwdown && <ProfileDropdown/>}
      <div
        className={`bg-black/10 backdrop-blur-xs backdrop-brightness-80 w-full transition-all duration-500 ease-in-out fixed lg:hidden top-0 left-0 z-30 h-screen ${
          showMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {" "}
        <MobileSidebar handleToggleShowMenu={handleToggleShowMenu} />
      </div>
    </header>
  );
}

export default Header;
