import React from "react";
import notebook from "../../assets/notebook.png";
import Button from "../Button/Button";
const AddProject = ({ handleAddProjectScreen }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%]  gap-3 max-h-max">
      <img src={notebook} alt="writing a note" width={100} />
      <h2 className="text-md md:text-xl font-bold text-stone-600 ">
        No Project Selected
      </h2>
      <p className="text-stone-500">
        Select a project or get started with a new one
      </p>
      <Button title="Create New Project" onClick={handleAddProjectScreen} />
    </div>
  );
};

export default AddProject;
