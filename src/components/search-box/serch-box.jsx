import React from 'react';
import './search-box.css';

const SearchBox = ({searchHandle, placeholder}) => {
    return (
        <>
            <input 
                className = 'search-box'
                type='search' 
                placeholder={placeholder}
                onChange = {searchHandle}
            />
        </>
    )
}

export default SearchBox
