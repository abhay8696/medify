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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <AppTop />  
        <Navbar />
        <Hero />
        <CardHolder type="offers" classForMargin={"CardHolder-offers"}/>
        <Specialization />
        <CardHolder type="persons"/>
        <PatientCaring />
        <Blogs />
      </div>
    </>
  )
}

export default App
