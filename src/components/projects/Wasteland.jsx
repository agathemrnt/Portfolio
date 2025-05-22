import React, { useState } from 'react'
import './Wasteland.css'

function Wasteland() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#C6E6E8' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Wasteland</h3>
      </div>
      {isOpen && (
        <div className="wasteland-content">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/505F6APAOUY?si=8oFvYaS1rAt3uYLR"
              title="Vidéo Wasteland"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="wasteland-text">
            2023 | Unity 
          </p>
          <p className="wasteland-text">
            Jeu vidéo sur le thème de l'Anthropocène, cette nouvelle ère géologique marquée par l'activité humaine. Le jeu constitue en un environnement que l'on parcourt à la première personne représentant une décharge de voitures abandonnées. Le jeu a été modélisé sur le Game Engine Unity avec l'implémentation de code C#
          </p>
        </div>
      )}
    </div>
  )
}

export default Wasteland

