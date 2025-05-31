import React from 'react';
import { Link } from 'react-router-dom';

const SpecialtyCard = ({ image, alt, label }) => {
  return (
    <Link to="/doctors" className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">
      <img
        src={image}
        alt={alt}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <p className="text-lg text-gray-700">{label}</p>
    </Link>
  );
};

export default SpecialtyCard;
