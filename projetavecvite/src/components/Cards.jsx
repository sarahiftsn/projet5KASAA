import React from 'react'; 
import './Cards.scss'; 
import logements from '../logements.json'; 

import { Link } from 'react-router-dom'; // Importer le composant Link depuis react-router-dom pour la navigation

function Cards() {
  return (
    <div role="main"> {/* Élément principal du contenu de la page, utile pour l'accessibilité */}
      <div className='cards'> {/* Conteneur pour toutes les cartes de logements */}
        {logements.map((logement) => (
          <Link
            key={logement.id} // Attribuer une clé unique pour chaque élément dans la liste
            to={`/flat/${logement.id}`} // Générer une route dynamique basée sur l'ID du logement
            state={{ apartmentId: logement.id }} // Passer l'ID du logement dans l'état de la navigation
            className='card-link' // Classe CSS pour styliser le lien
          >
            <div className='card'> {/* Conteneur pour chaque carte de logement */}
              <img src={logement.cover} alt={logement.name} className='card-image' /> {/* Image de couverture du logement */}
              <div className='card-content'> {/* Conteneur pour le contenu textuel de la carte */}
                <h2 className='card-title'>{logement.title}</h2> {/* Titre du logement */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards; // Exporter le composant Cards pour l'utiliser dans d'autres partie