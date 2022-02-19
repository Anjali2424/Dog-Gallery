import React from 'react';
import './SearchBox.css';

function SearchBox({handleChange})  {
   
    return (
        <>
        <div >
            <input 
                type='text' 
                placeholder="Type here to filter by breed" 
                // value={filter}
                onChange={(e)=>handleChange(e.target.value)}
                />
        </div>
        </>
        
    )
}

export default SearchBox;