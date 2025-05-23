import React from 'react';
import '../index.css';
import { assets } from '../assets/assets';

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    profession: "Cardiologist",
    image: assets.doc1,
    available: true,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    profession: "Neurologist",
    image: assets.doc2,
    available: false,
  },
  {
    id: 3,
    name: "Dr. Alice Brown",
    profession: "Dermatologist",
    image: assets.doc3,
    available: true,
  },
  {
    id: 4,
    name: "Dr. Bob Johnson",
    profession: "Pediatrician",
    image: assets.doc4,
    available: false,
  },
  {
    id: 5,
    name: "Dr. Sarah Lee",
    profession: "Orthopedist",
    image: assets.doc5,
    available: true,
  },
    {
    id: 6,
    name: "Dr. Emily Davis",
    profession: "Gynecologist",
    image: assets.doc6,
    available: true,
    },
    {
    id: 7,
    name: "Dr. Michael Wilson",
    profession: "Gastroenterologist",
    image: assets.doc7,
    available: false,
    },
    {
    id: 8,
    name: "Dr. David Martinez",
    profession: "Endocrinologist",
    image: assets.doc8,
    available: true,
    },
    {   
    id: 9,
    name: "Dr. Laura Garcia",
    profession: "Ophthalmologist",
    image: assets.doc9,
    available: false,
    },
    {
    id: 10,
    name: "Dr. Daniel Rodriguez",
    profession: "Urologist",
    image: assets.doc10,
    available: true,
    },
    
];

const ItemCard = ({ name, profession, image, available }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl  flex flex-col items-center border">
      <img src={image} alt={name} className="w-50 object-cover rounded-t-xl bg-gray-100"  />
      <p className={`self-start pl-4 pt-2 mt-2 text-m font-semibold ${available ? 'text-green-500' : 'text-red-500'}`}>
      • {available ? "Available" : "Not Available"}
      </p>
      <h3 className="self-start pl-4 pt-2 text-xl font-semibold text-gray-800">{name}</h3>
      <p className="self-start pl-4 pt-2 pb-4 text-gray-600">{profession}</p>
      
    </div>
  );
};

const DoctorSection = () => {
  return (
    <section className="py-16 px-6">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {doctorsData.map(doctor => (
          <ItemCard
            key={doctor.id}
            name={doctor.name}
            profession={doctor.profession}
            image={doctor.image}
            available={doctor.available}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorSection;
