"use client";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { useEffect, useState } from "react";
export default function Home() {
  const [profileImage, setProfileImage] = useState(null);
  const [menu, setMenu] = useState(null);
  const [SkillMenu, setSkillMenu] = useState(null);
  const handleData = (data) => {
    setProfileImage(data);
  };
  const handleMenuToggle = (selectedMenu) => {
    setMenu(selectedMenu);
  };

  const handleSkillMenuToggle = (selectedSkillMenu) => {
    setSkillMenu(selectedSkillMenu);
  };
  
  return (
    <div className="app flex px-0 justify-center  w-full">
      <div className="wrapper flex bg-black text-white w-[100%] gap-4 lg:flex-col lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <Sidebar
          sendDpImageToSidebar={handleData}
          sendMenuToggle={handleMenuToggle}
          sendSkillMenu={handleSkillMenuToggle}
        ></Sidebar>
        <Content
          profileImage={profileImage}
          menu={menu}
          SkillMenu={SkillMenu}
        ></Content>
      </div>
    </div>
  );
}
