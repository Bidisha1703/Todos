import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummery from "./components/TodoSummery";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();

  return (
   <main className="py-10  h-screen space-y-5">
    <h1 className="font-bold text-3xl text-center">Your Todos</h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <AddTodoForm  onSubmit={addTodo}/>
      <TodoList
      todos={todos}
      onCompletedChange={setTodoCompleted}
      onDelete={deleteTodo}
      />
    </div>
    <TodoSummery
    todos={todos}
    deleteAllCompleted={ deleteAllCompletedTodos}
    />
   </main>
  );
}

export default App
