import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: todoText },
    ]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
