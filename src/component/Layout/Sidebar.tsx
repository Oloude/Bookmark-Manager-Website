import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiHome6Line } from "react-icons/ri";
import useBookmark from "../../BookmarkState";

const topNav = [
  { icon: RiHome6Line, title: "Home" },
  { icon: HiOutlineArchiveBox, title: "Archived" },
];

function Sidebar() {
  const activeBookmark = useBookmark(state => state.activeBookmark)
  const handleActiveBookmarkChange = useBookmark(state => state.handleActiveBookmarkChange)
  const bookmarks = useBookmark(state => state.bookmarks)

  const tags = bookmarks.reduce((acc, bookmark) =>{
   bookmark.tags.forEach(tag => acc[tag] = (acc[tag] | 0) + 1)
   return acc
  } ,{} as Record<string, number>)

  const tagsArr = Object.entries(tags)



  return (
    <div className="w-74 border-r border-r-neutral100L hidden lg:flex flex-col gap-4 bg-neutral0 h-screen overflow-hidden">
      <div className="p-5 pb-2.5">
        <img src="/logo-light-theme.svg" alt="" />
      </div>
      <div className="px-4 pb-5 flex flex-col gap-4 flex-1 min-h-0">
        <div className="flex flex-col">
          {topNav.map(({ icon: Icon, title }) => (
            <button
              key={title}
              onClick={()=>handleActiveBookmarkChange(title)}
              className={`rounded-md px-3 py-2 flex items-center gap-2 text-preset3M cursor-pointer  ${activeBookmark === title ? "bg-neutral100L text-neutral900L" : "text-neutral800L"}`}
            >
              <Icon />
              {title}
            </button>
          ))}
        </div>
        <div className="flex flex-col overflow-y-auto min-h-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <h3 className="px-3 pb-1 text-preset5 font-bold text-neutral800L">
            Tags
          </h3>
          <div className="flex flex-col">
            {
              tagsArr.map(([title, number]) => <div key={title} className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 accent-neutral900L"
                />
                <h4 className="text-preset3M text-neutral800L">{title}</h4>
              </div>
              <div className="w-5.25 h-5.25 flex items-center justify-center rounded-full bg-neutral100L border border-neutral300L text-preset5 text-neutral800L">
                {number}
              </div>
            </div>)
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
