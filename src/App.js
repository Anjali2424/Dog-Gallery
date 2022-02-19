import './App.css';
import { useEffect, useState } from 'react';
import DogCardList from './Cards/DogCardList';
import CustomPopup from './CustomSearch/CustomPopup/CustomPopup';
import CustomSearch from './CustomSearch/CustomSearch';
import Popup from './PopUp/Popup';
import SearchBox from './SearchBox/SearchBox';


function App() {

  const [names, setNames] = useState([]);
  const[searchField,setSearchField]=useState('');
  const[isOpenPopup,setOpenPopup]=useState(false);
  const[clickedDog,setClickedDog]=useState({});
  const[customPopup,setCustomPopup]=useState(false)
  
  useEffect(() =>{
    fetch(`https://dog.ceo/api/breeds/list/all`)
            .then(response => response.json())
            .then(data => {
              setNames(Object.keys(data.message))
              // console.log(DogNames)
            })
          }, [])
  const handleChange=(search)=>{
   setSearchField(search);
    // console.log(search); 
    }
  const filteredDogName=names.filter((name) => {
      return name.toLowerCase().includes(searchField.toLowerCase())
    })

  const userClickedHandler = (selectDogBreed) => {
    console.log("user is clicked")
    setOpenPopup(true);
    setClickedDog(selectDogBreed);
    }
  const closePopup = () => {
    setOpenPopup(false);
    }

  const customClickedHandler = () => {
      console.log("user is clicked")
      setCustomPopup(true);
    }
  const CustomeClosePopup = () => {
    setCustomPopup(false);
    }
    return (
      <>
        {isOpenPopup ? <Popup clickedDogName={clickedDog} closePopup={closePopup}/>:null}
        {customPopup ? <CustomPopup CustomeClosePopup={CustomeClosePopup}/> : null}
        <CustomSearch customClickedHandler={customClickedHandler}/> 
        <SearchBox handleChange={handleChange}/>
        <DogCardList names={names,filteredDogName} userClickedHandler={userClickedHandler}/>
      </>
    );
}
export default App;
