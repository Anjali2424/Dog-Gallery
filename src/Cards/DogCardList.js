import React from 'react';
import DogCard from './DogCard';



 function DogCardList({names,userClickedHandler}) {

    return(
                names.map((name) => {
                    return <DogCard name={name} selectDogBreed={name} userClickedHandler={userClickedHandler} />
                })  
            
    )
}

export default DogCardList;

