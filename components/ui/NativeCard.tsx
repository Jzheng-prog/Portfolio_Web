import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

interface NativeCardProp {
  data: string[];
  //   project: string;
}
const NativeCard: React.FC<NativeCardProp> = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      if (index === 0) {
        setIndex(data.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
    if (direction === "right") {
      if (index === data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    console.log({ direction }, { index });
  };
  return (
    <div>
      {/* <h1 className="text-center font-bold text-xl">{project}</h1> */}
      <div className="flex flex-col items-center">
        <div className="p-2 px-6 bg-black absolute border rounded-full my-4 z-50" />

        <div className="border border-gray-700 p-2 flex items-center justify-center rounded-3xl bg-black relative">
          <FaArrowAltCircleLeft
            className="rounded-full absolute left-0 hover:bg-blue-500 hover:scale-125 transition bg-gray-800"
            size={25}
            onClick={() => handleClick("left")}
          />

          <Image
            src={data[index]}
            width={241.875}
            height={524.25}
            alt=""
            className="rounded-3xl pointer-events-none select-none"
          />

          <FaArrowAltCircleRight
            className="rounded-full absolute right-0 hover:bg-blue-500 hover:scale-125 transition bg-gray-800"
            size={25}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default NativeCard;
