import React from "react";
import { fullstackProjs } from "@/data";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";

const FullStackProj = () => {
  return (
    <div>
      <div className="items-center justify-center flex font-bold text-3xl mb-3 md:text-5xl md:mb-6 lg:mb-8">
        <h1 className="text-purple">Full-Stack &nbsp; </h1>
        <h1>Project</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {fullstackProjs.map((proj) => (
          <div
            key={proj.id}
            className="md:border md:p-2 rounded-md m-2 sm:w-[570px] justify-center"
          >
            <div className="rounded-md items-center justify-center flex border relative h-[200px] sm:h-[300px] md:h-[400px] md:m-2">
              <Image
                priority
                unoptimized
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

            <a
              href={proj.link}
              className="flex items-center justify-center bg-blue-500 rounded-md font-bold hover:bg-blue-700 transition m-2 border p-3"
            >
              <IoIosLink className="mr-2" size={20} />
              Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStackProj;
