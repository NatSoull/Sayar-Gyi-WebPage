/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import HeroSession from './components/HeroSession'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import MySkill from './components/MySkill'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className=''>
        <HeroSession/>
        <AboutMe/>
        <Education/>
        <MySkill/>
        <ContactMe/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
