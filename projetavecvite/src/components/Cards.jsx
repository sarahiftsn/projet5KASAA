import React from 'react';
import './Cards.scss';
import logements from '../logements.json';

import { Link, useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom


function Cards() {
  const navigate = useNavigate();
  
  return (
    <div role="main">
      <div className='cards'>
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/flat/${logement.id}`} // Utiliser une route dynamique avec l'ID du logement
            state={{ apartmentId: logement.id }}
            className='card-link'
            
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