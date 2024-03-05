import React, { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal/Modal.jsx";

const Project = ({ onAddProject, onCancel }) => {
  const title = useRef();
  const descriptiion = useRef();
  const date = useRef();
  const modal = useRef();

  const handleAddProject = () => {
    const titleValue = title?.current.value;
    const descriptionValue = descriptiion?.current.value;
    const dateValue = date?.current.value;

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dateValue.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const project = {
      id: uuidv4().toString(),
      title: titleValue,
      description: descriptionValue,
      date: dateValue,
    };

    onAddProject(project);

    title.current.value = "";
    descriptiion.current.value = "";
    date.current.value = "";
  };
  return (
    <>
      <Modal ref={modal} buttonTitle="Okay">
        <h2 className="text-md md:text-xl font-bold text-stone-600 ">
          Invalid Input
        </h2>
        <p className="text-stone-500 mt-3">Please Enter a Valid Values.. </p>
        <p className="text-stone-500">All Fields are Required...</p>
      </Modal>
      <div className="flex flex-col w-[80%] mt-20 gap-3 max-h-max items-center">
        <div className="flex justify-end">
          <Button
            title="Cancel"
            customStyle="bg-white shadow-none text-black focus:outline-none hover:bg-white hover:text-black"
            onClick={onCancel}
          />
          <Button
            title="Save"
            customStyle={"px-6"}
            onClick={handleAddProject}
          />
        </div>
        <div className="flex flex-col justify-start w-full gap-5 ml-10">
          <Input title="TITLE" ref={title} />
          <Input
            title="DESCRIPTION"
            TypeContainer="textarea"
            ref={descriptiion}
            customInputStyle=""
          />
          <Input title="DUE DATE" type="Date" ref={date} />
        </div>
      </div>
    </>
  );
};

export default Project;
