import React from "react";
import LinkBtn from "../Utils/LinkBtn";
import Download from "../assets/icon/Download";
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-full flex  top-0 bg-gradient-to-r from-gray-100 via-white to-gray-100  dark:bg-gradient-to-r   dark:from-black dark:via-slate-950 dark:to-gray-950  justify-between p-3 lg:px-20  items-center gap-2">
        <span className="font-extrabold italic text-2xl font-sans">
          @official.gopi
        </span>
        <div className="flex items-center gap-4 justify-center">
          <LinkBtn href={"#home"} btnName={"Home"} />
          <LinkBtn href={"#skills"} btnName={"Skills"} />
          <LinkBtn href={"#about"} btnName={"About"} />
          <LinkBtn href={"#projects"} btnName={"Projects"} />
        </div>
        <div className="h-full">
          <a
            href="#home"
            className="h-full px-5 py-1 gap-2 font-semibold   flex items-center  border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Download />
            <span>My Resume</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
