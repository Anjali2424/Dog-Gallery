import { useEffect, useState } from 'react';
import './SubBreed.css';

function SubBreed({clickedDogName,subBreedName}) {
    const[subBreedImg,setSubBreedImg]=useState([])
   
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDogName}/${subBreedName}/images/random`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setSubBreedImg(data.message);
            })
    }, [clickedDogName,subBreedName])
  return (
  
      <div className="sub-breed-card">
          <img src={subBreedImg} alt="dog" />
           <h4>{subBreedName}</h4>
        </div>

  
  )
}

export default SubBreed;