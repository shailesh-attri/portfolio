import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { client } from "@/app/sanity_client"
import { FaStackOverflow } from "react-icons/fa";;
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Sidebar = ({sendDpImageToSidebar,sendMenuToggle,sendSkillMenu}) => {
  const [dpImage, setDpImage] = useState(null)
  const [bannerImage, setBannerImage] = useState(null)
  const [resume, setResume] = useState(null)
  const [projectCount, setProjectCount] = useState([])
  const [feed, setFeed ] = useState([])

  const handleMenu = (selectedMenu)=>{
    sendMenuToggle(selectedMenu)
    console.log("selectedMenu", selectedMenu);
  }
  const handleSkills = (selectedSkillsMenu)=>{
    sendSkillMenu(selectedSkillsMenu)
  }

  useEffect(()=>{
    const query5 = '*[_type == "dpBannerImage"]';
    client.fetch(query5).then((data) => {
      setDpImage(data[0] || null);
      setBannerImage(data[0] || null);
      setDpImage(data[0] || null)
    }).catch(error => {
      console.error("Error fetching dpBannerImage data:", error);
    });

    

    const query6 = '*[_type == "resume"][0].fileLink';
    client.fetch(query6).then((data) => {
      setResume(data)
    }).catch(error => {
      console.error("Error fetching resume data:", error);
    });

    const query2 = '*[_type == "work"]';
    client.fetch(query2).then((data) => {
      setProjectCount(data)
      console.log("work", data);
    }).catch(error => {
      console.error("Error fetching work data:", error);
    });

    
  
    const query3 = '*[_type == "feed"]';
    client.fetch(query3).then((data) => {
      setFeed(data || []);
      console.log("Feed", data);
    }).catch(error => {
      console.error("Error fetching feed data:", error);
    });

    
  },[])
  useEffect(()=>{
    const sendDpImage = ()=>{
      sendDpImageToSidebar(dpImage?.profileImage);
    }
    sendDpImage()
  },[dpImage])
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
  const PostLength = feed?.length
  const ProjectLength = projectCount?.length
  return (
    <div className="w-[50%] lg:w-[100%] 2xl:w-[100%]">
      <div className="banner relative">
        <img alt="work" src={bannerImage?.bannerImage} 
        width={300}
        height={200}
        className="w-full h-[200px] sm:h-[180px]" />
        <div className="image absolute top-[70%] sm:top-[80%]  mx-4">
          <Image
            alt="work"
            src={dpImage?.profileImage}
            className=" w-[150px] h-[150px] sm:w-[100px] sm:h-[100px] rounded-full border-2 border-white"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-16 px-4 mt-4 sm:gap-8 sm:text-sm">
        <span className="">
          <span className="font-bold">{PostLength}</span> Posts
        </span>
        <span className="cursor-pointer" onClick={()=>handleMenu('work')}>
          <span className="font-bold">{ProjectLength}</span> Projects
        </span>
        
      </div>
      <div className="overview px-4 p-4 ">
        <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-[2rem] sm:text-[1.2rem] flex items-center justify-center gap-2 font-Lora">Shailesh Attri </span>
        <a href={resume} download="Shailesh-Resume.pdf" className="  font-LoraLight bg-brand-fill px-3 py-1 rounded-full flex items-center justify-center gap-2 cursor-pointer">
          <MdDownload />
          Resume
        </a>
        </div>
        <p className="mb-2 text-gray-300 sm:text-sm">Brings ideas to life with code! ✨</p>
        <p className="text-gray-300 sm:text-sm font-LoraLight">
          Full Stack Developer at <a href="https://bucle.dev" className="text-brand-fill">BucleLabs Pvt. Ltd. </a>, Gurugram, Haryana, Ind. Creative{" "}
          <span className="text-brand-fill">#MERN</span> developer. Content
          creator. Recently completed my Master&apos;s in Computer Applications from Galgotias University.
        </p>

      </div>
      <div className="grid grid-cols-2 items-start justify-start px-4 p-4 gap-1 text-gray-400 sm:text-sm">
        <a href='https://www.linkedin.com/in/shailesh-attri-web/' target="blank" className="flex items-center  gap-2">
          <FaLinkedin />
          LinkedIn
        </a>
        <a href="https://github.com/shailesh-attri" target="blank" className="flex items-center  gap-2">
          <FaGithub />
          Github
        </a>
        <a href='https://www.instagram.com/shailesh_attri' target="blank" className="flex items-center  gap-2">
          <FaInstagram />
          Instagram
        </a>
        <a href='https://stackoverflow.com/users/26354985/shailesh-attri' target="blank" className="flex items-center  gap-2">
          <FaStackOverflow />
          Stack-Overflow
        </a>
      </div>
      <p className="mb-4 text-sm  text-gray-400 px-4 py-4">
        <span className="font-bold font-Lora">
          Tech: MongoDB, ExpressJs, ReactJs,NodeJs...
        </span>
        <span className="text-sm hover:text-brand-fill transition-all underline cursor-pointer" onClick={()=>handleSkills('about')}> see all skills in abouts.</span>
      </p>
      <div className="contact px-4 text-sm">
        <div className="mail flex items-center justify-between mb-2 ">
            <span className="text-gray-400 font-bold font-Lora">shaileshattri83@gmail.com</span>
            <a href="mailto:shaileshattri83@gmail.com" className="bg-brand-fill px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1">Mail us</a>
        </div>
        <div className="call flex items-center justify-between">
            <span className="text-gray-400 font-bold font-Lora">+91 9045074895</span>
            <a href="tel:+919045074895" className="bg-brand-fill px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1">Call us</a>
        </div>
      </div>
      <div className="contact   flex items-center justify-between mt-2 p-2">
        <input
        className="px-4 w-full  rounded-l-full bg-gray-800 h-[50px] text-sm focus:outline-none"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendWhatsAppMessage} className="bg-brand-fill px-4 h-[50px]  rounded-r-full text-sm flex items-center justify-center gap-1">
         <FaWhatsapp/> Send
        </button>
      </div>
      {/* <SocialIcons></SocialIcons> */}
    </div>
  );
};

export default Sidebar;
