import { workingKnowledge } from "@/data";
import React from "react";

const WorkingKnowledge = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-5">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
        Working Knowledge
      </h1>
      <p className="font-semibold text-sm md:text-md lg:text-lg mb-4">
        Basic Fundamental Understanding
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 w-full max-w-5xl">
        {workingKnowledge.map((item, index) => (
          <div
            key={index}
            className="border border-white p-4 text-xs rounded-md text-center bg-gray-800 text-white"
            role="listitem"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingKnowledge;
