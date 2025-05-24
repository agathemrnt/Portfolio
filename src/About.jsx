import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // On garde ce fichier pour les styles personnalisés restants

function About() {
  return (
    <div className="container py-5">
      <div className="row gx-4">
        {/* Colonne gauche */}
        <div className="col-md-6">
          <p>
            Je m'appelle Agathe Mornet-Favreau et je suis en deuxième année du Master Culture et Métiers du Web à l'Université Gustave Eiffel. Mon parcours universitaire et professionnel m’a offert la possibilité d’être créative sur différents supports : developpement front, visuels d’application, édition, jeux-vidéos. 
          </p>
          <p>
            Ce site internet portfolio regroupe une sélection de travaux qui explorent différentes compétences et différents logiciels. 
          </p>

          {/* Section contact */}
          <div className="mt-4">
            <p>Email : <a href="mailto:agathemf@hotmail.fr">agathemf@hotmail.fr</a></p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/agathe-mornet-favreau-11965b28b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/agathe-mornet-favreau</a></p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img 
            src="/images/autoportrait.jpg" 
            alt="Autoportrait" 
            className="img-fluid"
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
