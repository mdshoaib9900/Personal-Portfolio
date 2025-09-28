import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Project from './components/sections/Project'
import Contact from './components/sections/Contact'

function App() {

  return (
 <>
 <Navbar/>
 <Hero/>
 <About/>
 <Project/>
 <Contact/>
 <Footer/>
 </>
  )
}

export default App
