import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import './LogementDetail.scss';

function Logements() {
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-detail">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <h2>Équipements</h2>
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
      <h2>Photos</h2>
      <div className="photos">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${logement.title} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Logements;