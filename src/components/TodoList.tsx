import React, { FC } from "react";
import { ITodoItem } from "./interfaces";

type TodoListProps = {
  todos: ITodoItem[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
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
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
