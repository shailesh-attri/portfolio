import React, { useEffect, useState } from "react";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import { client } from "@/app/sanity_client";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() =>{
    document.title = 'Gallery | Shailesh attri'
  },[])
  useEffect(() => {
    const query = '*[_type == "gallery"]';
    client.fetch(query).then((data) => {
      setGallery(data[0].galleryPictures);
      console.log(data[0].galleryPictures);
    });
  }, []);

  // Assuming each row contains 3 images
  const rows = gallery.reduce((acc, curr, i) => {
    const rowIndex = Math.floor(i / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="overflow-scroll h-[800px] px-4 p-4 relative">
      <h1 className="font-bold text-[2rem] mb-4">My Photos</h1>
      <div className="grid grid-cols-3  gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid gap-4 md:grid-cols-1">
            {row.map((img, imgIndex) => (
              <div key={imgIndex} className="flex justify-center">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img}
                  alt={`gallery-photo-${rowIndex}-${imgIndex}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <SocialIcons />
    </div>
  );
};

export default Gallery;
