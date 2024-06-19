import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../logements.json'; // Assurez-vous que le chemin est correct
import Dropdown from '../../components/Dropdown';
import './Logements.scss';
import Slideshow from '../../components/Slideshow';


function Logements() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement'>
      
      <div className='logement-pictures'>
      <Slideshow pictures={logement.pictures} />
      </div>
      <h1 className='logement-title'>{logement.title}</h1>
      <div className='logement-location'>{logement.location}</div>
      <div className='logement-rating'>Rating: {logement.rating}</div>

      <div className='logement-host'>
        <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
        <div className='host-name'>{logement.host.name}</div>
      </div>
      <div className='details'>
       <div className='Description'>
       <Dropdown className="dropdown-item" title={
        <p>Description</p>
      }>
      <div className='logement-description'>{logement.description}</div>
      </Dropdown>
      </div>

      
     
      <div className='logement-equipments'>
      <Dropdown className="dropdown-item" title={
        <p>Equipments:</p>
      }>
      
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
        </Dropdown>
      </div>
      </div>

      <div className='logement-tags'>
        <h3>Tags:</h3>
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index} className='tag'>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Logements;