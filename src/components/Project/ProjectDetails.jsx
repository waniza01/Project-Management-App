import React from "react";
import DateFormatter from "../../helper/DateFormatter";
import Task from "../Tasks/Task";

const ProjectDetails = ({
  title,
  description,
  date,
  id,
  onDeleteProject,
  tasks,
  onAddTask,
  onDeleteTask,
}) => {
  const Date = DateFormatter("" + date);
  return (
    <div className="flex flex-col w-[80%] mt-20 gap-3 max-h-max ml-12">
      <section className="flex justify-between w-[50%]">
        <h2 className="text-3xl font-serif font-extrabold text-stone-600">
          {title}
        </h2>
        <button
          className="hover:text-red-500"
          onClick={() => onDeleteProject(id)}
        >
          Delete
        </button>
      </section>
      <section className="flex flex-col gap-5 w-[50%]">
        <p className="text-stone-400 font-mono font-semibold">{Date}</p>
        <p className="text-stone-700 whitespace-pre-wrap">{description}</p>
        <hr className="h-1 rounded md:my-10 bg-stone-400" />
      </section>
      <Task
        onAddTask={onAddTask}
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        projectId={id}
      />
    </div>
  );
};

export default ProjectDetails;
