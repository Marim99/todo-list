import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TaskContextProvider from "./contexts/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
      <Navbar/>
      <TodoList/>
      </TaskContextProvider>
 
    </div>
  );
}

export default App;
