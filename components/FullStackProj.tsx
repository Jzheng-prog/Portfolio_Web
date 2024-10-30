import React from "react";
import { fullstackProjs } from "@/data";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";

const FullStackProj = () => {
  return (
    <div>
      <h1 className="font-bold heading items-center flex justify-center my-4">
        <span className="font-bold text-purple">Full-Stack &nbsp; </span>
        Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {fullstackProjs.map((proj) => (
          <div
            key={proj.id}
            className="border p-2 rounded-md m-2 sm:w-[570px] justify-center shadow-sm"
          >
            <div className="rounded-md items-center justify-center flex border relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
              <Image
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                src={proj.img}
                alt={`${proj.title} image`}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <div className="my-2 p-3 flex flex-col justify-center">
              <h1 className="font-bold text-2xl flex items-center justify-center">
                {proj.title}
              </h1>

              <div className="w-full mb-2">
                <span className="font-bold text-lg">Tech</span>
                <hr className="mb-1" />
                <p className="text-sm">{proj.tech}</p>
              </div>

              <div>
                <span className="font-bold text-lg">Description</span>
                <hr className="mb-1" />
                <p className="text-sm">{proj.des}</p>
              </div>
            </div>

            <div className="flex items-end justify-end hover:text-gray-500 transiton m-2">
              <IoIosLink className="text-white mr-2" size={20} />
              <a href={proj.link}>Github Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStackProj;
