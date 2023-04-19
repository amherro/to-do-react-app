import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import SearchArea from "./components/SearchArea";
import TaskContainer from "./components/TaskContainer";
import TaskProvider from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <main>
          <ItemInput />
          <div className="grid grid-cols-3 justify-items-center">
            <SearchArea />
            <TaskContainer />
          </div>
          <Footer />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
