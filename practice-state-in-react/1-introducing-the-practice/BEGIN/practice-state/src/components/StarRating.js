import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    // Initialize a 'courseRating' state
    const [courseRating, setCourseRating] = useState(0)

    // Write a function that returns 5 Star components
    const createStars = () => {
        const maxRating = 5;
        let starArray = [];
        // let rating = courseRating || maxRating
        for ( let i = 0; i < maxRating ; i++){
            starArray.push(
                <Star 
                    isSelected={ courseRating > i}
                    setRating={() => handleSetRating(i + 1)}
                    key={i}
                />)
        }
        return starArray
    };

    // Write an event handler that updates the courseRating state.
    const handleSetRating = (rating) => {
        if ( courseRating === rating ) {
            setCourseRating(0)
        } else {
            setCourseRating(rating);

        }
    };
    // Pass the function to a Star component via props
    

    return (
        <ul className='course--stars'>
            {/* Render the Star components */}
            {createStars()}
        </ul>
    );
}

export default StarRating;