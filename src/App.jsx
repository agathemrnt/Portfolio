import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import About from './About'
import { AnimatePresence, motion } from 'framer-motion'
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
      <header className="d-flex justify-content-between align-items-center px-4 py-3">
        <h1>{isAboutPage ? 'Agathe Mornet-Favreau' : 'Portfolio 2025'}</h1>
        <nav className="text-end">
          <ul className="list-unstyled mb-0">
            <li className="d-inline-block mx-2">
              <Link to="/about" className="nav-about-link fw-bold text-decoration-none text-dark">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content d-flex flex-column justify-content-end">
        <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route
      path="/"
      element={
        <motion.div
          initial={{ x: 1000, opacity: 0 }}     // Home arrive depuis la droite
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}       // Home sort vers la gauche
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Home />
        </motion.div>
      }
    />
    <Route
      path="/about"
      element={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <About />
        </motion.div>
      }
    />
  </Routes>
</AnimatePresence>


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
    <div className="projects w-100 bg-light d-flex flex-column mt-5">
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
