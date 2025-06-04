import React from 'react';
import { Link } from 'react-router-dom';

const SpecialtyCard = ({ image, alt, label }) => {
  const url = `/doctors/${label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita acentos
    .replace(/\s+/g, '-') // reemplaza espacios por guiones
    .replace(/[^a-z0-9\-]/g, '') // quita otros caracteres especiales
  }`;
  return (
    <Link to={url} className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">
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
