import DefaultLayout from "./layouts/DefaultLayout";
import TodoHeader from "./components/todos/TodoHeader";
import TodoBody from "./components/todos/TodoBody";

function App() {
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
            <TodoHeader />
          </div>
          <div>
            <TodoBody />
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
