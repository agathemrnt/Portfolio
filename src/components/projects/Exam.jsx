import React, { useState } from 'react';

function Exam() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project" style={{ backgroundColor: '#D6E4A7' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>ExAM</h3>
      </div>

      {isOpen && (
        <div className="container-fluid px-0 py-0">
          <div className="row align-items-start gx-0">
            {/* Colonne gauche */}
            <div className="col-12 col-md-6 d-flex flex-column text-white gap-3 ps-md-5 pe-md-3 px-4 px-md-0">
              <img
                src="/images/examlogo.png"
                alt="ExAM Logo"
                className="img-fluid mx-auto mx-md-0" // centre logo en mobile, à gauche desktop
                style={{ width: '50%', marginTop: '30px' }}
              />
              <p className="fs-4 fw-bold m-0">
                2024 | EXperimental Art Museum
              </p>
              <p className="fs-5 m-0">
                ExAM est une plateforme innovante conçue pour présenter des œuvres d’art numérique expérimentales. Ce projet explore les nouvelles façons de vivre une exposition à travers les technologies web interactives.
              </p>
            </div>

            {/* Colonne droite */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0 p-0">
              <img
                src="/images/Exam.png"
                alt="Aperçu ExAM"
                className="img-fluid"
                style={{
                  width: '60%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exam;
