import React, { useState } from 'react';
import './Dropdown.scss';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        {isOpen ? <FaChevronDown className="dropdown-icon" /> : <FaChevronUp className="dropdown-icon" />}
      </div>
      {isOpen && <div className="dropdown-body">{children}</div>}
    </div>
  );
}

export default Dropdown;