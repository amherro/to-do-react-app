import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import SearchArea from "./components/SearchArea";
import TaskContainer from "./components/TaskContainer";
import TaskProvider from "./TaskContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <ToastContainer />
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
