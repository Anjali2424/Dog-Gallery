import React, { useState, useEffect } from 'react';
import './CustomPopup.css';


export default function CustomPopup({CustomeClosePopup}) {
    const [dogs, setDogs] = useState('')
    const [breedName, setBreedName] = useState('')
    const [imageCount, setImageCount] = useState('')
    const [dogImages, setDogImages] = useState('')
    const [breedNameShow, setBreedNameShow] = useState('')
    const [imageCountShow, setImageCountShow] = useState('')

    const getDogs = useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((data) => {
            setDogs(data.message)
        })
    },[])
    const getImages = () => {
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random/${imageCount}`)
        .then((response) => response.json())
        .then((data) => {
            setDogImages(data.message)
        })
        setBreedNameShow(breedName)
        setImageCountShow(imageCount)
    }

    return (
        <div className="popup-container">
           <div className="popup-box">
                <div className="cancel-symbol" onClick={CustomeClosePopup}>x</div>
                    <h1 className='heading-popup'>Custom Search </h1>
                    <div className="modal-content">
                    <div className="modal-search">
                        <div className="modal-search-box">
                            <select value={breedName} onChange={(e) => setBreedName(e.target.value)}>
                                <option>Select a Breed</option>
                                {Object.keys(dogs).map((dogs, i) => (
                                    <option key={i} value={dogs}>{dogs}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-search-box">
                            <input type="number" placeholder="Number of Images" value={imageCount} onChange={(e) => setImageCount(e.target.value)}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={() => getImages()}>Get Images</button>
                    </div> <br/> <br/>
                    {dogImages && <h5 className="search-modal-heading">Showing "{imageCountShow}" Images "{breedNameShow}"</h5>}
                    {dogImages && 
                        <div className="search-result">
                            {dogImages && dogImages.map((dogImages, i) => (
                                <div key={i} className="search-result-box">
                                    <img src={dogImages} alt="searched-dog"/>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            </div>
            )}
