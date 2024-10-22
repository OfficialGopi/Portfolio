import React from "react";
import GH from "../assets/icon/GH";
import ContactIconBtn from "../Utils/ContactIconBtn";
import Mail from "../assets/icon/Mail";
import Ig from "../assets/icon/Ig";
import Li from "../assets/icon/Li";

const Contact = () => {
  return (
    <>
      <div className="flex gap-2">
        <ContactIconBtn Icon={GH} href={import.meta.env.VITE_APP_GITHUB} />
        <ContactIconBtn Icon={Li} href={import.meta.env.VITE_APP_LINKEDIN} />
        <ContactIconBtn Icon={Mail} href={"mailto:official.gopi@outlook.com"} />
        <ContactIconBtn Icon={Ig} href={import.meta.env.VITE_APP_INSTAGRAM} />
      </div>
    </>
  );
};

export default Contact;
