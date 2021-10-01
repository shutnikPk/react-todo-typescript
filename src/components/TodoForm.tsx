import React, { FC, useRef, useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
  //   const [title, setTitle] = useState<string>("");
  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="input-field">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
