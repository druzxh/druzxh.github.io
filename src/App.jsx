import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="main-container">
      {/* <Header /> */}
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
