import React, { useState, useEffect } from "react";
import { ITodoItem } from "../components/interfaces";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

declare var confirm: (mess: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as ITodoItem[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodoItem = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    const tmpState = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(tmpState);
  };
  const removeHandler = (id: number) => {
    const souldRemove = confirm("Вы уверены, что хотете удалить элемент?");
    if (souldRemove) setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        onToggle={toggleHandler}
        onRemove={removeHandler}
        todos={todos}
      />
    </>
  );
};
