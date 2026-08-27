import { BsPin } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import formateDate from "../utils/formatDate";
import { useState } from "react";
import BookmarkCardDropdown from "./BookmarkCardDropdown";

type BookmarkProps = {
  id: string;
  title: string;
  url: string;
  favicon: string;
  description: string;
  tags: string[];
  pinned: boolean;
  isArchived: boolean;
  visitCount: number;
  createdAt: string;
  lastVisited: string | null;
};

function BookmarkCard({
  id,
  title,
  url,
  favicon,
  description,
  tags,
  pinned,
  isArchived,
  visitCount,
  lastVisited,
  createdAt,
}: BookmarkProps) {
  const [shoDropdown, setShowDropdown] = useState(false);

  function handleToggleShowDrodown() {
    setShowDropdown((prev) => !prev);
  }

  return (
    <div className="rounded-xl shadow-card bg-neutral0 border border-neutral300L relative">
      {shoDropdown && <BookmarkCardDropdown isArchived={isArchived} pinned={pinned} />}
      <div className=" p-4 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-neutral100L overflow-hidden">
              <img src={favicon} alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="text-preset2 text-neutral900L">{title}</h3>
              <p className="text-preset5 text-neutral800L">{url}</p>
            </div>
          </div>
          <button
            onClick={handleToggleShowDrodown}
            className="border border-neutral400L flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer hover:scale-105 transition-all hover:outline-neutral900L hover:outline-2 hover:outline-offset-2"
          >
            <FaEllipsisVertical className="text-neutral900L w-5 h-5" />
          </button>
        </div>
        <hr className="text-neutral300L" />
        <p className="text-preset4M text-neutral800L">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div className="border-t border-t-neutral300L px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-preset5 text-neutral800L">
            <IoEyeOutline className="w-3 h-3" />
            {visitCount}
          </div>
          <div className="flex items-center gap-1.5 text-preset5 text-neutral800L">
            <GoClock className="w-3 h-3" />
            {lastVisited === null ? 'Never' : formateDate(lastVisited)}
          </div>
          <div className="flex items-center gap-1.5 text-preset5 text-neutral800L">
            <CiCalendar className="w-3 h-3" />
            {formateDate(createdAt)}
          </div>
        </div>
        {pinned && <BsPin className="w-4 h-4 text-neutral800L" />}
      </div>
    </div>
  );
}

export default BookmarkCard;

function Tag({ tag }: { tag: string }) {
  return (
    <div className="px-2 py-0.5 rounded-md text-neutral800L bg-neutral100L text-preset5">
      {tag}
    </div>
  );
}
