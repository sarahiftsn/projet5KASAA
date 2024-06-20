import React from 'react';
import './Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
    const roundedRating = Math.round(rating);
    const stars = [...Array(5)].map((_, index) => {
        const starClass = index < roundedRating ? 'star-filled' : 'star-empty';
        return <FontAwesomeIcon key={index} icon={faStar} className={starClass} />;
    });

    return (
        <div className='rating'>
            {stars}
        </div>
    );
}

export default Rating;