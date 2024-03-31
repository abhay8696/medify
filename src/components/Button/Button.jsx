import React from 'react';
//styles
import "./Button.css";

const Button = ({text}) => {
    return (
        <button className='Button navButton'>
            <span>{"login/signup"}</span>
        </button>
    );
};

export default Button;