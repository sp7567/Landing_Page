import React from "react";

const Button = ({ 
  type = "button",
  onClick = () => {},
  className = "",
  children 
}) => {
  return (
    <button
      type={type}
      className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
