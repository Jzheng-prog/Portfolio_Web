"use client";
import { workingKnowledge } from "@/data";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WorkingKnowledge = () => {
  const headingRef = useRef(null); // Create a ref for the heading

  useEffect(() => {
    // Animation for heading
    gsap.to(headingRef.current, {
      opacity: 1,
      duration: 1, // Duration of the animation in seconds
      y: 0, // Reset y-position
      ease: "power2.out", // Easing function for a smooth animation
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-5">
      <h1
        ref={headingRef} // Assign ref to the heading
        className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2 opacity-0"
      >
        Working Knowledge
      </h1>
      <p className="font-semibold text-sm md:text-md lg:text-lg mb-4">
        Basic Fundamental Understanding
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 w-full max-w-5xl">
        {workingKnowledge.map((item, index) => (
          <div
            key={index}
            className="border border-white p-4 text-xs rounded-md text-center bg-gray-800 text-white"
            role="listitem"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingKnowledge;
