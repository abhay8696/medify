import React, { useState } from 'react';
//styles
import "./Navbar.css"
//asstes
import sheildIcon from "../../assets/sheildWhite.svg";
import menuIcon from "../../assets/hamburger.svg";
//components
import Button from '../Button/Button';

const Navbar = props => {
    //props
    //states
    const [menuPoisition, setMenuPosition] = useState("hideMenu");
    //variables
    const navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    //functions
    const displayLinks = () => {
        return navLinks.map(item => <span className='navLink'><span className='navLink-inner'>{item}</span></span>)
    }
    const handleMenuClick = () => {
        if(menuPoisition === "menuLeft" || menuPoisition === "hideMenu") setMenuPosition("menuRight");
        else setMenuPosition("menuLeft");
    }
    const displayMenuList = () => {
        let arr = [], delay = 0, transitionDelay;
        // ...navLinks, 
        navLinks.forEach((item, index) => {
            transitionDelay = {transitionDelay: `${delay++}00ms`} 
            return arr.push(<span style={transitionDelay} className={`menuItem ${menuPoisition}`}>{item}</span>)
        });

        arr.push(<span style={transitionDelay} className={`menuItem ${menuPoisition} menuItem-forBookings`}><Button text="my bookings" buttonClass="largeButton "/></span>);

        return arr;
    } 


    return (

        <nav>
            <div className='commonContainer'>
            <div className='mainNav'>
                <div className='logo'>
                    <Button icon={sheildIcon} buttonClass="logoButton"/>
                    <span className='logoText'>medify</span>
                </div>
                <div className='navMenuButton'>
                    <Button clickFuntion={handleMenuClick} buttonClass='whiteButton' icon={menuIcon} />
                </div>
                <div className='navBody'>
                    <div className='navLinksDiv'>{displayLinks()}</div>
                    <Button text="my bookings" buttonClass="largeButton "/>
                </div>
            </div>
            {/* <div className='navbarBottom'>
                <span className='navbarBottomPatch'></span>
            </div> */}
            <div className='menuListWrapper'>
                {displayMenuList()}
            </div>
            </div>
        </nav>
    );
};

export default Navbar;