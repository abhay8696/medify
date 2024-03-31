import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>MEDIFY</h1>
        <Button text="search" />
      </div>
    </>
  )
}

export default App
