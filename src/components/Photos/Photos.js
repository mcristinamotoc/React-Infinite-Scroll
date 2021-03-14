import React, {useState, useEffect} from 'react';
import axios from "axios";

const Photos=() =>{

    const [photos, setPhotos]= useState([]);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => setPhotos([...photos, ...response.data]))

      }, [photos]);
    
    return (
       <>
            {photos.map((photo) => (
            <div key={photo.id}>
                  <div>
                    <img src={photo.url} alt={photo.title}></img> 
                  </div>
            </div>
          ))}
       </>
    )};

export default Photos;
