import React from 'react';
//styles
import "./SearchComp.css"
import SearchBar from '../SearchBar/SearchBar';

const SearchComp = () => {
    return (
        <div className='SearchComp'>
            <div className='commonContainer SearchCompBody'>
                <SearchBar />
            </div>
        </div>
    );
};

export default SearchComp;