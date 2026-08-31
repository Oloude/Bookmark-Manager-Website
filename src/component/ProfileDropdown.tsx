import { FiLogOut } from "react-icons/fi";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { LuPalette } from "react-icons/lu";
import useBookmark from "../BookmarkState";

function ProfileDropdown() {
  const handleThemeChange = useBookmark((state) => state.handleThemeChange);
  const theme = useBookmark((state) => state.theme);

  return (
    <div className="absolute top-17 right-8 border border-neutral100L dark:border-neutral500D rounded-lg shadow-profile w-62 divide-y divide-neutral50 dark:divide-neutral100D z-20 bg-neutral0 dark:bg-neutral600D">
      <div className="px-4 py-3 flex items-center gap-3">
        <img
          src="/image-avatar.webp"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-neutral900L text-preset4 dark:text-neutral0">Emily Carter</h5>
          <p className="text-preset4M text-neutral800L dark:text-neutral100D">emily101@email.com</p>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-preset4M text-neutral800L dark:text-neutral100D">
          <LuPalette className="w-4 h-4" />
          Theme
        </div>
        <button
          onClick={handleThemeChange}
          className="p-0.5 bg-neutral300L dark:bg-neutral500D rounded w-15 h-7.5 flex cursor-pointer dark:text-neutral0"
        >
          <span
            className={` rounded flex-1 flex items-center justify-center ${theme === "light" ? "bg-neutral0 dark:bg-neutral600D" : ""}`}
          >
            <IoSunnyOutline className="w-4 h-4" />
          </span>
          <span
            className={` rounded flex-1 flex items-center justify-center ${theme === "dark" ? "bg-neutral0 dark:bg-neutral600D" : ""}`}
          >
            <IoMoonOutline className="w-4 h-4" />
          </span>
        </button>
      </div>
      <div className="px-4 py-2">
        <button className="flex items-center gap-2 text-preset4M text-neutral800L dark:text-neutral100D">
          <FiLogOut className="w-5 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown;
