import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {

  const {eliminarTask} = useContext(TaskContext)

  return (
    <div className="bg-gray-700 text-white  p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400">{task.descripcion}</p>
      <button onClick={() => eliminarTask(task.id)} className="bg-red-500 p-2 mt-2 rounded-md hover:bg-red-400">eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
