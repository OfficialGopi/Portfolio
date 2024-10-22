import React from "react";

const ContactIconBtn = ({ Icon, href }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className="h-14 w-14 hover:p-[0.4rem] border border-black dark:border-slate-200 transition-all rounded-md p-2 "
      >
        <button className="h-full w-full">
          <Icon />
        </button>
      </a>
    </>
  );
};

export default ContactIconBtn;
