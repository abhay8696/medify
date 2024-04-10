
import React from 'react';

const SearchPop = props => {
    //props
    const { locations, clickFunction } = props;
    //functions
    const displayStates = () => {
        if(!locations || !locations?.length) return null;

        return locations.map(item => <span onClick={() =>  clickFunction(item)} className='SearchPopItem'>{item}</span>)
    }
    return (
        <span className='SearchPop'>
            {displayStates()}    
        </span>
    );
};

export default SearchPop;