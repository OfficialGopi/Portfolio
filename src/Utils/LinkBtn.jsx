import React from "react";

const LinkBtn = ({ Icon = null, href, btnName, setHamburgerClose }) => {
  return (
    <>
      <a
        href={href}
        className=" block  overflow-hidden px-2 py-1 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white active:text-blue-950 active:dark:text-white transition-colors"
        onClick={setHamburgerClose}
      >
        <button className="text-lg font-semibold flex justify-center h-full items-center ">
          {Icon ? <Icon /> : ""}
          <span>{btnName}</span>
        </button>
      </a>
    </>
  );
};

export default LinkBtn;
