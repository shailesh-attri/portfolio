import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import { LuMonitor } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import SocialIcons from "@/components/SocialIcons";
import { client } from "@/app/sanity_client";
const Work = () => {
  const [work , setWork] = useState([])
  useEffect(() =>{
    document.title = 'Gallery | Shailesh attri'
  },[])
  useEffect(()=>{
    const query2 = '*[_type == "work"]';
    client.fetch(query2).then((data) => {
      setWork(data || []);
      console.log("work", data);
    }).catch(error => {
      console.error("Error fetching work data:", error);
    });
  },[])

  const paraGraphStyle = {
    WebkitLineClamp:2,
    WebkitBoxOrient:'vertical',
    overflow: 'hidden',
    display:'-webkit-box',
    transition:"all 0.2s linear"
  }
  
    const [expanded, setExpanded] = useState(false);
    const [expandedFeedIndex, setExpandedFeedIndex] = useState(null);
    const toggleExpand = (index) => {
      setExpandedFeedIndex(index === expandedFeedIndex ? null : index);
    };
  return (
    <div className="overflow-scroll h-[800px] ">
    {work && work
    .sort((a,b)=>new Date(b._updatedAt) - new Date(a._updatedAt))
    .map((work)=>(
      <div key={work._id} className="card px-4 p-4 flex flex-col items-start justify-start w-full h-auto   mb-4">
        <h1 className="font-bold text-[2rem] text-brand-stroke w-full font-Lora">
          {work.title}
        </h1>
        <p className="text-[0.80rem] text-gray-400 mb-2 w-full">{work.duration}</p>
        <p className="mb-0 text-gray-300 text-[0.80rem] font-LoraLight"
        style={expandedFeedIndex === work._id  ? null : paraGraphStyle}
        >
          {work.description}
        </p>
        {!expanded && (
                <button className="text-brand-fill text-sm cursor-pointer mb-2" onClick={()=>toggleExpand(work._id)}>
                {expandedFeedIndex === work._id  ? "Read less" : "Read more"}
                </button>
              )}
        <p className="mb-4 text-sm font-LoraLight font-bold text-gray-300 w-full">
          <span className="font-bold ">Tech: </span>{work?.tech}
        </p>
        
        <div className="flex items-center justify-center gap-4 w-full">
          {work && (
            <img alt="work" className="w-[50%] h-[200px] mb-4 rounded" width={100} height={100} src={work.ProjectImage} />
          )}
          <div className="flex w-[50%] flex-col items-center justify-center gap-4">
          {work.deployLink &&
            <a target="blank" href={work.deployLink} className="font-Lora w-full text-brand-fill p-2 rounded font-bold flex items-center justify-center gap-2 cursor-pointer">
              <LuMonitor />
              View Live
            </a>
          }
            {work?.githubLink && 
            <a target="blank" href={work.githubLink} className="font-Lora w-full text-brand-fill p-2 rounded font-bold flex items-center justify-center gap-2 cursor-pointer">
              <FaCode />
              Github code
            </a>
            }
          </div>
        </div>
      </div>
    ))}
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Work;
