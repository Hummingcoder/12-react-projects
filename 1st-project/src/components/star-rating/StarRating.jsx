import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (i) => {
    setRating(i);
  };
  const handleHover = (i) => {
    setHover(i);
  };
  const handleLeave = (i) => {
    setHover(rating);
  };

  return (
    <div className="flex justify-center items-center w-fit mx-auto my-20">
      {[...Array(stars)].map((_, index) => {
        index++;
        return (
          <FaStar
            className={`${
              index <= (hover || rating) ? "text-yellow-300" : "text-gray-100"
            } shadow-md bg-blue-500 p-2   `}
            key={index}
            size={40}
            onClick={() => handleOnClick(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
