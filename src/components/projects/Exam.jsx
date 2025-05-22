import React, { useState } from 'react'
import './Exam.css'

function Exam() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#D6E4A7' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>ExAM</h3>
      </div>
      {isOpen && (
        <div className="exam-content">
          <div className="exam-left">
            <img src="/images/examlogo.png" alt="ExAM Logo" className="exam-logo" />
            <p className="exam-subtitle"><strong>2024 | EXperimental Art Museum</strong></p>
            <p className="exam-description">
              ExAM est une plateforme innovante conçue pour présenter des œuvres d’art numérique expérimentales. Ce projet explore les nouvelles façons de vivre une exposition à travers les technologies web interactives.
            </p>
          </div>
          <div className="exam-right">
            <img src="/images/Exam.png" alt="Aperçu ExAM" className="exam-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Exam
