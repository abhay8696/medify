import React from 'react';
//styles
import "./Button.css";

const Button = ({text, buttonClass, icon, clickFuntion, formSubmit}) => {
    return (
        <button 
            className={`Button ${buttonClass}`} 
            onClick={clickFuntion}
            type={formSubmit ? "submit" : null}
        >
            {icon ? <img src={icon} className='buttonIcon' /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
};

export default Button;