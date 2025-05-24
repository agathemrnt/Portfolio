import React, { useState } from 'react'

function Wasteland() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#C6E6E8' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Wasteland</h3>
      </div>

      {isOpen && (
        <div className="d-flex flex-column align-items-center text-white px-4 py-4 gap-3">
          {/* Video wrapper */}
          <div
            className="ratio ratio-16x9 shadow"
            style={{ width: '80%', maxWidth: '900px' }}
          >
            <iframe
              src="https://www.youtube.com/embed/505F6APAOUY?si=8oFvYaS1rAt3uYLR"
              title="Vidéo Wasteland"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Text blocks */}
          <p 
  className="fs-4 fs-md-3 fs-lg-2 fw-bold text-white mb-2"
  style={{ maxWidth: '800px', textAlign: 'left' }}
>
  2023 | Unity
</p>
          <p className="fs-5" style={{ maxWidth: '800px', textAlign: 'left' }}>
            Jeu vidéo sur le thème de l'Anthropocène, cette nouvelle ère géologique marquée par l'activité humaine. Le jeu constitue en un environnement que l'on parcourt à la première personne représentant une décharge de voitures abandonnées. Le jeu a été modélisé sur le Game Engine Unity avec l'implémentation de code C#.
          </p>
        </div>
      )}
    </div>
  )
}

export default Wasteland
