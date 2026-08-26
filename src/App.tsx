import Header from "./component/Layout/Header";
import Sidebar from "./component/Layout/Sidebar";

function App() {
  return <div className="flex h-screen font-manrope">
    <Sidebar/>
    <div className="flex flex-col flex-1">
      <Header/>
      <main className="flex-1 overflow-y-auto">

      </main>
    </div>

  </div>;
}

export default App;
