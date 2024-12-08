import React from "react";
import GH from "../assets/icon/GH";
import Link from "../assets/icon/Link";
import Code from "../assets/icon/Code";

const ProjectListLtr = ({
  imgUrl,
  title,
  description,
  repoLink,
  demoLink,
  index,
}) => {
  return (
    <div
      className={`sm:flex ${
        index % 2 == 1 ? "flex-row" : "flex-row-reverse"
      } sm:w-[640px] w-3/4 md:w-[760px] lg:w-[1000px] my-5 justify-center gap-10 items-center object-center `}
    >
      <h1 className="text-xl mx-auto text-center sm:hidden p-2 font-mono font-semibold">
        {index}.{title}
      </h1>
      <img
        src={imgUrl}
        className="sm:w-1/3 mx-auto w-2/3 aspect-square  object-cover  hover:scale-95 duration-500 transition-all rounded-2xl "
      />

      <div className="flex flex-col">
        <h1 className="text-3xl hidden sm:block p-2 font-mono font-semibold">
          {index}.{title}
        </h1>
        <span>{description}</span>
        <div className="flex my-3 gap-4">
          <a
            href={demoLink}
            target="_blank"
            className="h-10 w-10 hover:scale-125 hover:text-blue-300 transition duration-500 rounded-md p-2"
          >
            <Link />
          </a>
          <a
            href={repoLink}
            target="_blank"
            className="h-10 w-10 hover:scale-125 hover:text-blue-300 transition duration-500 rounded-md p-2"
          >
            <Code />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectListLtr;
