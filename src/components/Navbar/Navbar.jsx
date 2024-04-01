import React, { useState } from 'react';
//styles
import "./Navbar.css"
//asstes
import sheildIcon from "../../assets/sheild.svg";
import menuIcon from "../../assets/hamburger.svg";
//components
import Button from '../Button/Button';

const Navbar = props => {
    //props
    //states
    const [menuPoisition, setMenuPosition] = useState("menuRight");
    //variables
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    //functions
    const displayLinks = () => {
        return navLinks.map(item => <span className='navLink'><span className='navLink-inner'>{item}</span></span>)
    }
    return (

        <nav>
        <div className='mainNav'>
            <div className='logo'>
                <Button icon={sheildIcon} buttonClass="logoButton"/>
                <span className='logoText'>medify</span>
            </div>
            <div className='navMenuButton'><Button buttonClass='whiteButton' icon={menuIcon} /></div>
            <div className='navBody'>
                <div className='navLinksDiv'>{displayLinks()}</div>
                <Button text="my bookings" buttonClass="largeButton "/>
            </div>
        </div>
        <div className='navbarBottom'>
            <span className='navbarBottomPatch'></span>
        </div>
        </nav>
    );
};

export default Navbar;