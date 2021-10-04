import React, { FC } from "react";
import { ITodoItem } from "./interfaces";

type TodoListProps = {
  todos: ITodoItem[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("complited");
        }
        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
