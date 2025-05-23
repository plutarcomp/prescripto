import React from 'react'
import { assets } from '../assets/assets'
import Address from '../components/Address'
import CareersDescript from '../components/CareersDescript'

const Contact = () => {
  return (
    <>
    <div className='uppercase text-center font-semibold text-2xl pt-10 text-[#707070]'>
      Contáctanos
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img src={assets.contact_image} alt='Imagen Contact' className='w-full md:max-w-[360px]'/>
      <div className="flex flex-col justify-center items-start gap-6 text-base/10">
      <Address
        PC={'06600'}
        street={'Av. Paseo de la Reforma 222'}
        city={'CDMX'}
        country={'México'}
      />
      <CareersDescript
      description={'Aprende más acerca de nuestro equipo y nuestros empleos'}
      />
      </div>
    </div>
    </>
  )
}

export default Contact