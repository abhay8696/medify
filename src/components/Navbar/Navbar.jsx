import React from 'react';
//styles
import "./Navbar.css"
//asstes
import sheildIcon from "../../assets/sheild.svg";
//components
import Button from '../Button/Button';

const Navbar = props => {
    //props

    //variables
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    //functions
    const displayLinks = () => {
        return navLinks.map(item => <span className='navLink'>{item}</span>)
    }
    return (
        <nav>
            <div className='logo'>
                <Button icon={sheildIcon} buttonClass="logoButton"/>
                <span className='logoText'>medify</span>
            </div>
            <div className='navBody'>
                <div className='navLinksDiv'>{displayLinks()}</div>
                <Button text="my bookings" buttonClass="largeButton "/>
            </div>
        </nav>
    );
};

export default Navbar;