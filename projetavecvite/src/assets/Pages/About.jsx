import React from 'react';
import Dropdown from '../../components/Dropdown';

import  './About.scss';



function About() {
  
  return (
    <div className="aboutcontainer">
      <div className='paysage'>
        <img src="/aboutimg.jpg" alt="paysage" />
      </div>
      <div className='dropdownn'> 
        <Dropdown className="dropdown-item" title={
          <div className="dropdown-title">
            Fiabilité 
            
          </div>
        }>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Dropdown>
        <Dropdown className="dropdown-item" title={
          <div className="dropdown-title">
            Respect 
            
          </div>
        }>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.</p>
        </Dropdown>
        <Dropdown className="dropdown-item" title={
          <div className="dropdown-title">
            Service
        
          </div>
        }>
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </Dropdown>
        <Dropdown className="dropdown-item" title={
          <div className="dropdown-title">
            Sécurité 
            
          </div>
        }>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Dropdown>
      </div>
    </div>
  );
}

export default About;