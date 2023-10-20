import React, { useState } from "react";
import Star from './Star';

const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components
  const renderStars = () => {
    const maxRating = 5;
    let stars = [];
    let isSelected = false;
    for ( let i = 0; i < maxRating; i++){
        stars.push(
            <Star 
                // This is calling a function to be called. We use a callback so we don't trigger the function immediately while it's passed a parameter
                updateRating={() => updateRating(i + 1)}            
                key={i}
                isSelected={ i < courseRating }
            />)
    }
    return stars
  };

  // Write an event handler that updates the courseRating state.
  // Pass the function to a Star component via props
  const updateRating = (rating) => {
    if (courseRating === rating ) {
        setCourseRating(0)
    } else {
        setCourseRating(rating);

    }
  };


  return (
      <ul className="course--stars">
                {/* Render the Star components */}
                {renderStars()}
        </ul>

  )
};

export default StarRating;
