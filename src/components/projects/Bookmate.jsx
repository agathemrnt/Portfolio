import React, { useState } from 'react';
import './Bookmate.css';

function Bookmate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project" style={{ backgroundColor: '#F7CACA' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <h3>Bookmate</h3>
      </div>

     {isOpen && (
  <div
    className="d-flex flex-wrap justify-content-center px-4 py-3"
    style={{ gap: '50px' }} // Espace entre la colonne d'info et le bloc images
  >
    {/* Colonne d'infos */}
    <div
      className="d-flex flex-column text-white ms-5"
      style={{ flex: 1, maxWidth: '500px', gap: '10px' }}
    >
      <div className="d-flex justify-content-center mb-3">
  <img
    src="/images/bookmatelogo.png"
    alt="Bookmate Logo"
    className="img-fluid"
    style={{ width: '200px', height: 'auto' }}
  />
</div>
      <p className="fw-bold fs-4 mb-0">2025 | {' '}
  <a
  href="https://bookmate-ddmf.onrender.com/auth"
  target="_blank"
  rel="noopener noreferrer"
  className="custom-link"
>
  lien prototype
</a>
 </p>
      <p className="fs-5 m-0">
        Bookmate est une Webapplication qui permet aux lecteurs en quête de recommandation littéraires de découvrir leur prochain coup de coeur.
        Bookmate est ludique avec un système de Swipe qui rappelle les application de rencontre et un algorithme qui prend en compte les choix de l'utilisateur. 
      </p>
    </div>

    {/* Wrapper des 3 images pour gérer leur espacement */}
    <div className="d-flex ms-5" style={{ gap: '8px' }}>
      {/* Colonnes d'images */}
      <div
        className="d-flex flex-column justify-content-start align-items-center"
        style={{ maxWidth: '200px' }}
      >
        <img
          src="/images/bookmate.png"
          alt="Bookmate Image 1"
          className="img-fluid"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-start align-items-center"
        style={{ maxWidth: '200px' }}
      >
        <img
          src="/images/bookmate1.png"
          alt="Bookmate Image 2"
          className="img-fluid"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-start align-items-center"
        style={{ maxWidth: '200px' }}
      >
        <img
          src="/images/bookmate2.png"
          alt="Bookmate Image 3"
          className="img-fluid"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Bookmate;
