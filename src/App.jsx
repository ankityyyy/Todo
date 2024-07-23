import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoName from "./components/TodoName";
import InputBox from "./components/InputBox";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./store/todo-item-store";

function App() {
  const [todo, setTodo] = useState([
    { task: "buy food", date: " 10 / 10 / 2003", id: uuidv4() },
    { task: "food", date: "10 / 10 / 2003", id: uuidv4() },
  ]);

  const newTodo = (newTask, NewDate) => {
    setTodo([...todo, { task: newTask, date: NewDate, id: uuidv4() }]);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContextProvider.Provider
      value={{ work: todo, deleteTodo: handleDelete, newItem: newTodo }}
    >
      <center>
        <TodoName />
        <InputBox />
        <TodoList />
      </center>
    </TodoContextProvider.Provider>
  );
}

export default App;
