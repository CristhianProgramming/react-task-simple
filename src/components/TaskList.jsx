import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskList() {

 const {tasks} = useContext(TaskContext);


  if (tasks.length === 0) {
    return <div className="text-white text-4xl font-bold text-center">no hay tareas aun</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((p,i) => {
        return <TaskCard task={p} key={i} />
      })}
    </div>
  );
}

export default TaskList;
