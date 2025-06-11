
const Filter = (isActive, handleClick) => {
  return (
    <div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex py-5">
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick(`Medicina General`)}
      >
        Medicina General
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Ginecología")}
      >
        Ginecología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Dermatología")}
      >
        Dermatología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Pediatría")}
      >
        Pediatría
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Neurología")}
      >
        Neurología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Gastroenterología")}
      >
        Gastroenterología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Cardiología")}
      >
        Cardiología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Oncología")}
      >
        Oncología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Oftalmología")}
      >
        Oftalmología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Psiquiatría")}
      >
        Psiquiatría
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Ortopedia")}
      >
        Ortopedia
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Endocronología")}
      >
        Endocrinología
      </p>
      <p
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
          isActive ? "bg-gray-300" : ""
        }`}
        onClick={() => handleClick("Urología")}
      >
        Urología
      </p>
    </div>
  );
};

export default Filter;
