import DefaultLayout from "./layouts/DefaultLayout";
import TodoHeader from "./components/todos/TodoHeader";
import TodoBody from "./components/todos/TodoBody";
import { useEffect, useState, useReducer } from "react";
import { TodoContext, TodoDispatchContext } from "./context/TodoContext";

const reducer = (todos, actions) => {
  switch (actions.type) {
    case "ADD":
      return [...todos, actions.newTodo];
    case "UPDATE":
      return todos.map((todo) => (todo.id === actions.updateTodo.id ? actions.updateTodo : todo));
    case "DELETE":
      return todos.filter((todo) => todo.id !== actions.id);
  }
};

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
  // const [todos, setTodos] = useState(dummyTodos);
  const [todos, dispatch] = useReducer(reducer, dummyTodos);
  const [category, setCategory] = useState("ALL");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    category === "ALL"
      ? setFilteredTodos(todos)
      : setFilteredTodos(todos.filter((todo) => todo.category === category));
  }, [category, todos]);

  const onAdd = ({ title, summary, category }) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category,
    };

    dispatch({ type: "ADD", newTodo: newTodo });
  };

  const onUpdate = ({ id, title, summary, category }) => {
    const updateTodo = {
      id,
      title,
      summary,
      category,
    };

    dispatch({ type: "UPDATE", updateTodo: updateTodo });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
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
          <TodoContext.Provider value={{ todos: filteredTodos }}>
            <TodoDispatchContext.Provider
              value={{ onAdd, onUpdate, onDelete, onFilter: setCategory }}
            >
              <TodoHeader />
              <TodoBody />
            </TodoDispatchContext.Provider>
          </TodoContext.Provider>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
