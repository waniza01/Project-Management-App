import React from "react";
import Button from "../Button/Button";

const SideBar = ({
  projects,
  handleAddProjectScreen,
  handleProjectDetails,
}) => {
  return (
    <div className="bg-black w-[20%] h-screen mt-8 rounded-e-3xl text-center">
      <h2 className="text-md md:text-xl font-semibold text-white mt-10 mb-5">
        YOUR PROJECTS
      </h2>
      <p className="mb-5">
        <Button title="+ Add Project" onClick={handleAddProjectScreen} />
      </p>
      <ul className="text-left w-full">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <li key={index} className="w-full text-center mt-1">
              <button
                className="w-[80%] text-stone-200 p-1 hover:bg-stone-900 md:px-10 rounded text-center "
                onClick={() => handleProjectDetails(index)}
              >
                {project.title}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
