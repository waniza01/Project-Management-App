import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type = "text",
      title,
      TypeContainer = "input",
      customInputStyle,
      ...props
    },
    ref
  ) => {
    return (
      <p className="flex flex-col max-w">
        <label className="text-stone-800 font-bold">{title}</label>
        <TypeContainer
          ref={ref}
          type={type}
          className={` bg-stone-300 focus:outline-none focus:border-b-2 focus:border-stone-500 p-1 w-[55%] rounded-sm ${customInputStyle}`}
          {...props}
        />
      </p>
    );
  }
);

export default Input;
