import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
  <div className="about-content">
    {/* Colonne gauche */}
    <div className="about-text">
      <p>
        Je m'appelle Agathe Mornet-Favreau et je suis en deuxième année du Master Culture et Métiers du Web à l'Université Gustave Eiffel. Mon parcours universitaire et professionnel m’a offert la possibilité d’être créative sur différents supports : developpement front, visuels d’application, édition, jeux-vidéos. 
      </p>
      <p>
        Ce portfolio regroupe une sélection de travaux qui explorent différentes compétences et différents logiciels. 
      </p>

      {/* Section contact à l'intérieur de la colonne gauche */}
      <div className="contact-info">
        <p>Email : <a href="mailto:ton.email@example.com">ton.email@example.com</a></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">linkedin.com/in/tonprofil</a></p>
      </div>
    </div>

    {/* Colonne droite */}
    <div className="about-image">
      <img 
        src="/images/autoportrait.jpg" 
        alt="Autoportrait"
      />
    </div>
  </div>

  {/* Bouton retour accueil */}
  <Link to="/">
    <img 
      src="/images/Circle_Carret_Up.png"
      alt="Retour à la page principale"
      className="back-to-home-img"
    />
  </Link>
</div>
  );
}

export default About;
