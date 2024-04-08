import { useState } from 'react'
import './App.css'
//components
import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'
import AppTop from './components/AppTop/AppTop'
import Hero from './components/Hero/Hero'
import CardHolder from './components/CardHolder/CardHolder'
import Specialization from './components/Specialization/Specialization'
import PatientCaring from './components/PatientCaring/PatientCaring'
import Blogs from './components/Blogs/Blogs'
import Families from './components/Families/Families'
import FAQ from './components/FAQ/FAQ'
import Download from './components/Download/Download'
import MainFooter from './components/MainFooter/MainFooter'
import SearchResults from './components/SearchResults/SearchResults'

function App() {
  const [bookings, setBookings] = useState({})

  return (
    <>
      <div className='App'>
        {/* <AppTop />  
        <Navbar /> */}
        {/* <Hero />
        <CardHolder type="offers" classForMargin={"CardHolder-offers"}/>
        <Specialization />
        <CardHolder type="persons"/>
        <PatientCaring />
        <Blogs />
        <Families /> */}
        <SearchResults bookings={bookings}/>
        {/* <FAQ />
        <Download />
        <MainFooter /> */}
      </div>
    </>
  )
}

export default App
