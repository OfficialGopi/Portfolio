import React from "react";
import LinkBtn from "../../Utils/LinkBtn";

const Hamburger = ({ hamburgerOpen, setHamburgerClose }) => {
  return (
    <>
      <div
        className={`transition-all z-10   pb-2 absolute w-full bottom-[100%] bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gradient-to-r rounded-bl-3xl rounded-br-3xl border-b dark:border-white border-black   dark:from-black dark:via-slate-950 dark:to-gray-950  ${
          hamburgerOpen ? "translate-y-[calc(100%+64px)]" : ""
        }`}
      >
        <div className="flex items-center flex-col gap-4 justify-center">
          <LinkBtn
            href={"#home"}
            btnName={"Home"}
            setHamburgerClose={setHamburgerClose}
          />
          <LinkBtn
            href={"#skills"}
            btnName={"Skills"}
            setHamburgerClose={setHamburgerClose}
          />
          <LinkBtn
            href={"#projects"}
            btnName={"Projects"}
            setHamburgerClose={setHamburgerClose}
          />
          <LinkBtn
            href={"#about"}
            btnName={"About"}
            setHamburgerClose={setHamburgerClose}
          />
        </div>
      </div>
    </>
  );
};

export default Hamburger;
