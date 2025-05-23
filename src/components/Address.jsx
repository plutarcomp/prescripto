import React from 'react'

const Address = ({PC, street, city, country}) => {
  return (

    <div>
        <p className='uppercase font-semibold text-lg text-gray-600 my-4'>Nuestra Oficina</p>
        <p className="text-gray-500">
            {PC + ', ' + street}
            <br />
            {city + ', ' + country}
        </p>
    </div>
  )
}

export default Address
