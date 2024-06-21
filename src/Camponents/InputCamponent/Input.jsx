import React from 'react';
import './inputstyle.css';
export default function Input({ handleChange, inputType, name, errorType }) {
    return (
        <div className='input-group'>
            <input
                type="text"
                name={name}
                placeholder={name}
                value={inputType}
                onChange={handleChange}
            />
            {errorType && <p style={{color:"white",padding:".5rem"}}>{errorType}</p>}
        </div>
    );
}



