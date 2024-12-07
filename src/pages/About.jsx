import React from "react";
import Employee from "../assets/icon/Employee";

const About = () => {
  return (
    <div
      className="flex mx-auto justify-center items-center sm:w-[640px] sm:flex-row flex-col w-3/4 md:w-[760px] lg:w-[1000px] gap-10 dark:text-slate-200 my-7"
      id="about"
    >
      <div>
        <Employee />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <span className="text-base sm:text-lg md:text-xl">
          I am a passionate third-year student pursuing a Bachelor of Technology
          in Computer Science and Engineering. My journey into web development began in
          mid-2023, and since then, I've been focused on honing my skills while
          exploring the vast potential of this field.
          <br /> Specializing in backend development, I’m now eager to expand my
          expertise by transitioning into <i>DevOps</i>. This shift feels like a
          natural evolution in my career, presenting an exciting opportunity to
          deepen my knowledge of building, deploying, and automating dynamic,
          scalable applications with greater efficiency.
        </span>
      </div>
    </div>
  );
};

export default About;
