import { MdClose } from "react-icons/md";
import useBookmark from "../BookmarkState";

type DeleteProps = {
  id: string;
  handleClose: () => void;
};

function DeleteModal({ id, handleClose }: DeleteProps) {
  const handleDeleteBookmark = useBookmark(
    (state) => state.handleDeleteBookmark,
  );

  function handleDelete(id: string) {
    handleDeleteBookmark(id);
    handleClose();
  }

  return (
    <section className="bg-black/10 backdrop-blur-xs backdrop-brightness-100 flex items-center justify-center fixed inset-0 w-full h-screen z-50 font-manrope">
      <div className="rounded-xl p-6 bg-neutral0 flex flex-col gap-6 relative max-w-112.5 w-full">
        <button
          onClick={handleClose}
          className="cursor-pointer right-2 top-3 absolute"
        >
          <MdClose className="w-5 h-5 text-neutral900L" />
        </button>
        <div className="space-y-2">
          <h2 className="text-preset1 text-neutral900L">Delete bookmark</h2>
          <p className="text-preset4M text-neutral800L">
            Are you sure you want to delete this bookmark?
          </p>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-3 rounded-lg border border-neutral400L text-preset3M text-neutral900L cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="px-4 py-3 rounded-lg shadow-archiveBtn bg-red800 text-preset3M text-neutral0 cursor-pointer"
          >
            Delete Permanently
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteModal;
