import useBookmark from "../BookmarkState";
import BookmarkCard from "./BookmarkCard";

function Bookmark() {
  const bookmarks = useBookmark(state => state.bookmarks)
  return <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {
bookmarks.map(bookmark => <BookmarkCard key={bookmark.id} {...bookmark} />)
    }
  </section>;
}

export default Bookmark;
