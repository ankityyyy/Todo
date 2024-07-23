import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoName from "./components/TodoName";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import TodoContextProvide from "./store/todo-item-store";

function App() {
  return (
    <TodoContextProvide>
      <center>
        <TodoName />
        <InputBox />
        <TodoList />
      </center>
    </TodoContextProvide>
  );
}

export default App;
