import React from 'react';
import Dropdown from '../../components/Dropdown';
import { FaChevronUp } from 'react-icons/fa';
import  './About.scss';


function About() {
  return (
    <div role="main">
      <div className='paysage'>
        <img src="/aboutimg.jpg" alt="paysage" />
      </div>
      <div className='dropdownn'> {/* Assurez-vous que 'dropdownn' est correct, peut-être 'dropdown' */}
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
          <p>Le composant Dropdown permet de montrer ou de cacher du contenu lorsque l'utilisateur clique sur un titre ou une icône.</p>
        </Dropdown>
        <Dropdown className="dropdown-item" title={
          <div className="dropdown-title">
            Sécurité 
            
          </div>
        }>
          <p>Le composant Dropdown permet de montrer ou de cacher du contenu lorsque l'utilisateur clique sur un titre ou une icône.</p>
        </Dropdown>
      </div>
    </div>
  );
}

export default About;