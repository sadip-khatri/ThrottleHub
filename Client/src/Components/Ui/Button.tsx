import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-accent text-black px-6 py-2 font-bold rounded-full flex items-center gap-2 hover:bg-button-hover transition cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
