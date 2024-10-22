import React from "react";
import LinkBtn from "../Utils/LinkBtn";
import Download from "../assets/icon/Download";
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-full flex  top-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 dark:bg-gradient-to-r bg-opacity-90 dark:from-black dark:via-slate-950 dark:to-gray-950  justify-between p-3  items-center gap-2">
        <span className="font-extrabold italic text-2xl font-sans">
          @official.gopi
        </span>
        <div className="flex items-center gap-4 justify-center">
          <LinkBtn href={"#home"} btnName={"Home"} />
          <LinkBtn href={"#skills"} btnName={"Skills"} />
          <LinkBtn href={"#about"} btnName={"About"} />
          <LinkBtn href={"#projects"} btnName={"Projects"} />
        </div>
        {/* <a
          href={"/MyResume.pdf"}
          className=" block  overflow-hidden  h-full px-4 rounded-lg dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-slate-300 hover:text-white active:text-white transition-colors"
        >
          <button className="text-base  font-semibold flex justify-center items-center h-full ">
            <Download />
            <span>Resume</span>
          </button>
        </a>{" "} */}
      </nav>
    </>
  );
};

export default Navbar;
