import React, { useEffect, useState } from "react";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import { client } from "@/app/sanity_client";
const Gallery = () => {
  const [gallery, setGallery] = useState([])
  useEffect(()=>{
    const query = '*[_type == "gallery"]';
    client.fetch(query).then((data)=>{
      setGallery(data[0].galleryPictures)
      console.log(data[0].galleryPictures);
    })
  },[])
  
  return (
    <div className="overflow-scroll h-[800px] px-4 p-4 relative">
      <h1 className="font-bold text-[2rem] mb-4">My Photos</h1>
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-4">
      {gallery && gallery.map((img, i)=>(

            <div
            key={i}
            >
              <Image 
                className="  max-w-full h-40 rounded-lg "
                src={`${img}`}
                alt="gallery-photo"
                width={200} // Assuming `img` object has a `width` property
                height={200}
              />
            </div>
      ))}
         
      </div>
      
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Gallery;
