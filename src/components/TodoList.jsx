import { TodoItem } from "./TodoItem";
import { TodoContextProvider } from "../store/todo-item-store";
import { useContext } from "react";
export default function TodoList({}) {
  const { work } = useContext(TodoContextProvider);

  return (
    <div>
      {work.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          date={todo.date}
          id={todo.id}
        />
      ))}
    </div>
  );
}
