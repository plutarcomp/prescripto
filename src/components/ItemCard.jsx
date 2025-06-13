import React from 'react'

const ItemCard = ({ name, second_name, profession, image, available }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl  flex flex-col items-center border">
      <img
        src={image}
        alt={name}
        className="w-50 object-cover rounded-t-xl bg-gray-100"
      />
      <p
        className={`self-start pl-4 pt-2 mt-2 text-m font-semibold ${
          available ? "text-green-500" : "text-red-500"
        }`}
      >
        • {available ? "Disponible" : "No disponible"}
      </p>
      <h3 className="self-start pl-4 pt-2 pb-4 text-xl font-semibold text-gray-800">
        {'Dr. ' + name + ' '+ second_name}
      </h3>
      {profession.map((prof) =>(
        <p 
        key={prof}
        className="self-start pl-4 pb-2 text-gray-600">{prof}</p>
        ))}
    </div>
  )
}

export default ItemCard
