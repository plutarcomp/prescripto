import React from 'react';
import { assets } from '../assets/assets';
import SpecialtyCard from './SpecialtyCard';

const specialties = [
  { id: 1, image: assets.General_physician, alt: "General Physician", label: "General physician" },
  { id: 2, image: assets.Gynecologist, alt: "Gynecologist", label: "Gynecologist" },
  { id: 3, image: assets.Dermatologist, alt: "Dermatologist", label: "Dermatologist" },
  { id: 4, image: assets.Pediatricians, alt: "Pediatricians", label: "Pediatricians" },
  { id: 5, image: assets.Neurologist, alt: "Neurologist", label: "Neurologist" },
  { id: 6, image: assets.Gastroenterologist, alt: "Gastroenterologist", label: "Gastroenterologist" },
];

const SpecialtySection = () => {
  return (
    <section className="py-16 px-6 pt-40 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Buscar por especialidad
      </h1>

      <h2 className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto overflow-hidden text-ellipsis">
        Simplemente navegue a través de nuestra extensa lista de médicos confiables y programe su cita sin complicaciones.
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {specialties.map(specialty => (
          <SpecialtyCard
            key={specialty.id}
            image={specialty.image}
            alt={specialty.alt}
            label={specialty.label}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialtySection;
