import React, { useState } from 'react';
import './Windmap.css';

function Windmap() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`project ${isOpen ? 'open' : ''}`} style={{ backgroundColor: '#A1C8DB' }}>
      <div
        className="project-title"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <h3>Windmap</h3>
      </div>

      {isOpen && (
        <div
          className="windmap-open-content d-flex flex-column align-items-center"
          style={{
            minHeight: '500px',
            color: 'white',
          }}
        >
          <div style={{ flexGrow: 1, width: '100%', maxWidth: '800px' }}>
  <div className="mb-4" style={{ fontSize: '1.3rem', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
      2024 | Figma Illustrator |{' '}
      <a
        href="https://www.figma.com/proto/sUpb0z5rBa9akDYQVCFL8X/WindMap?node-id=0-1&t=usg73EzDWY6ZTAZd-1"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-link"
      >
        lien prototype
      </a>
    </p>
    <p>
      Windmap est un projet de visualisation interactive des données de vent en temps réel. Il permet aux
      utilisateurs d’explorer les flux de vent à travers une interface graphique intuitive et animée, utile à
      la fois pour l’éducation, la recherche et la planification environnementale.
    </p>
  </div>

  <div className="d-flex justify-content-center">
    <img
      src="/images/windmaplogo.png"
      alt="Logo Windmap"
      className="windmap-logo"
    />
  </div>
</div>



          <img
            src="/images/windmap.png"
            alt="Capture Windmap"
            className="windmap-main"
          />
        </div>
      )}
    </div>
  );
}

export default Windmap;
