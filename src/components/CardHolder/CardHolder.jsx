import React from 'react';
//styles
import "./CardHolder.css"
//components
import OfferCard from '../OfferCard/OfferCard';
import RadioButtons from '../RadioButtons/RadioButtons';
import PersonCard from '../PersonCard/PersonCard';
import { doctorsData } from '../../allVariables';
//variables


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
        }else{return (
            doctorsData.map((item, idx) => {
                const {name, specialization, image} = item
                return <PersonCard key={`${name}Image`} name={name} specialization={specialization} image={image} />
            })
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