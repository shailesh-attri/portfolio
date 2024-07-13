import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import user from "../assets/user.jpg";
import SocialIcons from "@/components/SocialIcons";
import { VscComment } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { client } from "@/app/sanity_client";

const Feed = ({ profileImage }) => {
  document.title = 'Feed | Shailesh attri'
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const query3 = '*[_type == "feed"]';
    client
      .fetch(query3)
      .then((data) => {
        setFeed(data || []);
        console.log("Feed", data);
      })
      .catch((error) => {
        console.error("Error fetching feed data:", error);
      });
  }, []);
  const paraGraphStyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    transition: "all 0.2s linear",
  };

  const [expanded, setExpanded] = useState(false);
  const [expandedFeedIndex, setExpandedFeedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedFeedIndex(index === expandedFeedIndex ? null : index);
  };
  return (
    <div className="overflow-scroll h-[800px] ">
      <div className="flex flex-col items-start gap-2">
        {feed &&
          feed
            .sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt))
            .map((feed) => (
              <div
                key={feed._id}
                className="feedCard flex  items-start gap-2 p-4  mb-4"
              >
                <Image
                  alt="wall"
                  src={profileImage}
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
                    🌴 {feed?.feelings}
                  </div>
                  <div className="writing flex flex-col items-start justify-start">
                    <h1 className="text-[1rem] font-bold font-Lora">{feed.title}</h1>
                    <p
                      className={`font-LoraLight para flex  text-[0.80rem] mb-0 text-gray-300 `}
                      style={
                        expandedFeedIndex === feed._id ? null : paraGraphStyle
                      }
                    >
                      {feed.description}
                    </p>
                    {!expanded && (
                      <button
                        className="text-brand-fill text-sm cursor-pointer mb-2"
                        onClick={() => toggleExpand(feed._id)}
                      >
                        {expandedFeedIndex === feed._id
                          ? "Read less"
                          : "Read more"}
                      </button>
                    )}
                    {feed.feedImage && (
                      <img
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
                          src={`https://www.youtube.com/embed/${feed?.youtubeIdLink}?autoplay=1&mute=1&loop=1`}
                          className="rounded-xl w-[630px] h-[400px] xl:w-[400px] xl:h-[300px] lg:w-[600px] md:w-[500px] sm:w-[300px]"
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
