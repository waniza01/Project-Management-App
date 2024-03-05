import React from "react";

const Button = ({ title, onClick, type, customStyle }) => {
  return (
    <button
      className={`bg-stone-800 text-sm text-stone-400 p-2 px-4 rounded  shadow-md shadow-stone-900  hover:bg-stone-600 hover-stone-100 ${customStyle}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
