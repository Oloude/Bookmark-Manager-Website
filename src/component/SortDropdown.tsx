import { FaCheck } from "react-icons/fa6";

const sortBy = ["Recently added", "Recently visited", "Most visited"];

function SortDropdown() {
  return (
    <div className="absolute z-10 top-12 right-0 shadow-profile rounded-lg p-2 flex flex-col gap-1 bg-neutral0 border border-neutral100L w-50">
      {sortBy.map((sort) => (
        <button
          key={sort}
          className="rounded-md p-2 flex items-center justify-between text-preset4 text-neutral800L cursor-pointer hover:scale-100 transition-all"
        >
          {sort}
          <FaCheck className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}

export default SortDropdown;
