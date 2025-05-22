import React, { useState } from 'react'
import './Bookmate.css'

function Bookmate() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#F7CACA' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Bookmate</h3>
      </div>
      {isOpen && (
        <div className="bookmate-content">
          <div className="bookmate-column bookmate-info">
            <img src="/images/bookmatelogo.png" alt="Bookmate Logo" className="bookmate-logo" />
            <p className="bookmate-year">2025</p>
            <p className="bookmate-description">
              Bookmate est un projet d’édition numérique explorant les formats hybrides entre le livre et l’application mobile.
            </p>
          </div>
          <div className="bookmate-column">
            <img src="/images/bookmate.png" alt="Bookmate Image 1" className="bookmate-image" />
          </div>
          <div className="bookmate-column">
            <img src="/images/bookmate1.png" alt="Bookmate Image 2" className="bookmate-image" />
          </div>
          <div className="bookmate-column">
            <img src="/images/bookmate2.png" alt="Bookmate Image 3" className="bookmate-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Bookmate
