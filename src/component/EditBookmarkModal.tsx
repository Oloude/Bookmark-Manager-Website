import { MdClose } from "react-icons/md";

function EditBookmarkModal() {
  return <section className="bg-black/10 backdrop-blur-xs backdrop-brightness-100 flex items-center justify-center fixed inset-0 w-full h-screen z-50 font-manrope">
          <div className="rounded-xl p-6 bg-neutral0 flex flex-col gap-6 relative max-w-142.5 w-full max-h-[90vh] overflow-y-auto">
            <button className="cursor-pointer right-2 top-3 absolute w-8 h-8 rounded-lg border border-neutral400L flex items-center justify-center">
              <MdClose className="w-5 h-5 text-neutral900L" />
            </button>
            <div className="space-y-2">
              <h2 className="text-preset1 text-neutral900L">Edit bookmark</h2>
              <p className="text-preset4M text-neutral800L">
                Update your saved link details — change the title, description, URL, or tags anytime.
              </p>
            </div>
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="text-preset4M text-neutral900L">Title *</label>
                  <input type="text" name="" id="" className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"/>
              </div>
              <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="text-preset4M text-neutral900L">Description *</label>
                  <textarea name="" id="" className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn h-23 resize-none"></textarea>
                  <span className="self-end text-preset5 text-neutral800L">0/280</span>
              </div>
              <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="text-preset4M text-neutral900L">Website URL *</label>
                  <input type="text" name="" id="" className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"/>
              </div>
              <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="text-preset4M text-neutral900L">Tags *</label>
                  <input type="text" name="" id="" placeholder="e.g. Design, Learning, Tools" className="p-3 rounded-lg outline-none border border-neutral500L shadow-archiveBtn"/>
              </div>
  
            </form>
            <div className="flex items-center gap-4 justify-end">
              <button className="px-4 py-3 rounded-lg border border-neutral400L text-preset3M text-neutral900L cursor-pointer">
                Cancel
              </button>
              <button className="px-4 py-3 rounded-lg shadow-archiveBtn bg-teal700 text-preset3M text-neutral0 cursor-pointer">
                Save Bookmark
              </button>
            </div>
          </div>
        </section>;
}

export default EditBookmarkModal;
