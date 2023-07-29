import React from "react";
import { SocialIcon } from "react-social-icons";
import { socialMediaHandles } from "../constants";
const Footer = () => {
  return (
    <div className=" flex justify-center w-full">
      <div className="flex flex-row w-1/2 rounded-full bg-black-100 justify-center py-2 gap-10 my-4 bg-opacity-20">
        {socialMediaHandles.map((social) => (
          <SocialIcon
            key={social.name}
            url={social.link}
            bgColor="#100d25"
            fgColor="#fff"
            className=" transition-transform duration-300 transform hover:scale-150 hover:cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
