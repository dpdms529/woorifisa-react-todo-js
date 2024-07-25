import DefaultLayout from "./layouts/DefaultLayout";
import TodoHeader from "./components/todos/TodoHeader";
import TodoBody from "./components/todos/TodoBody";
import { useState } from "react";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyTodos);

  const onAdd = ({ title, summary, category }) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const onUpdate = ({ id, title, summary, category }) => {
    const updateTodo = {
      id,
      title,
      summary,
      category,
    };

    const updateTodos = [...todos];
    const idx = updateTodos.findIndex((todo) => todo.id === id);
    updateTodos[idx] = updateTodo;
    setTodos(updateTodos);
  };

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/">
              <h1 className="py-8 text-red-200 max-w-max animate-bounce-slow text-7xl flex">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Growing%20Heart.png"
                  alt="Growing Heart"
                  width="40"
                  height="40"
                />
                todos
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Growing%20Heart.png"
                  alt="Growing Heart"
                  width="40"
                  height="40"
                />
              </h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <div>
            <TodoHeader onAdd={onAdd} />
          </div>
          <div>
            <TodoBody todos={todos} onUpdate={onUpdate} />
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
