import React from 'react';
import Logements from './Logements';
import { Link } from 'react-router-dom';
import "./Page404.scss";




function Error () {
    return (
      <>
      <div className='img'>
      <img src="/404.png" alt="error" />
      </div>
      <div className='texts'>
      <p>Oups! La page que vous demandez n'existe pas</p>
      
      </div>
      </>
    );
  }

export default Error ;