import React from "react";
import { designs } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";

const Design = () => {
  return (
    <div className="my-4">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
        My Web Designs
      </h1>
      <div className="flex flex-col justify-center md:flex-row">
        {designs.map((item, index) => (
          <div className="p-2 mx-auto" key={index}>
            <Image
              className="rounded-lg"
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
