import React, { FC } from "react";
type TodoListProps = {
  todos: any;
};

const TodoList: FC<TodoListProps> = () => {
  return (
    <ul>
      <li className="todo">
        <label htmlFor="">
          <input type="checkbox" />
          <span></span>
          <i className="material-icons red-text">delete</i>
        </label>
      </li>
    </ul>
  );
};

export default TodoList;
