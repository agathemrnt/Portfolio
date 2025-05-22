import React, { useState } from 'react'
import './Windmap.css'

function Windmap() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#A1C8DB' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Windmap</h3>
      </div>
      {isOpen && (
        <div className="windmap-open-content">
        <div className="windmap-content">
          <div className="windmap-text">
            <p>
              Windmap est un projet de visualisation interactive des données de vent en temps réel. Il permet aux utilisateurs d’explorer les flux de vent à travers une interface graphique intuitive et animée, utile à la fois pour l’éducation, la recherche et la planification environnementale.
            </p>
          </div>
          <div className="windmap-images">
            
    <img
      src="/images/windmaplogo.png"
      alt="Logo Windmap"
      className="windmap-logo"
    />
  
            <img
            src="/images/windmap.png"
            alt="Capture Windmap"
            className="windmap-main fixed-bottom"
            />
          </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default Windmap