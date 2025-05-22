import React, { useState } from 'react'
import './Photographie.css'

function Photographie() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#FFE1C6' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Photographie</h3>
      </div>
      {isOpen && (
        <>
          <div className="photographie-top">
            <div className="photographie-left">
              <p className="photographie-year">2023</p>
              <p className="photographie-description">
                Edition d'un Fanzine sur Indesign (Adobe) à partir de photographies argentiques. 
Les photographies constituent des réponses au questionnaire de Proust, un questionnaire de personnalité.
              </p>
            </div>
            <div className="photographie-right">
              <img src="/images/zine.png" alt="Blister" className="photographie-main-image" />
            </div>
          </div>

          <div className="photographie-gallery">
            <img src="/images/zine2.png" alt="Zine 2" className="photographie-gallery-image" />
            <img src="/images/zine3.png" alt="Zine 2" className="photographie-gallery-image" />
          </div>
        </>
      )}
    </div>
  )
}

export default Photographie
