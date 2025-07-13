import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2563eb] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1d4ed8] transition cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
