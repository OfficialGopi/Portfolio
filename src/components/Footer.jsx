import React from "react";
import Contact from "./Contact";
const Footer = () => {
  const d = new Date();
  return (
    <div
      className="w-full flex justify-between items-center px-2 py-5 bg-black text-white font-sans"
      id="footer"
    >
      <span className="lg:text-xl md:text-lg text-base italic font-bold">
        @official.gopi
      </span>
      <div className="hidden sm:block">
        <Contact />
      </div>
      <span className="lg:text-xl md:text-lg sm:text-base text-sm">
        ©{d.getFullYear()} Personal Portfolio
      </span>
    </div>
  );
};

export default Footer;
