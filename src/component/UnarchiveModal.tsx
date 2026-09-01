import { MdClose } from "react-icons/md";
import useBookmark from "../BookmarkState";
import { toast } from "react-toastify";

type UnarchiveProps = {
  id: string;
  handleClose: () => void;
};

function UnarchiveModal({ id, handleClose }: UnarchiveProps) {
  const handleUnarchiveBookmark = useBookmark(
    (state) => state.handleUnarchiveBookmark,
  );

  function handleUnarchive(id: string) {
    handleUnarchiveBookmark(id);
    handleClose();
    toast('Unarchived Bookmark')

  }
  return (
    <section className="bg-black/10 backdrop-blur-xs backdrop-brightness-100 flex items-center justify-center fixed inset-0 w-full h-screen z-50 font-manrope px-4 md:px-8">
      <div className="rounded-xl p-6 bg-neutral0 dark:border-neutral500D dark:bg-neutral800D flex flex-col gap-6 relative max-w-112.5 w-full">
        <button
          onClick={handleClose}
          className="cursor-pointer right-2 top-3 absolute"
        >
          <MdClose className="w-5 h-5 text-neutral900L dark:text-neutral0" />
        </button>
        <div className="space-y-2">
          <h2 className="text-preset1 text-neutral900L dark:text-neutral0">Unarchive bookmark</h2>
          <p className="text-preset4M text-neutral800L dark:text-neutral100D">
            Move this bookmark back to your active list?
          </p>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-3 rounded-lg border border-neutral400L text-preset3M text-neutral900L dark:bg-neutral800D dark:border-neutral400D dark:text-neutral0 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => handleUnarchive(id)}
            className="px-4 py-3 rounded-lg shadow-archiveBtn bg-teal700 text-preset3M text-neutral0 cursor-pointer"
          >
            Unarchive
          </button>
        </div>
      </div>
    </section>
  );
}

export default UnarchiveModal;
