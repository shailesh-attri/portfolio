import React, { useEffect, useState } from "react";
import Link from "next/link";
import Feed from "@/pages/Feed";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Gallery from "@/pages/Gallery";
const Content = ({profileImage,menu,SkillMenu}) => {
  console.log("selectedMenu", menu);
  const Menu = ["Feed", "About", "Work", "Gallery"];
  const [selectedMenu, setSelectedMenu] = useState("feed");
  useEffect(() => {
    if(menu){
      setSelectedMenu(menu)
    }
    if(SkillMenu){
      setSelectedMenu(SkillMenu)
      
    }
  },[menu,SkillMenu])

  return (
    <div className="w-[50%] h-full lg:w-[100%] 2xl:w-[100%]">
      <div className="wrapper flex flex-col justify-center gap-8">
        <div className="Menu flex items-center justify-between">
          {Menu.map((item, index) => (
            <span
              className={`items p-2 px-4 w-full text-center border-y-4 border-transparent cursor-pointer ${
                selectedMenu === item.toLowerCase()
                  ? "border-b-brand-stroke bg-surface-2"
                  : ""
              }`}
              key={index}
              onClick={() => setSelectedMenu(item.toLowerCase())}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="menuContent h-[800px]">
          {selectedMenu === "feed" && <Feed profileImage={profileImage}/>}
          {selectedMenu === "about" && <About SkillMenu={SkillMenu}/>}
          {selectedMenu === "work" && <Work />}
          {selectedMenu === "gallery" && <Gallery />}
        </div>
      </div>
    </div>
  );
};

export default Content;
