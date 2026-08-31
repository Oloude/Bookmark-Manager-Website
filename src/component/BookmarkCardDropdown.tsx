import { BsPin, BsPinAngle } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FiCopy, FiEdit } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ArchiveModal from "./ArchiveModal";
import UnarchiveModal from "./UnarchiveModal";
import DeleteModal from "./DeleteModal";

type DropdownProps = {
  isArchived: boolean;
  pinned: boolean;
  id: string;
  handleCloseBookmarkDropdown: () => void;
};

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

function BookmarkCardDropdown({
  isArchived,
  pinned,
  id,
  handleCloseBookmarkDropdown,
}: DropdownProps) {
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showUnarchiveModal, setShowUnarchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleClick(title: string) {
    switch (title) {
      case "Archive":
        setShowArchiveModal(true);
        break;
      case "Unarchive":
        setShowUnarchiveModal(true);
        break;
      case "Delete Permanently":
        setShowDeleteModal(true);
        break;
    }
  }

  return (
    <>
      {showArchiveModal && (
        <ArchiveModal id={id} handleClose={() => setShowArchiveModal(false)} />
      )}
      {showUnarchiveModal && (
        <UnarchiveModal
          id={id}
          handleClose={() => setShowUnarchiveModal(false)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal id={id} handleClose={() => setShowDeleteModal(false)} />
      )}
      <div className="flex flex-col gap-1 p-2 rounded-lg bg-neutral0 dark:bg-neutral600D border border-neutral100L dark:border-neutral500D shadow-profile absolute right-4 top-10 z-20">
        {btns.map(({ icon: Icon, title }) => (
          <button
            key={title}
            onClick={() => handleClick(title)}
            className={`p-2 rounded-md items-center gap-2 text-preset4M text-neutral800L dark:text-neutral100D ${
              isArchived &&
              (title === "Archive" ||
                title === "Unpin" ||
                title === "Pin" ||
                title === "Edit")
                ? "hidden"
                : "flex"
            } ${pinned && title === "Pin" ? "hidden" : "flex"}
          ${!pinned && title === "Unpin" ? "hidden" : "flex"}
          ${
            !isArchived &&
            (title === "Delete Permanently" || title === "Unarchive")
              ? "hidden"
              : "flex"
          }
          `}
          >
            <Icon className="w-4 h-4" /> {title}
          </button>
        ))}
      </div>
    </>
  );
}

export default BookmarkCardDropdown;
