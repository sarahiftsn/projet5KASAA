import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../logements.json'; // Assurez-vous que le chemin est correct
import Dropdown from '../../components/Dropdown';
import './Logements.scss';
import Slideshow from '../../components/Slideshow';
import Rating from '../../components/Rating'; // Importer le composant Rating
import { Link } from 'react-router-dom';
import Error from './Page404';
import { FaChevronUp } from 'react-icons/fa';

function Logements() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    navigate('/error'); // Redirection vers la page d'erreur 404
    return null; // Retourner null ou autre chose si nécessaire
  }

  return (
    <div className='logement'>
      <div className='logement-pictures'>
        <Slideshow pictures={logement.pictures} />
      </div>
      <div className='title-host'>
        <h1 className='logement-title'>{logement.title}</h1>
        <div className='logement-host'>
          <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
          <div className='host-name'>{logement.host.name}</div>
        </div>
      </div>
      <div className='logement-location'>{logement.location}</div>
      <div className='logement-tags'>
        <div className='tags'>
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index} className='tag'>{tag}</li>
          ))}
        </ul>
        </div>
     
      <div className='logement-rating'>
        <Rating rating={logement.rating} /> {/* Utiliser le composant Rating ici */}
      </div>
      </div>
      <div className='details'>
        <div className='Description'>
          <Dropdown className="dropdown-item logement-dropdown" title={<p>Description</p>}>
            <div className='logement-description'>{logement.description}</div>
          </Dropdown>
        </div>
        <div className='logement-equipments'>
          <Dropdown className="dropdown-item logement-dropdown" title={<p>Equipments:</p>}>
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
      
    </div>
  );
}

export default Logements;