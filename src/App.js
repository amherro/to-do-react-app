import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import SearchArea from "./components/SearchArea";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ItemInput />
        <div className="grid grid-cols-3">
          <SearchArea />
          <TaskContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
