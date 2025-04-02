import Image from "next/image";
import NativeCard from "./ui/NativeCard";
import { ReactNativeProject } from "@/data";
const RNProjects = () => {
  return (
    <div className="p-2 flex-col flex items-center my-10">
      <h1 className="text-purple items-center justify-center flex font-bold text-3xl mb-3 md:text-5xl md:mb-6 lg:mb-8">
        React-Native Projects
      </h1>
      <div className="xl:grid xl:grid-cols-2">
        {ReactNativeProject.map((proj) => (
          <div className="my-3 xl:m-4">
            <NativeCard data={proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RNProjects;
