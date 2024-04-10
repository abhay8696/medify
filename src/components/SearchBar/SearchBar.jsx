import React, { useContext, useEffect, useRef, useState } from 'react';
import axios, { all } from 'axios';
//styles
import "./SearchBar.css"
//assetes
import searchIcon from "../../assets/search.svg"
import location from "../../assets/location.svg"
//components
import Button from '../Button/Button';
import { findLocations } from '../../functions/functions';
import SearchPop from './SearchPop';
//components
import { FoundHospitalsContext } from '../../contexts/AllContexts';

//apis
const api = "https://meddata-backend.onrender.com";
const allSates = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","DC","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","PR","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","VI","Wyoming","AS","GU","MP"]

const SearchBar = props => {
    //const
    const { customClass, atBookingsPage } = props;
    //contexts
    const [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext)
    //states
    const [stateName, setStateName] = useState("");
    const [cityName, setCityName] = useState("");
    const [filteredStates, setFilteredStates] = useState([]);
    const [allCities, setAllCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [disableCityInput, setDisableCityInput] = useState(undefined);
    //refs
    const stateName_onChange = useRef(false);
    const cityName_onChange = useRef(false);
    //side effects
    useEffect(()=> {
        if(stateName_onChange.current) filterStatesFunc();
    }, [stateName])

    useEffect(()=> {
        if(cityName_onChange.current) filterCitiesFunc();
    }, [cityName])

    //functions
    const handleSubmit = async event => {
        event.preventDefault();
        
        getLocationData("hospitals")
    }

    const getLocationData = async (dataType, location) => {
        if(dataType == "cities"){
            const cities = await axios.get(`${api}/cities/${location}`);
            setAllCities(cities.data);
            setDisableCityInput(undefined);
        }
        if(dataType === "hospitals"){
            const hospitals = await axios.get(`${api}/data?state=${stateName}&city=${cityName}`);
            setFoundHospitals({hospitals: hospitals.data, cityName, stateName})
        }
    }
    const handleChange = event => {
        const {value, name} = event.target;
        
        if(name === "state"){
            stateName_onChange.current = true;
            setStateName(value)
            setDisableCityInput("disableCityInput");
            cityName_onChange.current = false;
            setCityName("")
        }

        if(name === "city"){
            cityName_onChange.current = true;
            setCityName(value)
        }
    }
    const filterStatesFunc = () => {
        
        let foundStates = findLocations(allSates, stateName);
        setFilteredStates(foundStates);
    }

    const filterCitiesFunc = () => {
        
        let foundCities = findLocations(allCities, cityName);
        setFilteredCities(foundCities);
    }

    const clickStateSuggestions = (nameOfState) => {
        setFilteredStates([]);
        stateName_onChange.current = false;
        
        setStateName(nameOfState)

        getLocationData("cities", nameOfState);
    }
    const clickCitySuggetions = (nameOfCity) => {
        setFilteredCities([]);
        cityName_onChange.current = false;
        
        setCityName(nameOfCity)
    }

    const displayInputs = () => {
        if(atBookingsPage){
            return (
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={stateName} 
                name='state' 
                onChange={filterStatesFunc}
                placeholder='state'
                id='state'
                required
                />
            </span>
        )
    }
        return( 
            <>
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={stateName} 
                name='state' 
                onChange={handleChange}
                placeholder='state'
                id='state'
                required
                />
                <SearchPop locations={filteredStates} clickFunction={clickStateSuggestions}/>
            </span>
            
            <span className={`inputWrapper ${disableCityInput}`}>
                <img src={location}/>
                <input 
                type='text' 
                value={cityName} 
                name='city' 
                onChange={handleChange}
                placeholder='city'
                required
                disabled={displayInputs ? false : true}
                />
                <SearchPop locations={filteredCities} clickFunction={clickCitySuggetions}/>
            </span>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={`SearchBar ${customClass}`}>
            {displayInputs()}
            <Button formSubmit="true" text="search" icon={searchIcon} buttonClass={"longButton"}/>
        </form>
    );
};

export default SearchBar;