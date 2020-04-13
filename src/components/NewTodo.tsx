import React, { useRef } from "react";

interface Props {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    let enteredText = textInputRef.current!.value;

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
