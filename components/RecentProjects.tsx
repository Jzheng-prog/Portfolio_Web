import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
  const projs = projects;
  return (
    <div className="py-20 mynpm-10" id="projects">
      <h1 className="heading mb-10 text-xl text-center">
        A Small Selection of{" "}
        <span className="text-purple">recent projects.</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projs.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="sm:w-[570px] sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <a href={link}>
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      width={500} // Example width; adjust as needed
                      height={500} // Example height; adjust as needed
                    />
                  </div>
                  <Image
                    unoptimized
                    src={img}
                    alt={title}
                    className={
                      id === 4
                        ? "z-10 absolute bottom-0"
                        : "z-10 absolute w-full h-full object-cover rounded-xl"
                    }
                    width={500} // Example width; adjust as needed
                    height={500} // Example height; adjust as needed
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      >
                        <Image
                          src={icon}
                          alt="icon"
                          className="p-2"
                          width={500} // Example width; adjust as needed
                          height={500} // Example height; adjust as needed
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
