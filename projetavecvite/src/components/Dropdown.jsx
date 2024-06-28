import React, { useState } from 'react';
import './Dropdown.scss';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

// Déclaration du composant Dropdown qui accepte deux props : title et children
function Dropdown({ title, children }) {
  // Déclaration de l'état isOpen avec useState, initialisé à false (le dropdown est fermé par défaut)
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour inverser l'état isOpen, appelée lorsqu'on clique sur l'en-tête du dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // La classe 'open' est ajoutée dynamiquement si isOpen est true, pour gérer les styles du dropdown ouvert
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      {/* En-tête du dropdown qui affiche le titre et une icône indiquant l'état (ouvert/fermé) */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title} {/* Afficher le titre passé en prop */}
        {/* Afficher l'icône Chevron Down si le dropdown est ouvert, sinon afficher Chevron Up */}
        {isOpen ? <FaChevronDown className="dropdown-icon" /> : <FaChevronUp className="dropdown-icon" />}
      </div>
      {/* Afficher le contenu du dropdown seulement si isOpen est true */}
      {isOpen && <div className="dropdown-body">{children}</div>}
    </div>
  );
}

export default Dropdown;