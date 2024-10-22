import React from "react";
import Skills from "../components/MySkills/Skills.jsx";
import JSicon from "./../assets/icon/JSicon.jsx";
import TSicon from "./../assets/icon/TSicon.jsx";
import HTMLicon from "./../assets/icon/HTMLicon.jsx";
import ReactIcon from "../assets/icon/ReactIcon.jsx";
import CSSicon from "../assets/icon/CSSicon.jsx";
import Sassicon from "../assets/icon/Sassicon.jsx";
import TailwindIcon from "../assets/icon/TailwindIcon.jsx";
import NextJs from "../assets/icon/NextJs.jsx";
import Redux from "../assets/icon/Redux.jsx";
import MongoDbIcon from "../assets/icon/MongoDbIcon.jsx";
import MySql from "../assets/icon/MySql.jsx";
import GitIcon from "../assets/icon/GitIcon.jsx";
import NodeJsIcon from "../assets/NodeJsIcon.jsx";
import ExpressJsIcon from "../assets/icon/ExpressJsIcon.jsx";
import GraphQlIcon from "../assets/icon/GraphQlIcon.jsx";
import RestApi from "../assets/icon/RestApi.jsx";
const MySkills = () => {
  return (
    <>
      <div
        className="w-full flex flex-col mb-10 items-center  gap-3"
        id="skills"
      >
        <span className="text-4xl font-bold my-1 dark:text-slate-400">
          My Skills
        </span>
        <div className=" grid grid-cols-3  sm:grid-cols-5 justify-center auto-cols-auto md:gap-8 gap-6 dark:text-slate-400">
          <Skills SkillIcon={HTMLicon} SkillName={"HTML"} />
          <Skills SkillIcon={CSSicon} SkillName={"CSS"} />
          <Skills SkillIcon={JSicon} SkillName={"Javascript"} />
          <Skills SkillIcon={Sassicon} SkillName={"Sass"} />
          <Skills SkillIcon={TailwindIcon} SkillName={"Tailwind"} />
          <Skills SkillIcon={ReactIcon} SkillName={"React JS"} />
          <Skills SkillIcon={NextJs} SkillName={"Next js"} />
          <Skills SkillIcon={Redux} SkillName={"Redux"} />
          <Skills SkillIcon={MongoDbIcon} SkillName={"MongoDB"} />
          <Skills SkillIcon={MySql} SkillName={"MySql"} />
          <Skills SkillIcon={GitIcon} SkillName={"Git"} />
          <Skills SkillIcon={NodeJsIcon} SkillName={"Node js"} />
          <Skills SkillIcon={ExpressJsIcon} SkillName={"Express js"} />
          <Skills SkillIcon={RestApi} SkillName={"Restful APIs"} />
          <Skills SkillIcon={TSicon} SkillName={"Typescript"} />
          <Skills SkillIcon={GraphQlIcon} SkillName={"GraphQl"} />
        </div>
      </div>
    </>
  );
};

export default MySkills;
