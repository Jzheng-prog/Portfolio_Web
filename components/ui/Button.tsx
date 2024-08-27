import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleclick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleclick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative" onClick={handleclick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="gap-2 items-center px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex">
        {position === "left" && icon}

        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default Button;
