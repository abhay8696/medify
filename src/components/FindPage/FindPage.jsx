import React from 'react';
//components
import SearchResults from '../SearchResults/SearchResults';
import FAQ from '../FAQ/FAQ';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';

const FindPage = ({bookings}) => {
    return (
        <>
            <AppTop />  
            <Navbar />

            <SearchResults bookings={bookings}/>

            <FAQ />
        </>
    );
};

export default FindPage;