import React, { useRef } from "react";
import Input from "../Input/Input";

import TaskDetail from "./TaskDetail.jsx";

const Task = ({ projectId, onAddTask, tasks, onDeleteTask }) => {
  const task = useRef();

  const handleInput = () => {
    onAddTask(task.current.value);
    task.current.value = "";
  };

  const projectTasks = tasks?.filter((task) => task.projectId === projectId);

  return (
    <div className="w-full h-[100%]">
      <h2 className="text-3xl font-serif font-extrabold text-stone-900">
        Tasks
      </h2>
      <p className="flex w-[50%] mt-5 gap-5">
        <input
          ref={task}
          className="bg-stone-300 focus:outline-none focus:border-b-2 focus:border-stone-500 p-1 w-[45%] rounded-sm"
        />
        <button onClick={handleInput}>Add Task</button>
      </p>
      {projectTasks.length === 0 && (
        <p className="mt-3 text-stone-700">No Tasks define yet!!!</p>
      )}
      {projectTasks.length > 0 && (
        <ul className="bg-stone-100 mt-5 w-[50%]">
          {tasks.map((task) => (
            <TaskDetail key={task.id} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task;
