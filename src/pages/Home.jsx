import React, { useEffect, useRef } from "react";
import Contact from "./../components/Contact";
import Typed from "typed.js";
import Download from "../assets/icon/Download";
import { profilePhoto } from "../constants/constants";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack MERN Developer",
        "Backend Developer",
        "Frontend Developer",
        "React Native App Developer",
      ],
      showCursor: true,
      startDelay: 0,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 0,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        className=" flex flex-col gap-12 items-center py-10 md:py-24 "
        id="home"
      >
        <div className="w-full flex sm:flex-row flex-col-reverse sm:justify-center items-center gap-4 sm:gap-24">
          <div className="dark:text-slate-300 flex flex-col text-3xl  sm:w-1/2 w-3/4">
            <span className=" dark:text-slate-300 lg:text-lg md:text-md text-base flex-col  flex my-4">
              <span> Hello there, I'm</span>
              <span className="font-bold text-md md:text-[1.12rem] lg:text-xl">
                {"</>"}Gopikanta Mondal{"</>"}
              </span>
            </span>
            <div>
              <span
                ref={el}
                className="font-semibold z-0 font-sans dark:text-white dark:drop-shadow-blue-manual drop-shadow-dark-manual shadow-slate-50 text-lg sm:text-2xl md:text-3xl "
              ></span>
            </div>
            <br />
            <span className="font-light  text-pretty  dark:text-slate-300 my-2 text-base md:text-xl">
              Passionate full stack dev stepping forward to try to get into
              DevOps. Technology Lover
            </span>
            <div className="my-4">
              <a
                href="/resume.pdf"
                className=" text-base max-w-[160px] p-2 gap-2 font-semibold  justify-center  md:hidden flex items-center  rounded-xl border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
              >
                <Download />
                <span>My Resume</span>
              </a>
            </div>
            <Contact />
          </div>
          <div className="md:w-60 rounded-[100%] overflow-hidden md:h-60  lg:h-60 sm:h-48 sm:w-48 h-32 w-32 shadow-blue-manual ">
            <img src={profilePhoto} className="w-full  h-full object-cover " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
