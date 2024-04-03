import React, { useContext, useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import user from "../assets/user.jpg";
import SocialIcons from "@/components/SocialIcons";
import { VscComment } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { MyApi } from "@/app/api/api";
const Feed = () => {
  const { feed,dpImage } = useContext(MyApi);

  return (
    <div className="overflow-scroll h-[800px] ">
      <div className="flex flex-col items-start gap-2">
        {feed &&
          feed?.map((feed) => (
            <div
              key={feed._id}
              className="feedCard flex  items-start gap-2 p-4 hover:bg-surface-2 hover:rounded-xl transition-all duration-200  ease-linear mb-4"
            >
              <Image
                alt="wall"
                src={dpImage?.profileImage}
                width={60}
                height={60}
                className="rounded-full"
              />

              <div className="post h-auto">
                <div className="username flex items-center text-text-1 gap-2">
                  <h1 className="text-[1rem] font-bold">Shailesh</h1>
                  <span className="text-gray-400">•</span>
                  <time className="text-[0.69rem] text-gray-400">
                    {formatCreatedAtDate(feed?._createdAt)}
                  </time>
                </div>
                <div className="emotion  text-[0.69rem] py-0 px-3 inline-flex items-center gap-1 bg-surface-4 inline rounded-full">
                  🌴 Feeling Fresh
                </div>
                <div className="writing flex flex-col items-start justify-start">
                  <h1 className="text-[1rem] font-bold">{feed.title}</h1>
                  <p className="para text-[0.80rem] mb-4 text-gray-300">
                    {feed.description}
                  </p>
                  {feed.feedImage && (
                    <Image
                      alt="wall"
                      src={feed.feedImage}
                      className="h-auto w-full rounded-md mb-4"
                      width={100}
                      height={100}
                    />
                  )}{" "}
                  {feed?.youtubeIdLink && (
                    <div className="video-container ">
                      <iframe
                        // width="600"
                        // height="315"
                        src={`https://www.youtube.com/embed/${feed?.youtubeIdLink}`}
                        className="rounded-xl w-[600px] h-[400px] xl:w-[400px] xl:h-[300px] lg:w-[600px] md:w-[400px] sm:w-[300px]"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className="likes flex items-center justify-around text-gray-500 ">
                  <FaRegHeart className="cursor-pointer" />
                  <VscComment className="cursor-pointer" />
                  <CiShare1 className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
      </div>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Feed;
const formatCreatedAtDate = (createdAt) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
