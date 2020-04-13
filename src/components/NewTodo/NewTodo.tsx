import React, { useRef } from "react";

import "./NewTodo.css";

interface Props {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    let enteredText = textInputRef.current!.value;

    onAddTodo(enteredText);

    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Enter Todo</label>
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
