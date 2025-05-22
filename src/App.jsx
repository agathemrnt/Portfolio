import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'  
import About from './About'
import Project from './components/Project'
import UniverSante from './components/projects/UniverSante'
import Windmap from './components/projects/Windmap'
import Wasteland from './components/projects/Wasteland'
import Exam from './components/projects/Exam'
import Photographie from './components/projects/Photographie'
import Bookmate from './components/projects/Bookmate'



import './App.css'

function AppContent() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'

  return (
    <div>
      <header>
      <h1>{isAboutPage ? 'Agathe Mornet-Favreau' : 'Portfolio 2025'}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about" className="nav-about-link">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function Home() {
  return (
    <div className="projects">
      <Bookmate />
      <Windmap />
      <Exam />
      <Photographie />
      <UniverSante />
      <Wasteland />
    </div>
  )
}

export default App
