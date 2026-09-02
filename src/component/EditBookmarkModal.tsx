import { MdClose } from "react-icons/md";
import useBookmark from "../BookmarkState";
import { useState } from "react";
import getFavicon from "../utils/getFavicon";
import { toast } from "react-toastify";

type EdiModalProps = {
  id: string;
  handleClose: () => void;
};

function EditBookmarkModal({ id, handleClose }: EdiModalProps) {
  const bookmarks = useBookmark((state) => state.bookmarks);
  const bookmark = bookmarks.find((b) => b.id === id);
  const handleEditBookmark = useBookmark((state) => state.handleEditBookmark);

  const [formData, setFormData] = useState({
    title: bookmark?.title ?? "",
    description: bookmark?.description ?? "",
    url: bookmark?.url ?? "",
    tags: bookmark?.tags?.join(", ") ?? "",
  });

  const [formDataError, setFormDataError] = useState({
    title: "",
    description: "",
    url: "",
    tags: "",
  });

  function handleFormDataChange(propTitle: string, value: string) {
    setFormData((prev) => ({ ...prev, [propTitle]: value }));
  }

  function handleEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!bookmark) return;

    let error = {
      title: "",
      description: "",
      url: "",
      tags: "",
    };

    if (formData.description.length > 280) {
      error.description = "Description is too long";
    }
    if (!formData.description.trim()) {
      error.description = "Description can't be empty";
    }
    if (!formData.title.trim()) {
      error.title = "Title can't be empty";
    }
    if (!formData.url.trim()) {
      error.url = "Website Url can't be empty";
    }
    if (!formData.tags.trim()) {
      error.tags = "Tags can't be empty";
    }

    setFormDataError(error);

    if (error.description || error.tags || error.url || error.title) {
      return;
    }

    let title = formData.title.trim();
    let url = formData.url.trim();
    let description = formData.description.trim();
    let tags = formData.tags.trim().split(",");
    let favicon = getFavicon(url);

    let editedBookmark = {
      ...bookmark,
      title,
      url,
      description,
      tags,
      favicon,
    };

    handleEditBookmark(editedBookmark);
    handleClose();
    toast("Edited Bookmark");
  }

  return (
    <section className="bg-black/10 backdrop-blur-xs backdrop-brightness-100 flex items-center justify-center fixed inset-0 w-full h-screen z-50 font-manrope">
      <div className="rounded-xl p-6 bg-neutral0 flex flex-col gap-6 relative max-w-142.5 w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="cursor-pointer right-2 top-3 absolute w-8 h-8 rounded-lg border border-neutral400L flex items-center justify-center"
        >
          <MdClose className="w-5 h-5 text-neutral900L" />
        </button>
        <div className="space-y-2">
          <h2 className="text-preset1 text-neutral900L">Edit bookmark</h2>
          <p className="text-preset4M text-neutral800L">
            Update your saved link details — change the title, description, URL,
            or tags anytime.
          </p>
        </div>
        <form
          id="bookmark-form"
          onSubmit={handleEdit}
          action=""
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-preset4M text-neutral900L">
              Title *
            </label>
            <input
              value={formData.title}
              onChange={(e) => handleFormDataChange("title", e.target.value)}
              type="text"
              name=""
              id=""
              className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"
            />
            {formDataError.title && (
              <span className="text-preset5 text-red600">
                {formDataError.title}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-preset4M text-neutral900L">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                handleFormDataChange("description", e.target.value)
              }
              name=""
              id=""
              className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn h-23 resize-none"
            ></textarea>
            {formDataError.description && (
              <span className="text-preset5 text-red600">
                {formDataError.description}
              </span>
            )}
            <span
              className={`self-end text-preset5  ${
                formData.description.length > 280
                  ? "text-red600"
                  : "text-neutral800L dark:text-neutral100D"
              }`}
            >
              {formData.description.length}/280
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-preset4M text-neutral900L">
              Website URL *
            </label>
            <input
              value={formData.url}
              onChange={(e) => handleFormDataChange("url", e.target.value)}
              type="text"
              name=""
              id=""
              className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"
            />
            {formDataError.url && (
              <span className="text-preset5 text-red600">
                {formDataError.url}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-preset4M text-neutral900L">
              Tags *
            </label>
            <input
              value={formData.tags}
              onChange={(e) => handleFormDataChange("tags", e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="e.g. Design, Learning, Tools"
              className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"
            />
            {formDataError.tags && (
              <span className="text-preset5 text-red600">
                {formDataError.tags}
              </span>
            )}
          </div>
        </form>
        <div className="flex items-center gap-4 justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-3 rounded-lg border border-neutral400L text-preset3M text-neutral900L cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="bookmark-form"
            className="px-4 py-3 rounded-lg shadow-archiveBtn bg-teal700 text-preset3M text-neutral0 cursor-pointer"
          >
            Save Bookmark
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditBookmarkModal;
