import React from 'react';




const HouseDetails = ({ title, location, host, tags, rating, description, equipments }) => {
  return (
    
    <div className='details-container'>
        <div className='first-bloc'>
            <div className='title-location-tags'>
                <h2>{title}</h2>
                <p>{location}</p>
                <div className='tags'>
                    {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className='host-rating'>
                <div className='host'>
                    <div className='name'>
                        <p>{host.name.split(' ')[0]}</p>
                        <p>{host.name.split(' ')[1]}</p>
                    </div>
                    <img src={host.picture} alt={host.name} />
                </div>
                <div className='rating'>
                    <Rating rating={rating} />
                </div>
            </div>
        </div>

        <div className='description-equipements'>
            <Dropdown 
                title='Description' 
                containerClassName='article'
                toggleCLassName='article'
                contentClassName='article'>
                <p>{description}</p>
            </Dropdown>
            <Dropdown 
                title='Équipements' 
                containerClassName='article'
                toggleCLassName='article'
                contentClassName='article'>
                <ul>
                    {equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                    ))}
                </ul>
            </Dropdown>
        </div>

    </div>
  );
}

export default HouseDetails;