import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Project from './components/sections/Project'
import Contact from './components/sections/Contact'
import Blogs from './components/sections/Blogs';
import Home from './pages/Home';

function App() {

  return (
     <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
