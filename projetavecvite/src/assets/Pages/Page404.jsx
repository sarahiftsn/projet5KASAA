import React from 'react';
import Logements from './Logements';




function Error () {
    return (
      <>
      <div className='img'>
      <img src="/404.png" alt="error" />
      <p>Oups! La page que vous demandez n'existe pas</p>
      <p>Retourner sur la page d’accueil</p>
      </div>
      </>
    );
  }

export default Error ;