import React from 'react';
import './Navbar.scss'; // Importer le fichier SCSS
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <NavLink to="/">
                    <div className="logo">
                        <img src='LOGO.jpg' alt="Logo" />
                    </div>
                </NavLink>
                <ul className="nav-menu">
                    <li className="li">
                        <NavLink 
                            to="/" 
                            end
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
