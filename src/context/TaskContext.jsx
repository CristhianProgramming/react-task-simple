import { createContext } from "react";
import * as data from "../data/task";
import { useEffect, useState } from "react";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data.default);
  }, []);

  const createTask = ({ title, descripcion }) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      descripcion,
    };
    setTask([...tasks, newTask]);
  };

  const eliminarTask = (id) => {
    setTask(tasks.filter((p) => p.id != id));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, eliminarTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
