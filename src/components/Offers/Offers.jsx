import React from 'react';
//styles
import "./Offers.css"
import OfferCard from '../OfferCard/OfferCard';

const Offers = () => {
    return (
        <div className='Offers paddingForSmallScreens'>
            <div className='offersWrapper commonContainer'>
                <OfferCard cardNo={1}/>
                <OfferCard cardNo={2}/>
                <OfferCard cardNo={1}/>
            </div>
        </div>
    );
};

export default Offers;