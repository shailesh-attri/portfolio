import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="w-full flex items-center justify-center gap-8 py-4">
      <a href="https://www.instagram.com/shailesh_attri/" target="blank" className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaInstagram />
      </a>
      <a href="https://github.com/shailesh-attri" target="blank" className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/shailesh-attri-web/" target="blank" className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaLinkedin />
      </a>
      <a href="https://www.youtube.com/channel/UCcgMSE-zN82Xg6vgkimpP-g" target="blank" className="p-2 hover:bg-gray-600 hover:rounded-xl transition-all cursor-pointer">
        {" "}
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
