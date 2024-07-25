import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../context/TodoContext";

const TodoBody = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul className="px-0 my-8">
      {/* li태그를 todos 배열의 요소만큼 렌더링 */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoBody;
