import React, { useState } from "react";
import Hamburger from "./NavbarMd/Hamburger";
import Up from "./../assets/icon/Up";
const NavbarMd = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <nav className="w-full transition-all flex  bg-gradient-to-r from-gray-200 via-white to-gray-200 dark:bg-gradient-to-r    dark:from-black dark:via-slate-950 dark:to-gray-950 bg-opacity-95  justify-between p-3  items-center gap-2">
        <span className="font-extrabold italic text-2xl font-sans">
          @official.gopi
        </span>
        <button
          className="flex flex-col h-full items-center rotate-x-180 gap-2 transition-transform"
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
        style={{
          height: hamburgerOpen ? "auto" : "0",
          overflow: "hidden",
        }}
      />
    </>
  );
};

export default NavbarMd;
