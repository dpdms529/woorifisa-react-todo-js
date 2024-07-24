import TodoFilter from "./TodoFilter";

// 함수형 컴포넌트
const TodoHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button"
      >
        Add Todo
      </button>
      <div>
        <TodoFilter />
      </div>
    </div>
  );
};

export default TodoHeader;
