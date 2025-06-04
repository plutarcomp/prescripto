import React from 'react'
import Button from './Button'

const CareersDescript = ({description}) => {
  return (

    <div className='justify-items-center'>
        <p className='uppercase font-semibold text-lg text-gray-600 my-4'>Carrera en Prescipto</p>
        <p className="text-gray-500 ">
            {description}
        </p>
        <Button
        text={'Explorar empleos'}
        // imgSrc={none} 
        // imgAlt={none} 
        className={`grid justify-items-start my-5 py-4 border rounded-none hover:bg-black hover:text-white transition-all duration-500`}
        />
    </div> 

  )
}

export default CareersDescript
