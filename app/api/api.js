import React, { useState, useEffect, createContext } from "react";
import { client } from "../sanity_client";

const MyApi = createContext();

const MyApiProvider = ({ children }) => {
  const [dpImage, setDpImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [feed, setFeed] = useState([]);
  const [work, setWork] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState([]);

  const handlerAPI = () => {
    // Gallery
    const query = '*[_type == "gallery"]';
    client.fetch(query).then((data) => {
      setGallery(data[0]?.galleryPictures || []);
    });

    // Work
    const query2 = '*[_type == "work"]';
    client.fetch(query2).then((data) => {
      setWork(data || []);
      console.log("work", data);
    });

    // Feed
    const query3 = '*[_type == "feed"]';
    client.fetch(query3).then((data) => {
      setFeed(data || []);
      console.log("Feed", data);
    });

    // Skills
    const query4 = '*[_type == "skills"]';
    client.fetch(query4).then((data) => {
      setSkills(data[0].technologies || []);
    });

    // DpBanner
    const query5 = '*[_type == "dpBannerImage"]';
    client.fetch(query5).then((data) => {
      setDpImage(data[0] || null);
      setBannerImage(data[0] || null);
      
    });

    // Resume
    const query6 = '*[_type == "resume"][0].fileLink';
    client.fetch(query6).then((data) => {
      setResume(data)
    });
  };

  // Call handlerAPI when the component mounts
  useEffect(() => {
    handlerAPI();
  }, []);

  return (
    <MyApi.Provider value={{ dpImage, bannerImage,resume, feed, work, gallery, skills, handlerAPI }}>
      {children}
    </MyApi.Provider>
  );
};

export { MyApi, MyApiProvider };
