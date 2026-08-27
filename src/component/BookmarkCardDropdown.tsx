import { BsPin, BsPinAngle } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FiCopy, FiEdit } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

type DropdownProps = {
  isArchived : boolean;
  pinned : boolean;
}

const btns = [
  { title: "Visit", icon: LuSquareArrowOutUpRight },
  { title: "Copy URL", icon: FiCopy },
  { title: "Unpin", icon: BsPinAngle },
  { title: "Pin", icon: BsPin },
  { title: "Edit", icon: FiEdit }, 
  { title: "Archive", icon: HiOutlineArchiveBox },
  { title: "Unarchive", icon: FaArrowRotateLeft },
  { title: "Delete Permanently", icon: RiDeleteBinLine },
];

function BookmarkCardDropdown({ isArchived, pinned} : DropdownProps) {
  return (
    <div className="flex flex-col gap-1 p-2 rounded-lg bg-neutral0 border border-neutral100L shadow-profile absolute right-4 top-10 z-20">
      {btns.map(({ icon: Icon, title }) => (
        <button
          key={title}
          className={`p-2 rounded-md items-center gap-2 text-preset4M text-neutral800L ${
            isArchived && (title === 'Archive' || title === 'Unpin' || title === 'Pin' || title === 'Edit') ? 'hidden' : 'flex' 
          } ${
            pinned && title === 'Pin' ? 'hidden' : 'flex' 
          }
          ${
            !pinned && title === 'Unpin' ? 'hidden' : 'flex'
          }
          ${
            !isArchived && (title === 'Delete Permanently' || title === 'Unarchive' ) ? 'hidden' : 'flex'
          }
          `}
        >
          <Icon className="w-4 h-4" /> {title}
        </button>
      ))}
    </div>
  );
}

export default BookmarkCardDropdown;
