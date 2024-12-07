import React from "react";
import GH from "../assets/icon/GH";

const ProjectListLtr = ({ imgUrl, title, description, href }) => {
  return (
    <div className="sm:flex sm:w-[640px] w-3/4 md:w-[760px] lg:w-[1000px] my-3 justify-center gap-10 items-center object-center ">
      <h1 className="text-xl sm:hidden p-2 font-mono font-semibold">{title}</h1>
      <img
        src={imgUrl}
        className="sm:w-1/3 mx-auto w-2/3 aspect-square  object-cover  hover:scale-95 transition-all rounded-2xl "
      />
      <div className="flex flex-col">
        <h1 className="text-3xl hidden sm:block p-2 font-mono font-semibold">
          {title}
        </h1>
        <span>{description}</span>
        <div className="flex my-3 gap-4">
          <a
            href={""}
            className="h-10 w-10 hover:scale-110  transition-transform rounded-md p-2"
          >
            <button className="h-full w-full">
              <GH />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectListLtr;
