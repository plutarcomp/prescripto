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
            ABOUT <span className="font-bold">US</span>
          </h2>
          <p className="mb-4">
            Welcome to Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Prescripto, we understand the challenges individuals face
            when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="mb-4">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to
            enhance our platform, integrating the latest advancements to improve user experience and
            deliver superior service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h5 className="font-semibold mt-6 mb-2 text-lg">Our Vision</h5>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user.
            We aim to bridge the gap between patients and healthcare providers, making it easier for
            you to access the care you need, when you need it.
          </p>
        </div>
      </div>


      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-10">
          WHY <span className="font-bold">CHOOSE US</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
              transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
            <h6 className="font-bold mb-2 text-lg">EFFICIENCY:</h6>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
              transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
            <h6 className="font-bold mb-2 text-lg">CONVENIENCE:</h6>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs w-full text-center 
              transition duration-300 transform hover:scale-105 hover:bg-primary hover:text-white hover:shadow-xl">
            <h6 className="font-bold mb-2 text-lg">PERSONALIZATION:</h6>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
