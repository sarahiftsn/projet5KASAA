import React from 'react';
import './Navbar.scss'; // Importer le fichier SCSS
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <header>
      <nav className="nav">
      <NavLink to="/">
        <div className="logo">
          <img src='LOGO.jpg'  alt="Logo" />
         
        </div>
        </NavLink>
        <ul className="nav-menu">
          <li className="li">
          <NavLink to="/">
            Accueil
            </NavLink>
            </li>
          <li className="li">
          <NavLink to="/about">
              À propos
              </NavLink>
            </li>
          </ul>
        
      </nav>
      </header>
    );
  };
  
  export default Navbar;