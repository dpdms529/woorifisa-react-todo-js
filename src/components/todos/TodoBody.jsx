import React from "react";
import TodoItem from "./TodoItem";

const todos = [1, 2, 3];

const TodoBody = () => {
  return (
    <ul className="px-0 my-8">
      {/* li태그를 todos 배열의 요소만큼 렌더링 */}
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoBody;
