import { useState } from 'react'
import './App.css'
//components
import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'
import AppTop from './components/AppTop/AppTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <AppTop />  
        <Navbar />
      </div>
    </>
  )
}

export default App
