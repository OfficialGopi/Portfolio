import React from "react";
import GH from "../assets/icon/GH";
import ContactIconBtn from "../Utils/ContactIconBtn";
import Mail from "../assets/icon/Mail";
import Ig from "../assets/icon/Ig";
import Li from "../assets/icon/Li";
import {
  email,
  githubProfile,
  instagramProfile,
  linkedinProfile,
} from "../constants/constants";

const Contact = () => {
  return (
    <>
      <div className="flex gap-2">
        <ContactIconBtn Icon={GH} href={githubProfile} />
        <ContactIconBtn Icon={Li} href={linkedinProfile} />
        <ContactIconBtn Icon={Mail} href={`mailto:${email}`} />
        <ContactIconBtn Icon={Ig} href={instagramProfile} />
      </div>
    </>
  );
};

export default Contact;
