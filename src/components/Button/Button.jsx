import React from 'react';
//styles
import "./Button.css";

const Button = ({text, buttonClass, icon}) => {
    return (
        <button className={`Button ${buttonClass}`}>
            {icon ? <img src={icon} className='buttonIcon' /> : null}
            <span>{text}</span>
        </button>
    );
};

export default Button;