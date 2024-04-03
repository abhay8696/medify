import { useState } from 'react'
import './App.css'
//components
import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'
import AppTop from './components/AppTop/AppTop'
import Hero from './components/Hero/Hero'
import Offers from './components/Offers/Offers'
import Specialization from './components/Specialization/Specialization'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <AppTop />  
        <Navbar />
        <Hero />
        <Offers />
        <Specialization />
      </div>
    </>
  )
}

export default App
