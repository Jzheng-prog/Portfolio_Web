import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-10 text-xl text-center">
        Kind words from <span className="text-purple">satistfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
              <img src={img} alt={name} />
              <img src={nameImg} alt={nameImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
