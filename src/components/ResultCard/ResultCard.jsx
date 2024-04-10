import React, { useContext, useState } from 'react';
//styles
import "./ResultCard.css";
//assets
import hospitalImg from "../../assets/hospitalCircle.svg";
import likeIcon from "../../assets/like.svg";
//components
import Button from '../Button/Button';
import Slots from '../Slots/Slots';
//contexts
import { BookingsContext } from '../../contexts/AllContexts';

const resultCardHead = "Fortis Hospital Richmond Road";
const resultLocation = "Banglore, Karnataka";
const resultCardSubtext = "Smilessence Center for Advanced Dentistry + 1";
const resultCardOffer = "Consultation fee at clinic";


const ResultCard = props => {
    //props
    const { hospitalName, county, city, rating, hospitalType } = props;
    //contexts
    const [bookings, setBookings] = useContext(BookingsContext)
    //states
    const [dateTime, setDateTime] = useState(undefined);
    const [slotsON, setSlotsON] = useState(false);
    //functions
    const handleCardClick = () => setSlotsON(!slotsON);
    const handleButton = () => {
        if(!slotsON) return setSlotsON(true);
    }


    return (

        <div className='ResultCardWrapper'>
            <div className='ResultCard' onClick={handleCardClick}>
                <div className='resultCardImageWrapper'>
                    <img src={hospitalImg} alt="hospital icon" />
                </div>
                <div className='resultCardContent'>
                    <div className='resultContent-left'>
                        <h6 className='resultCardTitle'>{hospitalName}</h6>
                        <div className='resultLocation'>
                            <span className='resultCity'>{`${county}, ${city}`}</span>
                            <span className='resultCardSubtext'>{hospitalType}</span>
                            <span className='resultCardSubtext'>more</span>
                        </div>
                        <div className='resultCardOfferLine'>
                            <span className='FREE'>FREE</span>
                            <span className='strikeThrough'>₹500</span>
                            <span>{resultCardOffer}</span>
                        </div>
                        <Button buttonClass={"smallButton greenButton"} text={rating} icon={likeIcon} />
                    </div>
                    <div className='resultContent-right'>
                        <span className='available'>Available Today</span>
                        <Button clickFuntion={handleButton} buttonClass={"longButton"} text={"Book FREE Center Visit"}/>
                    </div>
                </div>
            </div>
            <Slots slotsON={slotsON}/>
        </div>
    );
};

export default ResultCard;