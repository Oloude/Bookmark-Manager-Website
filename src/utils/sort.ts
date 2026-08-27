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

export default function sort(filteredData: BookmarkProps[], sortBy: string) {
  let arr: typeof filteredData = [];
  if (sortBy === "Recently added") {
    arr = filteredData.toSorted((a, b) => {
      let aDate = new Date(a.createdAt).getTime();
      let bDate = new Date(b.createdAt).getTime();

      return bDate - aDate;
    });
  }
  if (sortBy === "Recently visited") {
    arr = filteredData.toSorted((a, b) => {
      let aDate = new Date(a.lastVisited ?? 0).getTime();
      let bDate = new Date(b.lastVisited ?? 0).getTime();

      return bDate - aDate;
    });
  }
  if (sortBy === "Most visited") {
    arr = filteredData.toSorted((a, b) => b.visitCount - a.visitCount);
  }
  return arr;
}
