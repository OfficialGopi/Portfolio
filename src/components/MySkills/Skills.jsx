import React from "react";

const Skills = ({ SkillIcon, SkillName }) => {
  return (
    <>
      <div className=" md:h-32 flex  md:w-32 justify-center  items-center gap-2 sm:h-[6.75rem] sm:w-[6.75rem] h-20 w-20">
        <div className="md:h-[7.5rem] h-full w-full sm:hover:scale-105 sm:h-[6.25rem]  md:hover:h-32 md:text-base text-xs sm:text-sm gap-2 md:hover:text-[1.04rem] border border-black dark:border-slate-200 rounded-lg aspect-square flex flex-col font-semibold p-1  dark:text-white transition-all justify-center items-center">
          <div className="h-1/2 ">
            <SkillIcon />
          </div>
          <span>{SkillName}</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
