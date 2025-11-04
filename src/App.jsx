import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Category from './Components/Category'
import Courses from './Components/Courses'
function App() {

  return (
  <main>
     <Header/>
   <Banner/>
    <div className='relative'>
      <Category/>
    </div>
    <Courses/>
  </main>
  )
}

export default App
