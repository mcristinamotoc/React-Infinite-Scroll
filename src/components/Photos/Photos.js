import React, { useState, useEffect } from "react";
import { StyledImg, StyledCard } from "./Photos.style.js";
import { Loader } from "../Loader/LoadingAnimation.js";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    getPhotos();
  }, [photos]);

  const getPhotos = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => {
      setPhotos([...photos, ...response.data]);
    });
  };

  return (
    <>
      <InfiniteScroll
        dataLength={photos.length}
        next={getPhotos}
        hasMore={true}
        loader={<Loader/>}
      >
        <StyledCard>
          {photos.map((photo) => (
              <StyledImg 
              src={photo.thumbnailUrl} 
              alt={photo.title} 
              key={photo.id}>         
              </StyledImg>
          ))}
        </StyledCard>
      </InfiniteScroll>
    </>
  );
};

export default Photos;
