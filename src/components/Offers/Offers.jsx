import React from 'react';
//styles
import "./Offers.css"
import OfferCard from '../OfferCard/OfferCard';
import RadioButtons from '../RadioButtons/RadioButtons';

const Offers = () => {
    return (
        <div className='Offers'>
            <div className='offersWrapper commonContainer'>
                <OfferCard cardNo={1}/>
                <OfferCard cardNo={2}/>
                <OfferCard cardNo={1}/>
            </div>
            <div className='radioButtonsWrapper'>
                <RadioButtons />
            </div>
        </div>
    );
};

export default Offers;