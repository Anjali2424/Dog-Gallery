import {useState,useEffect} from 'react';
import './MoreSubImage.css';

function MoreSubImage({clickedDogName}){
    const[MoreImg,setMoreImg]=useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDogName}/images/random/4`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.message);
                setMoreImg(data.message);
            })
    }, [clickedDogName])
    return(
        <div className="more-image-card">
            <h4>More Images</h4>
        <img src={MoreImg[0]} alt="dog" />
        <img src={MoreImg[1]} alt="dog" />
        <img src={MoreImg[2]} alt="dog" />
        <img src={MoreImg[3]} alt="dog" />
      </div>
    )
}
export default MoreSubImage;