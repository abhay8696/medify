import React from 'react';
//styles
import "./CardHolder.css"
import OfferCard from '../OfferCard/OfferCard';
import RadioButtons from '../RadioButtons/RadioButtons';

const CardHolder = ({type}) => {
    //functions
    const displayCards = () => {
        if(type === "offers"){
            return (
                <>
                    <OfferCard cardNo={1}/>
                    <OfferCard cardNo={2}/>
                    <OfferCard cardNo={1}/>
                </>
            )
        }
    }
    return (
        <div className='CardHolder'>
            <div className='cardHolderWrapper commonContainer'>
                {displayCards()}
            </div>
            <div className='radioButtonsWrapper'>
                <RadioButtons />
            </div>
        </div>
    );
};

export default CardHolder;