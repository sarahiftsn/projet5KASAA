import React from 'react';
import './Footer.scss'; 
const Footer = () => {
  return (
    <footer>
      <div className='bann'>
        <img src='./kasa.png' alt='logo' className='kasalogo' />
        <div className='kasap'>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;