import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experiences = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading mb-10 text-xl text-center">
        <span className="text-purple">Experiences.</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 p-10"
          >
            {item.id === 3 && (
              <div className="items-center absolute mb-40">
                <h1 className="text-lg">Non-Tech</h1>
              </div>
            )}

            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {item.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
