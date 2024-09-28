import React from "react";

const Languages = () => {
  return (
    <div className="w-full flex items-center justify-center mt-4 border-b pb-4">
      <div>
        <h1 className="font-bold md:text-5xl mt-5 text-2xl text-center">
          Spoken Languages
        </h1>

        <div className="flex justify-between p-3 mt-3">
          <p className="border border-white-100 p-3 rounded m-1">
            Mandarin Chinese
          </p>
          <p className="border border-white-100 p-3 rounded m-1">English</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
