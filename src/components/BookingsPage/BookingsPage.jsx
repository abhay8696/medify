import React from 'react';
//components
import Bookings from '../Bookings/Bookings';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';

const BookingsPage = () => {
    return (
        <>
            <AppTop />  
            <Navbar />
            
            <Bookings />
        </>
    );
};

export default BookingsPage;