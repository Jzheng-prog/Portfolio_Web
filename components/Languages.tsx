import React from "react";

const Languages = () => {
  return (
    <div className="w-full flex items-center justify-center mt-4">
      <div>
        <h1 className="font-bold text-5xl mt-5">Spoken Languages</h1>

        <div className="flex justify-between p-3 mt-3">
          <p className="border border-white-100 p-3 rounded">
            Mandarin Chinese
          </p>
          <p className="border border-white-100 p-3 rounded">English</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
