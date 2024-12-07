import React, { useEffect, useRef } from "react";
import Gopi from "./../assets/gopi.jpg";
import Contact from "./../components/Contact";
import Typed from "typed.js";
import Download from "../assets/icon/Download";

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
        className=" flex flex-col gap-12 items-center  py-24 sm:p-24"
        id="home"
      >
        <div className="w-full flex sm:flex-row flex-col-reverse sm:justify-center items-center gap-4 sm:gap-24">
          <div className="dark:text-slate-300 flex flex-col text-3xl my-4 sm:w-1/2 w-3/4">
            <span className=" dark:text-slate-300 lg:text-xl md:text-lg text-base flex-col  flex my-4">
              <span> Hello there, I'm</span>
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                {"</>"}Gopikanta Mondal{"</>"}
              </span>
            </span>
            <div>
              <span
                ref={el}
                className="font-semibold z-0 font-sans dark:text-white dark:drop-shadow-blue-manual drop-shadow-dark-manual shadow-slate-50 text-lg md:text-3xl "
              ></span>
            </div>
            <br />
            <span className="font-light  text-pretty  dark:text-slate-300 my-2 text-lg md:text-xl">
              Passionate full stack dev stepping forward to try to get into
              DevOps. Technology Lover
            </span>
            <div className="my-4">
              <a
                href="#home"
                className=" text-base max-w-[160px] p-2 gap-2 font-semibold  justify-center  md:hidden flex items-center  border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Download />
                <span>My Resume</span>
              </a>
            </div>
            <Contact />
          </div>
          <div className="md:w-60 rounded-[100%] overflow-hidden md:h-60 sm:h-40 sm:w-40 h-32 w-32 dark:shadow-blue-manual shadow-dark-manual">
            <img src={Gopi} className="w-full  h-full object-cover " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
