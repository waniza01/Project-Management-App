import React from "react";

const TaskDetail = ({ task, onDeleteTask }) => {
  return (
    <li className="flex justify-between w-full p-2 rounded ">
      <p>{task.task}</p>
      <button
        className="hover:text-red-500"
        onClick={() => onDeleteTask(task.id)}
      >
        Clear
      </button>
    </li>
  );
};

export default TaskDetail;
