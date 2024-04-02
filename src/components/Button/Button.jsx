import React from 'react';
//styles
import "./Button.css";

const Button = ({text, buttonClass, icon, clickFuntion}) => {
    return (
        <button className={`Button ${buttonClass}`} onClick={clickFuntion}>
            {icon ? <img src={icon} className='buttonIcon' /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
};

export default Button;