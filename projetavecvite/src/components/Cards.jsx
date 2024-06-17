import React from 'react';
import './Cards.scss';
import logements from '../logements.json';
import { useNavigate } from 'react-router-dom';


function Cards() {
  const history = useNavigate();

  const handleClick = (id) => {
    history.push(`/logement/${id}`);
  };
  return (
    <div role="main">
      <div className='cards'>
        {logements.map((logement) => (
          <div key={logement.id} className='card' onClick={() => handleClick(logement.id)}>
            <img src={logement.cover} alt={logement.name} className='card-image' />
            <div className='card-content'>
              <h2 className='card-title'>{logement.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;