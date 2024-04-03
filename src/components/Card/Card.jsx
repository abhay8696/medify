import React from 'react';
//styles
import "./Card.css";

const Card = props => {
    //props
    const { image, text, customStyle } = props;
    return (
        <div className={`Card ${customStyle}`}> 
            <img src={image} className='cardImage'/>
            <span className='cardText'>{text}</span>
        </div>
    );
};

export default Card;