import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomePage/>
      

     
      


    </>
  )
}

export default App
