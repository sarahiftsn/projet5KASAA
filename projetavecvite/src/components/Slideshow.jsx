import React, { useState } from 'react';
import './Slideshow.scss';

// Déclaration du composant fonctionnel Slideshow qui accepte une prop : pictures
const Slideshow = ({ pictures }) => {
  // Déclaration de l'état currentIndex avec useState, initialisé à 0 (le premier slide)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Variable pour vérifier s'il y a plus d'une image
  const hasMultiplePictures = pictures.length > 1;

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Si on est à la dernière image, revenir à la première, sinon passer à la suivante
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Si on est à la première image, aller à la dernière, sinon revenir à la précédente
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {/* Conteneur pour les diapositives */}
      <div className="slideshow-container">
        {pictures.map((picture, index) => (
          // Chaque image est rendue dans un conteneur div
          <div
            key={index} // Clé unique pour chaque élément dans la liste
            className={`slide ${index === currentIndex ? 'active' : ''}`} // Ajouter la classe 'active' si l'index correspond à l'image actuelle
          >
            {index === currentIndex && (
              // Afficher l'image seulement si elle correspond à l'index actuel
              <img src={picture} alt={`Slide ${index + 1}`} className="slide-image" />
            )}
          </div>
        ))}
      </div>
      {/* Afficher les boutons de navigation seulement s'il y a plus d'une image */}
      {hasMultiplePictures && (
        <>
          {/* Bouton pour passer à la diapositive précédente */}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          {/* Bouton pour passer à la diapositive suivante */}
          <button className="next" onClick={nextSlide}>&#10095;</button>
          {/* Afficher le numéro actuel de la diapositive et le nombre total de diapositives */}
          <div className="slide-numbering">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;