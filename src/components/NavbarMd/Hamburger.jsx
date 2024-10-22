import React from "react";
import LinkBtn from "../../Utils/LinkBtn";

const Hamburger = ({ setHamburgerClose, style }) => {
  return (
    <>
      <div className="transition-all" style={style}>
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
