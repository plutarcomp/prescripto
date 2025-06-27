import React from "react";
import { assets } from "../assets/assets"; 

const About = () => {
  return (
    <div className="px-6 py-16 md:px-24 font-sans text-gray-800">
      
      <div className="flex flex-wrap items-center justify-center gap-10 mb-16">
        <div className="max-w-md w-full">
          <img
            src={assets.about_image}
            alt="Doctors"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-[280px] max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">
          SOBRE <span className="font-bold">NOSOTROS</span>
        </h2>
          <p className="mb-4">
            Bienvenido a Prescripto, tu aliado de confianza en la gestión de tus necesidades de salud de forma conveniente y eficiente. En Prescripto, entendemos los desafíos que enfrentan las personas al momento de agendar citas médicas y administrar sus historiales clínicos.
          </p>
          <p className="mb-4">
            Prescripto está comprometido con la excelencia en tecnología para la salud. Nos esforzamos continuamente por mejorar nuestra plataforma, integrando los últimos avances para optimizar la experiencia del usuario y ofrecer un servicio superior. Ya sea que estés reservando tu primera cita o gestionando un tratamiento continuo, Prescripto está aquí para apoyarte en cada paso del camino.
          </p>
          <h5 className="font-semibold mt-6 mb-2 text-lg">Nuestra Visión</h5>
          <p>
            Nuestra visión en Prescripto es crear una experiencia de salud sin complicaciones para cada usuario. Nuestro objetivo es cerrar la brecha entre los pacientes y los proveedores de salud, facilitando el acceso a la atención que necesitas, cuando la necesitas.
          </p>
        </div>
      </div>


      <div className="text-center">
  <h3 className="text-2xl font-semibold mb-10">
    POR QUÉ <span className="font-bold">ELEGIRNOS</span>
  </h3>

  <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
        transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
      <h6 className="font-bold mb-2 text-lg">EFICIENCIA:</h6>
      <p>Agendamiento de citas optimizado que se adapta a tu estilo de vida ocupado.</p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
        transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
      <h6 className="font-bold mb-2 text-lg">COMODIDAD:</h6>
      <p>Acceso a una red de profesionales de la salud confiables en tu zona.</p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
        transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
      <h6 className="font-bold mb-2 text-lg">PERSONALIZACIÓN:</h6>
      <p>Recomendaciones y recordatorios personalizados para ayudarte a mantener tu salud al día.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
