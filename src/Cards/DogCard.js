import { useEffect, useState } from 'react';
import './DogCard.css';


function DogCard({name,userClickedHandler,selectDogBreed}) {
    const [img, setImage] = useState([])
    useEffect(() =>{
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(response => response.json())
        .then(data => {
          setImage(data.message)
        //   console.log(data.message)
        })
  }, [])
    return(
        <div className='card' onClick={() => userClickedHandler(selectDogBreed)} >
            <img src={img } alt='dog-images'/>
            <h3 className='content'>{name}</h3>
        </div>
    )
}

export default DogCard;