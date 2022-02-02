import React from 'react';
import "./comp.css"

const Value = ({submitvalue}) => {
    return (
        <div className='value'>
            <div className='items'>
                <h2>Donate for our<br/> cause</h2>
                <h5>I would like to contribute:</h5>
                <input className='valueInput' placeholder='$'  type="number"  />
                <button onClick={()=>submitvalue()}>Next step</button>
            </div>
        </div>
    );
}

export default Value;
