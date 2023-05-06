import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    < main className="bg-slate-500 h-screen">
      <div className="mx-auto container">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
