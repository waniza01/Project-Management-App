import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

const Modal = forwardRef(({ children, buttonTitle }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className=" w-[30%] p-5 rounded-md backdrop:bg-stone-900/95 px-10 shadow-md"
    >
      {children}
      <form method="dialog">
        <p className="text-right mt-5">
          <Button title={buttonTitle} />
        </p>
      </form>
    </dialog>
  );
});

export default Modal;
