import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescipcion] = useState("");

  const { createTask } = useContext(TaskContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescipcion("");
  };

  return (
    <div className="max-w-md mx-auto">
    
    <form onSubmit={handlerSubmit} className="bg-slate-800 p-10 mb-4">
    <h1 className="text-2xl font-bold mb-3 text-white">Crea tu Tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
  
      <textarea
        placeholder="descipcion"
        id=""
        cols="20"
        rows="2"
        className="bg-slate-300 p-3 w-full mb-2"
        value={descripcion}
        onChange={(e) => {
          setDescipcion(e.target.value);
        }}
      ></textarea>
    
      <button className="bg-green-500 p-2 rounded-md ">guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
