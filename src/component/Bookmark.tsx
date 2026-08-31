
import useBookmark from "../BookmarkState";
import BookmarkCard from "./BookmarkCard";
import sort from "../utils/sort";

function Bookmark() {
  const bookmarks = useBookmark((state) => state.bookmarks);
  const activeBookmark = useBookmark((state) => state.activeBookmark);
  const sortBy = useBookmark((state) => state.sortBy);
  const selectedTags = useBookmark(state => state.selectedTags)

  // const [filteredData, setFilteredData] = useState(bookmarks);

  // useEffect(() => {
  //   let arr = filteredData.filter((bookmark) => {
  //     if (activeBookmark === "Archived") return bookmark.isArchived;
  //     return true;
  //   });

  //   setFilteredData(sort(arr, sortBy));
  // }, [activeBookmark]);

  // useEffect(() => {
  //   setFilteredData(sort(filteredData, sortBy));
  // }, [sortBy]);

  const filteredData = sort(
    bookmarks.filter((bookmark) => {
      if (activeBookmark === "Archived") {
        return bookmark.isArchived;
      }
      if(activeBookmark === 'Tags'){
       return selectedTags.every((tag) => bookmark.tags.includes(tag));
      }

      return true;
    }),
    sortBy,
  );

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {filteredData.map((bookmark) => (
        <BookmarkCard key={bookmark.id} {...bookmark} />
      ))}
    </section>
  );
}

export default Bookmark;
