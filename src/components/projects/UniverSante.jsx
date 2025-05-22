import React, { useState } from 'react'
import './UniverSante.css'

export default function UniverSante() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="project" style={{ backgroundColor: '#E4D0F4' }}>
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>UniverSanté</h3>
      </div>

      {isOpen && (
        <div className="universante-content">
          <div className="universante-text">
            <p>2021-2022 | @universante_univeiffel</p>
            <p>
              L'Université Gustave Eiffel en partenariat avec le CRIPS 
(Centre Régional d'Informations et 
de Prévention du Sida et pour la santé des jeunes), forme des étudiant.e.s sur la santé et le bien-être et 
ont pour objectif de sensibiliser les élèves au sein du campus mais aussi 
à travers les réseaux sociaux.
            </p>
          </div>
          <div className="universante-image">
            <img src="/images/universante.png" alt="UniverSanté" />
          </div>
        </div>
      )}
    </div>
  )
}
