import React, { useState } from 'react';
import './Dropdown.scss';
import { FaChevronDown } from 'react-icons/fa';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
 {/* Lorsque isOpen est false (c'est-à-dire que le dropdown est fermé), la classe rotate est appliquée */}
       
        <FaChevronDown className={`dropdown-icon ${isOpen ? '' : 'rotate'}`} />
      </div>
      <div className="dropdown-body">
        <div className={`dropdown-content ${isOpen ? 'open' : 'close'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;