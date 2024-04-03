import React, { useState } from 'react';
//styles
import "./SearchBar.css"
//assetes
import searchIcon from "../../assets/search.svg"
import location from "../../assets/location.svg"
//components
import Button from '../Button/Button';

const SearchBar = () => {
    //states
    const [formData, setFormData] = useState({state: "asda", city: ""}); 
    //functions
    const handleSubmit = event => {
        event.preventDefault();
    }
    const handleChange = event => {
        const {value, name} = event.target;
        
        setFormData({...formData, [name]: value});
    }
    return (
        <form onSubmit={handleSubmit} className='SearchBar'>
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={formData.state} 
                name='state' 
                onChange={handleChange}
                placeholder='state'
                id='state'
                />
            </span>
            
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={formData.city} 
                name='city' 
                onChange={handleChange}
                placeholder='city'
                />
            </span>
            <Button text="search" icon={searchIcon} buttonClass={"longButton"}/>
        </form>
    );
};

export default SearchBar;