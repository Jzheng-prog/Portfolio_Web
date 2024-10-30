import React from "react";
import { designs } from "@/data";
import Image from "next/image";

const Design = () => {
  const myDesigns = designs;
  return (
    <div className="my-4">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
        My Web Designs
      </h1>
      <div className="flex flex-col justify-center md:flex-row">
        {myDesigns.map((item, index) => (
          <div className="p-2 mx-auto" key={index}>
            <Image
              // unoptimized
              className="rounded-lg"
              src={item.image}
              alt={item.title}
              width={556}
              height={417}
              priority
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
