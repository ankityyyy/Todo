// import { MdAddBox } from "react-icons/md";
import { GiPowerButton } from "react-icons/gi";
import style from "../InputBox.module.css";
import { useRef } from "react";
import { useContext } from "react";
import { TodoContextProvider } from "../store/todo-item-store";

export default function InputBox({}) {
  const todoTaskElement = useRef();
  const todoDateElement = useRef();
  const { newItem } = useContext(TodoContextProvider);

  const handleAllData = (e) => {
    e.preventDefault();
    const task = todoTaskElement.current.value;
    const date = todoDateElement.current.value;
    todoTaskElement.current.value = "";
    todoDateElement.current.value = "";
    newItem(task, date);
  };

  return (
    <>
      <form className={style.input} onSubmit={handleAllData}>
        <div className="container text-center">
          <div class="row">
            <div class="col-6">
              <input
                type="text"
                placeholder="enter task"
                ref={todoTaskElement}
              />
            </div>
            <div class="col-4">
              <input type="date" ref={todoDateElement} />
            </div>
            <div class="col-2">
              <button type="submit" className="btn btn-success btns">
                {/* <MdAddBox /> */}
                <GiPowerButton />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
