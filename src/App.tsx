import React, { useState } from "react";
import { ITodoItem } from "./components/interfaces";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
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
        console.log(todos);
      }
      return todo;
    });
    setTodos(tmpState);
  };
  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          onToggle={toggleHandler}
          onRemove={removeHandler}
          todos={todos}
        />
      </div>
    </>
  );
}

export default App;
