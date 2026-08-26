import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";

type SidebarProps = {
    handleToggleShowMenu : ()=> void
}

const topNav = [
  { icon: RiHome6Line, title: "Home" },
  { icon: HiOutlineArchiveBox, title: "Archived" },
];


function MobileSidebar({handleToggleShowMenu} : SidebarProps) {
  return <div className="w-74 border-r border-r-neutral100L flex flex-col gap-4 bg-neutral0 h-full relative">
    <button onClick={handleToggleShowMenu} className="absolute top-2 right-2 cursor-pointer"><IoMdClose className="w-6 h-6 text-neutral900L" /></button>
      <div className="p-5 pb-2.5">
        <img src="/logo-light-theme.svg" alt="" />
      </div>
      <div className="px-4 pb-5 flex flex-col gap-4">
        <div className="flex flex-col">
          {topNav.map(({ icon: Icon, title }, i) => (
            <button
              key={title}
              className={`rounded-md px-3 py-2 flex items-center gap-2 text-preset3M  ${i === 0 ? "bg-neutral100L text-neutral900L" : "text-neutral800L"}`}
            >
              <Icon />
              {title}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="px-3 pb-1 text-preset5 font-bold text-neutral800L">
            Tags
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 accent-neutral900L"
                />
                <h4 className="text-preset3M text-neutral800L">Ai</h4>
              </div>
              <div className="w-5.25 h-5.25 flex items-center justify-center rounded-full bg-neutral100L border border-neutral300L text-preset5 text-neutral800L">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default MobileSidebar;
