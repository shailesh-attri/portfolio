import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="w-full flex items-center justify-center gap-8 py-4">
      <a className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaInstagram />
      </a>
      <a className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        <FaGithub />
      </a>
      <a className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaLinkedin />
      </a>
      <a className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaSnapchat />
      </a>
    </div>
  );
};

export default SocialIcons;
