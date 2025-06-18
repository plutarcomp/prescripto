import React from "react";

const ItemCard = ({ name, second_name, profession, image, available }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-row sm:flex-col items-center border w-full overflow-hidden transition hover:shadow-xl duration-300">
      <img
        src={image}
        alt={name}
        className="w-1/2 sm:w-full h-32 sm:h-48 object-cover rounded-t-xl bg-gray-100"
      />
      <div className="p-4 flex flex-col justify-center sm:text-left w-2/3 sm:w-full">
        <p
          className={`self-start pl-4 pt-2 mt-2 text-sm font-semibold ${
            available ? "text-green-500" : "text-red-500"
          }`}
        >
          • {available ? "Disponible" : "No disponible"}
        </p>
        <h3 className="self-start pl-4 pt-2 text-lg font-semibold text-gray-800">
          {"Dr. " + name + " " + second_name}
        </h3>
        <div className="mt-2 space-y-1">
          {profession.map((prof) => (
            <p key={prof} className="pl-4 pb-2 text-gray-600">
              {prof}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
