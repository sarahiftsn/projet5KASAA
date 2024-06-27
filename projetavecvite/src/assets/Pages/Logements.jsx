import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../../logements.json'; // Assurez-vous que le chemin est correct
import Dropdown from '../../components/Dropdown';
import './Logements.scss';
import Slideshow from '../../components/Slideshow';
import Rating from '../../components/Rating';
import Error from './Page404';

function Logements() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/error'); // Redirection vers la page d'erreur 404
    }
  }, [id, logement, navigate]);

  if (!logement) {
    return <Error />; // Affiche directement la page d'erreur si l'id n'existe pas
  }

  return (
    <div className='logement'>
      <div className='logement-pictures'>
        <Slideshow pictures={logement.pictures} />
      </div>
      <h1 className='logement-title'>{logement.title}</h1>
      <div className='logement-location'>{logement.location}</div>
      <div className='logement-tags'>
        <div className='tags'>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index} className='tag'>{tag}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className='title-host'>
        <div className='logement-host'>
          <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
          <div className='host-name'>{logement.host.name}</div>
        </div>
        <div className='logement-rating'>
          <Rating rating={logement.rating} />
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