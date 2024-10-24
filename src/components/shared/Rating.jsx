import React from "react";
import StarRatings from "react-star-ratings";

function Rating({ rating, numberOfStars, starDimension = "14px" }) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#FDB022"
      numberOfStars={numberOfStars}
      name="rating"
      starSpacing="4px"
      starDimension={starDimension}
    />
  );
}

export default Rating;
