import { useEffect } from "react";
import useBookmark from "./BookmarkState";
import Header from "./component/Layout/Header";
import Sidebar from "./component/Layout/Sidebar";
import Homepage from "./Pages/Homepage";

function App() {
  const theme = useBookmark((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex h-screen font-manrope">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto bg-neutral100L">
          <Homepage/>
        </main>
      </div>
    </div>
  );
}

export default App;
