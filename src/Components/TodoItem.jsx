import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TodoListItem } from "./TodoListItem";

export const TodoItem = () => {
  const todos = useSelector((res) => res.todo.todos);
  return (
    <div>
      {todos &&
        todos.map((res) => (
          <Link key={res.id} to={`todo/${res.id}`}>
            <TodoListItem item={res} />
          </Link>
        ))}
    </div>
  );
};
