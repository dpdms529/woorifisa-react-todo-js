import React, { useState, useEffect, useRef } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";

const TodoForm = ({ todoId, onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("TODO");
  const [isFormInValid, setFormInValid] = useState(false);
  const addBtn = useRef();

  const add = () => {
    const todo = {
      id: todoId,
      title: title,
      summary: summary,
      category: category,
    };
    onAdd(todo);
    onClose();
  };

  useEffect(() => {
    if (title === "" || summary === "") {
      setFormInValid(true);
      addBtn.current.disabled = true;
    } else {
      setFormInValid(false);
      addBtn.current.disabled = false;
    }
  }, [title, summary]);

  return (
    <>
      <h3 className="text-3xl text-red-200">New Todo</h3>
      <form className="my-2">
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="title">
            Title
          </label>
          <input
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="summary">
            Summary
          </label>
          <textarea
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="summary"
            rows="5"
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="category">
            Category
          </label>
          <select
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="TODO">{TODO_CATEGORY_ICON.TODO} To do</option>
            <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
            <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
          </select>
        </div>
        {isFormInValid && <div className="mt-2 text-red-500">모든 항목을 채워서 작성해주세요</div>}
        <div className="flex justify-end gap-4">
          <button className="text-xl text-white" type="button" onClick={() => onClose()}>
            Cancel
          </button>
          <button
            className="px-6 py-3 text-xl text-red-200"
            type="button"
            onClick={add}
            ref={addBtn}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
