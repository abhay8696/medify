import React, { useContext } from 'react';
//styles
import "./SearchResults.css";
//assets
import checkIcon from "../../assets/checkBadge.svg"
//components
import CommonSubText from "../CommonSubText/CommonSubText";
import ResultCard from '../ResultCard/ResultCard';
//contexts
import { FoundHospitalsContext } from '../../contexts/AllContexts';

const headline = "15 medical centers available in Alaska";
const subText = "Book appointments with minimum wait-time & verified doctor details";
const SearchResults = () => {
    
    //context
    const [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext);
    return (
        <div className='SearchResults'>
            <div className='commonContainer resultsBody'>
                <div className='resultsHead'>
                    <h5>{headline}</h5>
                    <p>
                        <img src={checkIcon} alt='check icon' className='checkIcon'/>
                        <span>{subText}</span>
                    </p>
                </div>
                <div className='cardAndSensodyne'>
                    <aside className='resultCardsArray'>
                        <ResultCard />
                    </aside>
                    <aside className='sensodyne'></aside>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;