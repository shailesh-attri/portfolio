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
    }).catch(error => {
      console.error("Error fetching gallery data:", error);
    });
  
    // Work
    const query2 = '*[_type == "work"]';
    client.fetch(query2).then((data) => {
      setWork(data || []);
      console.log("work", data);
    }).catch(error => {
      console.error("Error fetching work data:", error);
    });
  
    // Feed
    const query3 = '*[_type == "feed"]';
    client.fetch(query3).then((data) => {
      setFeed(data || []);
      console.log("Feed", data);
    }).catch(error => {
      console.error("Error fetching feed data:", error);
    });
  
    // Skills
    const query4 = '*[_type == "skills"]';
    client.fetch(query4).then((data) => {
      setSkills(data[0].technologies || []);
    }).catch(error => {
      console.error("Error fetching skills data:", error);
    });
  
    // DpBanner
    const query5 = '*[_type == "dpBannerImage"]';
    client.fetch(query5).then((data) => {
      setDpImage(data[0] || null);
      setBannerImage(data[0] || null);
    }).catch(error => {
      console.error("Error fetching dpBannerImage data:", error);
    });
  
    // Resume
    const query6 = '*[_type == "resume"][0].fileLink';
    client.fetch(query6).then((data) => {
      setResume(data)
    }).catch(error => {
      console.error("Error fetching resume data:", error);
    });
  };
  

  

  return (
    <MyApi.Provider value={{ dpImage, bannerImage,resume, feed, work, gallery, skills, handlerAPI }}>
      {children}
    </MyApi.Provider>
  );
};

export { MyApi, MyApiProvider };
