import React, { useState } from 'react';
import './UniverSante.css';

export default function UniverSante() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project" style={{ backgroundColor: '#E4D0F4' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>UniverSanté</h3>
      </div>

      {isOpen && (
        <div className="container" style={{ maxWidth: '1600px' }}>
          <div
            className="row gx-4 gy-4 mt-3 text-md-start align-items-center"
          >
            <div
              className="col-md-6 d-flex flex-column align-items-start px-3 px-md-5 mb-3 text-start"
            >
              <p className="fs-4 fs-md-3 fs-lg-2 fw-bold text-white mb-2">
                2021-2022 | @universante_univeiffel
              </p>
              <p className="fs-5 fs-md-4 fs-lg-3 text-white mb-3">
                L'Université Gustave Eiffel en partenariat avec le CRIPS 
                (Centre Régional d'Informations et 
                de Prévention du Sida et pour la santé des jeunes), forme des étudiant.e.s sur la santé et le bien-être et 
                ont pour objectif de sensibiliser les élèves au sein du campus mais aussi 
                à travers les réseaux sociaux.
              </p>
              <p className="fs-5 fs-md-4 fs-lg-3 text-white mb-3">
                Travail autour de l'identité visuelle, d'une stratégie de communication, d'un calendrier éditorial et conception de visuels (vidéo, graphisme) pour promouvoir les services en matière de santé.
              </p>
            </div>

            <div
              className="col-md-6 d-flex justify-content-center justify-content-md-center"
              style={{ paddingLeft: '0', position: 'relative' }}
            >
              <img
                src="/images/universante.png"
                alt="UniverSanté"
                className="img-fluid rounded mb-3"
                style={{
                  maxWidth: '50%',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
