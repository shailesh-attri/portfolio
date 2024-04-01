import React, { useState } from "react";
import Image from "next/image";
import banner from "../assets/banner.png";
import dp from "../assets/dp.jpg";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
const Sidebar = () => {
  const [message, setMessage] = useState("");

  const handleSendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+919045074895"; // Replace with the recipient's phone number
    if(encodedMessage){
        const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
        setMessage("")
    }else{
        alert("Type some message before")
    }
  };
  return (
    <div className="w-[50%]">
      <div className="banner relative">
        <Image alt="work" src={banner} className="w-full h-[200px]" />
        <div className="image absolute top-[70%]  mx-4">
          <Image
            alt="work"
            src={dp}
            className=" w-[150px] h-[150px] rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-16 px-4 mt-4">
        <span className="">
          <span className="font-bold">24</span> Posts
        </span>
        <span className="">
          <span className="font-bold">10</span> Projects
        </span>
        
      </div>
      <div className="overview px-4 p-4 ">
        <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-[2rem] flex items-center justify-center gap-2">Shailesh Attri </span>
        <span className="  bg-brand-fill px-3 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer">
          <IoLogoInstagram />
          follow
        </span>
        </div>
        <p className="mb-2 text-gray-300">Brings ideas to life with code! ✨</p>
        <p className="text-gray-300">
          Junior web developer. Creative{" "}
          <span className="text-brand-fill">#MERN</span> developer. Content
          creator. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="grid grid-cols-2 items-start justify-start px-4 p-4 gap-1 text-gray-400">
        <span className="flex items-center  gap-2">
          <MdWork />
          Available
        </span>
        <span className="flex items-center  gap-2">
          <FaGithub />
          Github
        </span>
        <span className="flex items-center  gap-2">
          <FaBirthdayCake />
          November 9th
        </span>
        <span className="flex items-center  gap-2">
          <SlCalender />
          Joined Nov 2022
        </span>
      </div>
      <p className="mb-4 text-sm  text-gray-400 px-4 py-4">
        <span className="font-bold">
          Tech: MongoDB, ExpressJs, ReactJs,NodeJs
        </span>
        <span className="text-sm">... see all skills in abouts.</span>
      </p>
      <div className="contact px-4 text-sm">
        <div className="mail flex items-center justify-between mb-2 ">
            <span className="text-gray-400 font-bold">shaileshattri83@gmail.com</span>
            <a href="mailto:shaileshattri83@gmail.com" className="bg-brand-fill px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1">Mail us</a>
        </div>
        <div className="call flex items-center justify-between">
            <span className="text-gray-400 font-bold">+91 9045074895</span>
            <a href="tel:+919045074895" className="bg-brand-fill px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1">Call us</a>
        </div>
      </div>
      <div className="contact  p-4 flex items-center justify-between">
        <input
        className="px-4 w-full  rounded-l-full bg-gray-800 h-[50px] text-sm"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendWhatsAppMessage} className="bg-brand-fill px-4 p-2 rounded-r-full text-sm flex items-center justify-center gap-1">
         <FaWhatsapp/> Send
        </button>
      </div>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Sidebar;
