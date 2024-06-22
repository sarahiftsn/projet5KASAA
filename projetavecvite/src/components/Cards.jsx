import React from 'react';
import './Cards.scss';
import logements from '../logements.json';

import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom


function Cards() {
  const navigate = useNavigate();
  // Fonction pour vérifier si l'id existe dans logements.json
  const logementExists = (id) => {
    return logements.some((logement) => logement.id === id);
  };
  return (
    <div role="main">
      <div className='cards'>
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/flat/${logement.id}`} // Utiliser une route dynamique avec l'ID du logement
            state={{ apartmentId: logement.id }}
            className='card-link'
            onClick={() => {
              console.log(`Clicked on logement with id: ${logement.id}`);
              if (!logementExists(logement.id)) {
                console.log(`Logement with id ${logement.id} does not exist`);
                navigate('/error');
              }
            }}
          >
            <div className='card'>
              <img src={logement.cover} alt={logement.name} className='card-image' />
              <div className='card-content'>
                <h2 className='card-title'>{logement.title}</h2>
              </div>
            </div>
          </Link>
        ))}
         
      </div>
    </div>
  );
}

export default Cards;