
import React, { useContext } from 'react';
//styles
import "./Bookings.css";
//contexts
import { BookingsContext } from '../../contexts/AllContexts';

const Bookings = () => {
    //contexts
    const [bookings, setBookings] = useContext(BookingsContext);
    return (
        <div className='Bookings'>
            <h1>Bookings</h1>
        </div>
    );
};

export default Bookings;