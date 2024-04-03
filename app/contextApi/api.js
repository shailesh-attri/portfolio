import React, { useState, useEffect, createContext } from "react";

const UserApi = createContext();

const UserApiProvider = ({ children }) => {
  const [dpImage, setDpImage] = useState(null);
  const [feedCount, setFeedCount] = useState([]);
  

  const sendFeedCount = (data) => {
    setFeedCount(data);
  };
  
  const sendDpImage = (data) => {
    setDpImage(data);
  };

  return (
    <UserApi.Provider
      value={{
        sendFeedCount,
        sendDpImage,
        dpImage,
        feedCount,
      }}
    >
      {children}
    </UserApi.Provider>
  );
};
export {UserApiProvider, UserApi}
