import React from 'react';
import './Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
    const roundedRating = Math.round(rating); // Arrondir la note au nombre entier le plus proche
    const stars = [...Array(5)].map((_, index) => { // Créer un tableau de 5 éléments pour représenter les étoiles
        const starClass = index < roundedRating ? 'star star-filled' : 'star star-empty'; // Déterminer la classe CSS en fonction de la note
        return <FontAwesomeIcon key={index} icon={faStar} className={starClass} />; // Retourner l'icône d'étoile avec la classe appropriée
    });

    return (
        <div className='rating'>
            {stars} {/* Afficher les étoiles */}
        </div>
    );
}

export default Rating;
