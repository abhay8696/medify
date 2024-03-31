import React from 'react';
//styles
import "./Button.css";

const Button = ({text, buttonClass}) => {
    return (
        <button className={`Button ${buttonClass}`}>
            <span>{text}</span>
        </button>
    );
};

export default Button;