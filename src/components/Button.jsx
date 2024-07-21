import React from "react";

const Button = (props) => {
  return (
    <button
      className="w-full bg-customPurple-purple py-2 px-6 rounded hover:bg-customPurple-dark 
    duration-500"
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
