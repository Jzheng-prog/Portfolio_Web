import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/Button";
import Image from "next/image";

const Footer = () => {
  const socials = socialMedia;
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="flex flex-col items-center">
        <a href="mailto:zhengjohn@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light mx-4">
          Copyright © 2024 John Zheng
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socials.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.id === 2 ? (
                  <Image
                    src={info.img}
                    alt="icons"
                    width={16} // or appropriate width
                    height={16} // or appropriate height
                  />
                ) : info.id === 4 ? (
                  <Image
                    src={info.img}
                    alt="icons"
                    width={22} // or appropriate width
                    height={22} // or appropriate height
                  />
                ) : (
                  <Image
                    src={info.img}
                    alt="icons"
                    width={19} // or appropriate width
                    height={18} // or appropriate height
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
