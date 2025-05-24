import React, { useState } from 'react';

function Photographie() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project" style={{ backgroundColor: '#FFE1C6' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>Photographie</h3>
      </div>

      {isOpen && (
        <>
          {/* Bloc haut : texte à gauche, image à droite */}
          <div className="row g-0 px-4">
            <div className="col-md-6 text-white ps-4 mt-4"> {/* << Ajouté ps-4 et mt-4 ici */}
              <p className="fw-bold fs-4 mb-2">2023</p>
              <p className="fs-5">
                Edition d'un Fanzine sur InDesign (Adobe) à partir de photographies argentiques.
                Les photographies constituent des réponses au questionnaire de Proust, un questionnaire de personnalité.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
              <img
                src="/images/zine3.png"
                alt="Blister"
                className="img-fluid rounded"
                style={{ width: '70%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Galerie */}
          <div className="d-flex flex-column align-items-center px-4 py-4">
            <img
              src="/images/zine2.png"
              alt="Zine 2"
              className="img-fluid mb-3"
              style={{ width: '70%', objectFit: 'contain' }}
            />
            <img
              src="/images/zine.png"
              alt="Zine 3"
              className="img-fluid"
              style={{ width: '70%', objectFit: 'contain' }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Photographie;
