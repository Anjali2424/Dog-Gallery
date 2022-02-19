import { useEffect, useState } from 'react';
import MoreSubImage from '../Cards/MoreSubImage/MoreSubImage';
import SubBreedList from '../Cards/SubBreeds/SubBreedList';
import './Popup.css';

export default function Popup({clickedDogName,closePopup,names}) {
  
  const[subBreedName,setSubBreedName]=useState([]);
  useEffect(() => {
      fetch(`https://dog.ceo/api/breed/${clickedDogName}/list`)
          .then(response => response.json())
          .then(data => {
              // console.log(data.message);
             setSubBreedName(data.message);
          })
  }, [clickedDogName])
  return (
    <div className="popup-container">
       <div className="popup-box">
            <div className="cancel-symbol" onClick={closePopup}>x</div>
                <h1 className='heading-popup'>Selected {clickedDogName} </h1>
                    <div className='session-1'>
                        <h3>Sub Breeds</h3>       
                            {subBreedName.length===0 ?<h2>No Sub-Breeds found</h2> : <SubBreedList clickedDogName={clickedDogName} subBreedName={subBreedName}/>} 
                            <MoreSubImage clickedDogName={clickedDogName} names={names} />  
                    </div>
            </div>
        </div>
        )}
  