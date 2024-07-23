import { createContext } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContextProvider = createContext({
  todo: [],
  newTodo: () => {},
  handleDelete: () => {},
});

const initalState = [
  { task: "buy food", date: " 10 / 10 / 2003", id: uuidv4() },
];

const reducer = (state, action) => {
  let newTodoItem = state;
  if (action.type === "New_ITEM") {
    newTodoItem = [
      ...state,
      {
        task: action.payload.newTask,
        date: action.payload.NewDate,
        id: uuidv4(),
      },
    ];
  } else if (action.type === "ITEM_DELETE") {
    newTodoItem = state.filter((todo) => todo.id !== action.payload.id);
  }
  return newTodoItem;
};

export default function TodoContextProvide({ children }) {
  const [todo, dispatch] = useReducer(reducer, initalState);

  let newTodo = (newTask, NewDate) => {
    const newAddAction = {
      type: "New_ITEM",
      payload: {
        newTask,
        NewDate,
      },
    };
    dispatch(newAddAction);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "ITEM_DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <TodoContextProvider.Provider
      value={{ work: todo, deleteTodo: handleDelete, newItem: newTodo }}
    >
      {children}
    </TodoContextProvider.Provider>
  );
}
