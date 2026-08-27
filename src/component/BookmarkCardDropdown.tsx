import { BsPin, BsPinAngle } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FiCopy, FiEdit } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

const btns = [
  { title: "Visit", icon: LuSquareArrowOutUpRight },
  { title: "Copy URL", icon: FiCopy },
  { title: "Unpin", icon: BsPinAngle },
  { title: "Edit", icon: FiEdit },
  { title: "Archive", icon: HiOutlineArchiveBox },
  { title: "Pin", icon: BsPin },
  { title: "Unarchive", icon: FaArrowRotateLeft },
  { title: "Delete Permanently", icon: RiDeleteBinLine },
];

function BookmarkCardDropdown() {
  return (
    <div className="flex flex-col gap-1 p-2 rounded-lg bg-neutral0 border border-neutral100L shadow-profile absolute right-4 top-10 z-20">
      {btns.map(({ icon: Icon, title }) => (
        <button
          key={title}
          className="p-2 rounded-md flex items-center gap-2 text-preset4M text-neutral800L"
        >
          <Icon className="w-4 h-4" /> {title}
        </button>
      ))}
    </div>
  );
}

export default BookmarkCardDropdown;
