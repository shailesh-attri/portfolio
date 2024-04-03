import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import { LuMonitor } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import SocialIcons from "@/components/SocialIcons";
import { client } from "@/app/sanity_client";
const Work = () => {
  const [work , setWork] = useState([])
  useEffect(()=>{
    const query2 = '*[_type == "work"]';
    client.fetch(query2).then((data) => {
      setWork(data || []);
      sendProjectCount(data?.length)
      console.log("work", data);
    }).catch(error => {
      console.error("Error fetching work data:", error);
    });
  },[])
  return (
    <div className="overflow-scroll h-[800px] ">
    {work && work?.map((work)=>(

      <div key={work._id} className="card px-4 p-4 flex flex-col items-start justify-start w-full h-auto   mb-4">
        <h1 className="font-bold text-[1rem] text-brand-stroke">
          {work.title}
        </h1>
        <p className="text-[0.80rem] text-gray-400 mb-2">{work.duration}</p>
        <p className="mb-4 text-gray-300 text-[0.80rem]">
          {work.description}
        </p>
        
        <p className="mb-4 text-sm font-bold text-gray-300">
          <span className="font-bold">Tech: </span>{work?.tech}
        </p>
        
        <div className="flex items-center justify-center gap-4 w-full">
          {work && (
            <Image alt="work" className="w-[50%] h-[200px] mb-4 rounded" width={100} height={100} src={work.ProjectImage} />
          )}
          <div className="flex w-[50%] flex-col items-center justify-center gap-4">
            <a href={work.deployLink} className="w-full text-brand-fill p-2 rounded font-bold flex items-center justify-center gap-2 cursor-pointer">
              <LuMonitor />
              View Live
            </a>
            <a  href={work.githubLink} className="w-full text-brand-fill p-2 rounded font-bold flex items-center justify-center gap-2 cursor-pointer">
              <FaCode />
              Github code
            </a>
          </div>
        </div>
      </div>
    ))}
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Work;
