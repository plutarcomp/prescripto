import { useEffect, useState } from 'react';
import SpecialtyCard from './SpecialtyCard';
import axios from 'axios';

// const specialties = [
//   { id: 1, image: assets.General_physician, alt: "General Physician", label: "General physician" },
//   { id: 2, image: assets.Gynecologist, alt: "Gynecologist", label: "Gynecologist" },
//   { id: 3, image: assets.Dermatologist, alt: "Dermatologist", label: "Dermatologist" },
//   { id: 4, image: assets.Pediatricians, alt: "Pediatricians", label: "Pediatricians" },
//   { id: 5, image: assets.Neurologist, alt: "Neurologist", label: "Neurologist" },
//   { id: 6, image: assets.Gastroenterologist, alt: "Gastroenterologist", label: "Gastroenterologist" },
// ];

const SpecialtySection = () => {

  const [specialties, setSpecialties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSpecialities();
  }
, []);

useEffect(() => {
  console.log('Specialties state updated:', specialties);
}, [specialties]);

const getSpecialities = async () => {
  const response = await axios.get('http://localhost:3000/api/specialties')
    .then(response => {
      console.log('Datos del response',response);
      if (response.status === 200) {
        console.log('Specialties fetched successfully:', response.data);
        setSpecialties(response.data);
      } else if (response.status === 404) {
        console.error('No specialties found');
        throw new Error('No specialties found');
      }
    })
    .catch(error => {
      console.error('Error fetching specialties:', error);
      setError('Error fetching specialties');
    });
  return response;
}

  return (
    <section className="py-16 px-6 pt-40 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Buscar por especialidad
      </h1>

      <h2 className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto overflow-hidden text-ellipsis">
        Simplemente navegue a través de nuestra extensa lista de médicos confiables y programe su cita sin complicaciones.
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {!error ? specialties.map(item => (
          <SpecialtyCard
            key={item.specialty_id}
            image={item.image_url}
            alt={item.specialty_name}
            label={item.specialty_name}
          />
        )) : (
          <div className="text-red-500">
            {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialtySection;
