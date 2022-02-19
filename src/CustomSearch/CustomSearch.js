import React from 'react';

function CustomSearch({customClickedHandler}){
    return(
        <>
        <div className='Heading-content'>
        <h1>Dog Gallery</h1>
            <button onClick={() => customClickedHandler()}>Custom Search</button>
        </div><br/>
        </>
    )
}

export default CustomSearch;

