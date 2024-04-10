import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Download from './components/Download/Download'
import MainFooter from './components/MainFooter/MainFooter'
import HomePage from './components/HomePage/HomePage'
import FindPage from './components/FindPage/FindPage'
import BookingsPage from './components/BookingsPage/BookingsPage'

function App() {
  const [bookings, setBookings] = useState({})

  return (
    <>
      <div className='App'>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/home' exact element={<HomePage />} />
            <Route path='/find' exact element={<FindPage bookings={bookings}/>} />
            <Route path='/bookings' exact element={ <BookingsPage />} />
          </Routes>
        </BrowserRouter>

        <Download />
        <MainFooter />
      </div>
    </>
  )
}

export default App
