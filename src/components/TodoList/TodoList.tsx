import React from "react";

import "./TodoList.css";

interface Props {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoID: string) => void;
}

const TodoList: React.FC<Props> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
