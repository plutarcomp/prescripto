import React from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import Button from '../components/Button'
import ItemCard from '../components/ItemCard'

const Home = () => {
  return (
    <div>
        <section className="flex items-center justify-between pt-20 hr-bg rounded-lg text-white">
      <div className="w-1/2 space-y-6">
        <h1 className="pl-20 pr-40 pb-10 text-5xl font-medium leading-tight">
        Book Appointment 
        With Trusted Doctors
        </h1>
        
        <div className="pl-20 px-6 pr-40 pb-10 flex items-center"> 
          <img src={assets.group_profiles} alt="profiles" className="w-40 rounded-full" />
          <h2 className="pl-5  text-xl font-light">
            Simply browse through our extensive list of trusted doctors, 
            schedule your appointment hassle-free.
          </h2>
        </div>
        <div className="ml-10">
          <Button text="Book appointment" imgSrc={assets.arrow_icon} imgAlt="Arrow icon" className="bg-white" to="#" />
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

    <section className="py-16 px-6 pt-40 text-center">

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Find by Speciality 
      </h1>
      
      <h2 className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto overflow-hidden text-ellipsis">
      Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </h2>
      
      <div className="flex justify-center gap-8">

        <div className="flex flex-col items-center">
          <img
            src={assets.General_physician}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          General physician
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.Gynecologist}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          Gynecologist
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={assets.Dermatologist}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          Dermatologist
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={assets.Pediatricians}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          Pediatricians
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.Neurologist}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          Neurologist
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.Gastroenterologist}
            alt="Feature 1"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg text-gray-700">
          Gastroenterologist
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 pt-40 text-center">

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Top Doctors to Book 
      </h1>

      <h2 className="text-xl font-light text-gray-600 mb-12 max-w-3xl mx-auto overflow-hidden text-ellipsis">
        Simply browse through our extensive list of trusted doctors.
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
          Book Appointment 
          With 100+ Trusted Doctors
          </h1>
          
          <div className="ml-10">
          <Button text="Create account" className="pl-10 bg-white pr-4" to="#" />
        </div>
        </div>

        
        <div className="-mt-20 w-80 ">
          <img
            src={assets.appointment_img} 
            alt="Hero Image"
            className="w-full object-cover rounded-lg "
          />
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Home