"use client";
import { uber, videoSharingApp, NativeDescription } from "@/data";
import React from "react";
import NativeCard from "./ui/NativeCard";

const ReactNativeProj = () => {
  return (
    <div className="p-2 flex-col flex items-center mt-6">
      <h1 className="text-purple items-center justify-center flex font-bold text-3xl mb-3 md:text-5xl md:mb-6 lg:mb-8">
        React-Native Projects
      </h1>

      <div className="xl:flex">
        <div className="md:p-2 rounded-md m-2 sm:w-[570px] justify-center lg:flex lg:w-[600px]">
          <NativeCard data={uber} />
          <div className="my-2 p-3 flex flex-col lg:w-[300px] lg:ml-4">
            <h1 className="font-bold text-2xl flex items-center justify-center">
              {NativeDescription[0].title}
            </h1>

            <span className="font-bold text-lg">Tech</span>
            <hr className="mb-1" />
            <p className="text-sm">{NativeDescription[0].tech}</p>

            <span className="font-bold text-lg mt-3">Description</span>
            <hr className="mb-1" />
            <p className="text-sm">{NativeDescription[0].description}</p>
          </div>
        </div>
        <div className="md:p-2 rounded-md m-2 sm:w-[570px] justify-center lg:flex lg:w-[600px]">
          <NativeCard data={videoSharingApp} />
          <div className="my-2 p-3 flex flex-col lg:w-[300px] lg:ml-4">
            <h1 className="font-bold text-2xl flex items-center justify-center">
              {NativeDescription[1].title}
            </h1>

            <span className="font-bold text-lg">Tech</span>
            <hr className="mb-1" />
            <p className="text-sm">{NativeDescription[1].tech}</p>

            <span className="font-bold text-lg mt-3">Description</span>
            <hr className="mb-1" />
            <p className="text-sm">{NativeDescription[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeProj;
