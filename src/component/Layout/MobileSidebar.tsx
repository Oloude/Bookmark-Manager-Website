import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";
import useBookmark from "../../BookmarkState";

type SidebarProps = {
  handleToggleShowMenu: () => void;
};

const topNav = [
  { icon: RiHome6Line, title: "Home" },
  { icon: HiOutlineArchiveBox, title: "Archived" },
];

function MobileSidebar({ handleToggleShowMenu }: SidebarProps) {
  const theme = useBookmark((state) => state.theme);
  const activeBookmark = useBookmark((state) => state.activeBookmark);
  const handleActiveBookmarkChange = useBookmark(
    (state) => state.handleActiveBookmarkChange,
  );
  const bookmarks = useBookmark((state) => state.bookmarks);
  const selectedTags = useBookmark((state) => state.selectedTags);
  const handleSelectedTags = useBookmark((state) => state.handleSelectedTags);

  const tags = bookmarks.reduce(
    (acc, bookmark) => {
      bookmark.tags.forEach((tag) => (acc[tag] = (acc[tag] | 0) + 1));
      return acc;
    },
    {} as Record<string, number>,
  );

  const tagsArr = Object.entries(tags);

  function handleSelectTag(title: string) {
    handleActiveBookmarkChange("Tags");
    handleSelectedTags(title);
  }
 
  return (
    <div className="w-74 border-r border-r-neutral100L flex flex-col gap-4 bg-neutral0 dark:bg-neutral800D dark:border-r-neutral500D h-full relative">
      <button
        onClick={handleToggleShowMenu}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <IoMdClose className="w-6 h-6 text-neutral900L dark:text-neutral0" />
      </button>
      <div className="p-5 pb-2.5">
        <img
          src={
            theme === "light" ? "/logo-light-theme.svg" : "/logo-dark-theme.svg"
          }
          alt=""
        />
      </div>
      <div className="px-4 pb-5 flex flex-col gap-4  flex-1 min-h-0">
        <div className="flex flex-col">
          {topNav.map(({ icon: Icon, title }) => (
            <button
              key={title}
              onClick={() => handleActiveBookmarkChange(title)}
              className={`rounded-md px-3 py-2 flex items-center gap-2 text-preset3M cursor-pointer  ${activeBookmark === title ? "bg-neutral100L text-neutral900L dark:bg-neutral600D dark:text-neutral0" : "text-neutral800L dark:text-neutral100D"}`}
            >
              <Icon />
              {title}
            </button>
          ))}
        </div>
        <div
          className="flex flex-col overflow-y-auto min-h-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <h3 className="px-3 pb-1 text-preset5 font-bold text-neutral800L dark:text-neutral100D">
            Tags
          </h3>
          <div className="flex flex-col">
            {tagsArr.map(([title, number]) => (
              <div
                key={title}
                className="flex items-center justify-between px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={selectedTags.includes(title)}
                    onChange={() => handleSelectTag(title)}
                    className="w-4 h-4 accent-teal700"
                  />
                  <h4 className="text-preset3M text-neutral800L dark:text-neutral100D">{title}</h4>
                </div>
                <div className="w-5.25 h-5.25 flex items-center justify-center rounded-full bg-neutral100L dark:bg-neutral600D border border-neutral300L dark:border-neutral400D text-preset5 text-neutral800L dark:text-neutral0">
                  {number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
