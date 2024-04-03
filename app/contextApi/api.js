import React, { useState, useEffect, createContext } from "react";

const UserApi = createContext();

const UserApiProvider = ({ children }) => {
  const [dpImage, setDpImage] = useState(null);
  const [feedCount, setFeedCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  const sendFeedCount = (data) => {
    setFeedCount(data);
  };
  const sendProjectCount = (data) => {
    setProjectCount(data);
  };

  const sendDpImage = (data) => {
    setDpImage(data);
  };

  return (
    <UserApi.Provider
      value={{
        sendFeedCount,
        sendProjectCount,
        sendDpImage,
        dpImage,
        feedCount,
        projectCount,
      }}
    >
      {children}
    </UserApi.Provider>
  );
};
export {UserApiProvider, UserApi}
