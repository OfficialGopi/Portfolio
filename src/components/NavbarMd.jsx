import React, { useState } from "react";
import Hamburger from "./NavbarMd/Hamburger";
import Up from "./../assets/icon/Up";
const NavbarMd = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <nav
        className="w-full h-full sticky  transition-all flex z-20 top-0  bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gradient-to-r    dark:from-black dark:via-slate-950 dark:to-gray-950 bg-opacity-95  justify-between p-3  items-center gap-2"
        onScroll={() => {
          setHamburgerOpen(false);
        }}
      >
        <span className="font-extrabold italic text-2xl font-sans">
          @official.gopi
        </span>
        <button
          className="flex flex-col h-[30px] items-center rotate-x-180 gap-2 transition-transform"
          style={
            hamburgerOpen
              ? {
                  transform: "rotatex(0deg)",
                }
              : {
                  transform: "rotatex(180deg)",
                }
          }
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <Up />
        </button>
      </nav>
      <Hamburger
        setHamburgerClose={() => setHamburgerOpen(false)}
        hamburgerOpen={hamburgerOpen}
      />
    </>
  );
};

export default NavbarMd;
