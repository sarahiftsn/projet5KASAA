import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './Dropdown.scss'; 

// Définition du composant Dropdown
const Dropdown = ({ title, children }) => {
  // État local pour gérer l'ouverture et la fermeture du dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état isOpen
  const toggleDropdown = (e) => {
    if (e) e.stopPropagation(); // Empêche la propagation de l'événement de clic
    setIsOpen(!isOpen); // Inverse l'état isOpen
  };

  // Rendu du composant Dropdown
  return (
    <div className={`dropdown-container `}>
      {/* Conteneur du dropdown*/}
      <div className={`dropdown-toggle `}>
        {title} {/* Affiche le titre du dropdown */}
        {/* Icône de flèche pour indiquer l'état du dropdown */}
        <span className={`arrow-icon ${isOpen ? '' : 'rotate'}`} onClick={toggleDropdown}> 
          <FaAngleDown /> {/* Icône de flèche vers le bas de React Icons */}
        </span>
      </div>
      {/* Contenu du dropdown, affiché seulement quand isOpen est true */}
      <div className={`dropdown-content ${isOpen ? 'open' : 'close'}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
