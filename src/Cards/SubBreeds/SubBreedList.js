import React from 'react';
import SubBreed from './SubBreed';


function SubBreedList({subBreedName,clickedDogName}){
    console.log(subBreedName);
    let subBreedName1=subBreedName.slice(0,4);
    return(
     
       subBreedName1.map((subBreedName)=>{
         return <SubBreed subBreedName={subBreedName} clickedDogName={clickedDogName}/>
       })
    
    )
}

export default SubBreedList;
