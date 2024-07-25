import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";

// 함수형 컴포넌트
const TodoHeader = () => {
  const [openModal, open] = useState(false);
  const closeModal = () => open(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button"
        onClick={() => open(true)}
      >
        Add Todo
      </button>
      {openModal &&
        createPortal(
          <Modal onClose={closeModal}>
            <TodoForm onClose={closeModal}>New Todo</TodoForm>
          </Modal>,
          document.body
        )}
      <TodoFilter />
    </div>
  );
};

export default TodoHeader;
