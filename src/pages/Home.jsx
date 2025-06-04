import React from 'react';
import '../index.css';
import { assets } from '../assets/assets';
import Button from '../components/Button';
import ItemCard from '../components/ItemCard';
import SpecialtySection from '../components/SpecialtySection'; 

const Home = () => {
  return (
    <div>
     
      <section className="flex items-center justify-between pt-20 hr-bg rounded-lg text-white">
        <div className="w-1/2 space-y-6">
          <h1 className="pl-20 pr-40 pb-10 text-5xl font-medium leading-tight">
            Reserva una cita con médicos de confianza.
          </h1>

          <div className="pl-20 px-6 pr-40 pb-10 flex items-center">
            <img src={assets.group_profiles} alt="profiles" className="w-40 rounded-full" />
            <h2 className="pl-5  text-xl font-light">
              Simplemente explore nuestra extensa lista de médicos de confianza y programe su cita sin complicaciones.
            </h2>
          </div>
          <div className="ml-10">
            <Button text="Reservar cita" imgSrc={assets.arrow_icon} imgAlt="Arrow icon" className="bg-white" to="#" />
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={assets.header_img}
            alt="Imagen Hero"
            className="bg-top-right w-full  rounded-lg"
          />
        </div>
      </section>

     
      <SpecialtySection />

    
      <section className="py-16 px-6 pt-40 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Los mejores médicos para reservar
        </h1>

        <h2 className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto overflow-hidden text-ellipsis">
          Simplemente navegue a través de nuestra extensa lista de médicos de confianza.
        </h2>

        <ItemCard />

        <div className="ml-10 flex justify-center">
          <Button className="pl-20 pr-20 bg-gray-100" text="more" to="#" />
        </div>
      </section>

 
      <section className="hr-bg rounded-lg  relative max-w-screen-lg mx-auto">
        <div className="pl-10 pr-10 flex justify-between items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-6 max-w-sm mx-auto overflow-hidden text-ellipsis">
              Reserva una cita con más de 100 médicos de confianza
            </h1>
            <div className="ml-10">
              <Button text="Crear cuenta" className="pl-10 bg-white pr-4" to="#" />
            </div>
          </div>

          <div className="-mt-20 w-80">
            <img
              src={assets.appointment_img}
              alt="Hero Image"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;