import React from "react";
import "../TodoItem.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoContextProvider } from "../store/todo-item-store";

export const TodoItem = ({ task, date, id }) => {
  const todoObj = useContext(TodoContextProvider);
  let deleteTodo = todoObj.deleteTodo;
  return (
    <React.Fragment>
      <div className="container text-center margin style">
        <div className="row">
          <div className="col-6">
            <h5>{task}</h5>
          </div>
          <div className="col-4">
            <h5>{date}</h5>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger add-button btns"
              onClick={() => deleteTodo(id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
