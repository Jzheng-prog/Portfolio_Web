import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import pfp from "../public/pfp.png";

const Hero = () => {
  return (
    <div className=" pt-36">
      {/* spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-left left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:maxc-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Junior Web Developer & Data Analyst"
          />
          <div className="p-3 m-3 rounded-lg lg:flex">
            <Image
              unoptimized
              priority
              src={pfp}
              alt="profile picture"
              width={500}
              height={500}
              className="rounded-full mb-4 border md:h-[500px] md:w-[350px]"
            />
            <div className="xl:h-full lg:items-center lg:flex">
              <div className="p-2">
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                  Hi, I&apos;m John
                </p>
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                  University of Maryland 2020-2024
                </p>
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                  Major: Bachelors in Information Science
                </p>
              </div>
            </div>
          </div>

          <a href="#about">
            <Button
              title="Show More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
