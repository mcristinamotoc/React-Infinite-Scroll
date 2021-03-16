import React, { useState, useEffect } from "react";
import { StyledImg, StyledCard } from "./Photos.style.js";
import { Loader } from "../Loader/LoadingAnimation.js";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhotos, setNewPhotos]=useState([]);

  useEffect(() => {
    getPhotos();
  }, [photos]);

  const getPhotos = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10`)
      .then((response) => {
        setPhotos([...photos, ...response.data]);
      });
  };

  const deleteData = (index) => {
    const newPhotos = photos;
    newPhotos.splice(index,1);
    console.log(newPhotos);
    setNewPhotos([...newPhotos]);
  };

  // const deleteData = (id) => {
  //   const deleteData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos/&{id}",
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: null,
  //       }
  //     );

  //     const data = await response.json();
  //   };
  //   deleteData();
  // };
 

  return (
    <>
      <InfiniteScroll
        dataLength={photos.length}
        next={getPhotos}
        hasMore={true}
        loader={<Loader/>}
      >
        <StyledCard>
          {photos.map((photo,index) => (
            <StyledImg
              key={index}
              src={photo.thumbnailUrl}
              alt={photo.title}
              onClick={deleteData}
            ></StyledImg>
          ))}
        </StyledCard>
      </InfiniteScroll>
    </>
  );
};

export default Photos;
