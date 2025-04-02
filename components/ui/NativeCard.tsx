"use client";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

interface NativeCardProp {
  data: any;
}
const NativeCard: React.FC<NativeCardProp> = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      if (index === 0) {
        setIndex(data.images.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
    if (direction === "right") {
      if (index === data.images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };
  return (
    <div className="w-full">
      <div className="md:flex justify-around">
        <div className="flex flex-col items-center">
          <div className="p-2 px-6 bg-black absolute border rounded-full my-4 z-50" />

          <div className="border border-gray-700 p-2 flex items-center justify-center rounded-3xl bg-black relative">
            <FaArrowAltCircleLeft
              className="rounded-full absolute left-0 hover:bg-blue-500 hover:scale-125 transition bg-gray-800"
              size={25}
              onClick={() => handleClick("left")}
            />

            <Image
              src={data.images[index]}
              width={241.875}
              height={524.25}
              alt=""
              className="rounded-3xl pointer-events-none select-none"
              unoptimized
            />

            <FaArrowAltCircleRight
              className="rounded-full absolute right-0 hover:bg-blue-500 hover:scale-125 transition bg-gray-800"
              size={25}
              onClick={() => handleClick("right")}
            />
          </div>
        </div>

        <div className="my-2 p-3 flex flex-col md:w-1/2 lg:block">
          <h1 className="font-bold text-2xl flex items-center justify-center">
            {data.name}
          </h1>

          <span className="font-bold text-lg">Tech</span>
          <hr className="mb-1" />
          <p className="text-sm">{data.tech}</p>

          <span className="font-bold text-lg mt-3">Description</span>
          <hr className="mb-1" />
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NativeCard;
