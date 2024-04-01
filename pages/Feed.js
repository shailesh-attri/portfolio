import React, { useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import user from "../assets/user.jpg";
import SocialIcons from "@/components/SocialIcons";
import { VscComment } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

const Feed = () => {
  const [videoIds, setVideoIds] = useState(["kaK3ye8rczA?si=wnqhFLfwpMwFnWgU"]);
  const embedLinks = videoIds.map(
    (videoId) => `https://www.youtube.com/embed/${videoId}`
  );

  return (
    <div className="overflow-scroll h-[800px]">
      <div className="feedCard flex items-start gap-2 p-4 hover:bg-surface-2 hover:rounded-xl transition-all duration-200  ease-linear mb-4">
        <Image alt='wall' src={user} width={60} height={60} className="rounded-full" />
        <div className="post h-auto">
          <div className="username flex items-center text-text-1 gap-2">
            <h1 className="text-[1rem] font-bold">Shailesh</h1>
            <span className="text-gray-400">•</span>
            <time className="text-[0.69rem] text-gray-400">30 Mar 2024 </time>
          </div>
          <div className="emotion  text-[0.69rem] py-0 px-3 inline-flex items-center gap-1 bg-surface-4 inline rounded-full">
            🌴 Feeling Fresh
          </div>
          <div className="writing flex flex-col items-start justify-start">
            <h1 className="text-[1rem] font-bold">Hello World</h1>
            <p className="para text-[0.80rem] mb-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Saepe, earum exercitationem! Autem minima, ipsum fugit ipsa vero
              asperiores ad aut explicabo repellendus, ullam architecto saepe
              aliquid odio. Saepe, eum quas!
            </p>
            {wall && (
              <Image alt='wall' src={wall} className="h-auto w-full rounded-md mb-4" />
            )}{" "}
            {/* {embedLinks &&
              embedLinks?.map((embedLink, index) => (
                <div key={index} className="video-container ">
                  <iframe
                    width="560"
                    height="315"
                    src={embedLink}
                    className="rounded-xl"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))} */}
          </div>
        <div className="likes flex items-center justify-around text-gray-500 ">
              <FaRegHeart className="cursor-pointer"/>
              <VscComment className="cursor-pointer"/>
              <CiShare1 className="cursor-pointer"/>
        </div>
        </div>
      </div>
        <SocialIcons></SocialIcons>
    </div>
  );
};

export default Feed;
