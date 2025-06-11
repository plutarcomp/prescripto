import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import axios from "axios";
import Filter from "../components/Filter";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  // const [filterDoctors, setFilterDoctors] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDoctors();
    getSpecialties();
  }, []);

  const getAllDoctors = async () => {
    const response = await axios
      .get("http://localhost:3000/api/doctors")
      .then((response) => {
        console.log("Datos del response", response);
        if (response.status === 200) {
          console.log("Doctors fetched successfully:", response.data);
          setAllDoctors(response.data);
        } else if (response.status === 404) {
          console.error("No doctors found");
          throw new Error("No doctos found");
        }
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setError("Error fetching doctos");
      });
    return response;
  };

  const getSpecialties = async () => {
    const response = await axios
      .get("http://localhost:3000/api/specialties")
      .then((response) => {
        console.log("Datos del response", response);
        if (response.status === 200) {
          console.log("Specialties fetched successfully:", response.data);
          setSpecialties(response.data);
        } else if (response.status === 404) {
          console.error("No specialties found");
          throw new Error("No specialties found");
        }
      })
      .catch((error) => {
        console.error("Error fetching specialties:", error);
        setError("Error fetching specialties");
      });
    return response;
  };

  const toggleSpeciality = (speciality) => {
    setSelectedSpecialties((prev) =>
      prev.includes(speciality)
        ? prev.filter((s) => s !== speciality)
        : [...prev, speciality]
    );
  };

  const filteredDoctors =
    selectedSpecialties.length === 0
      ? allDoctors
      : allDoctors.filter(
          (doc) =>
            doc.availability &&
            doc.specialties.some((s) => selectedSpecialties.includes(s))
        );

  return (
    <>
      <p className="text-gray-600 ">
        Descubre a nuestro equipo de especialistas
      </p>

      <div className="flex-1 w-full">
        {selectedSpecialties.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 px-6 py-2 transition-all duration-300">
            {selectedSpecialties.map((especialidad) => (
              <span
                key={especialidad}
                className="flex items-center gap-2 bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm shadow-sm transition duration-200 hover:shadow-md"
              >
                {especialidad}
                <button
                  onClick={() =>
                    setSelectedSpecialties((esp) =>
                      esp.filter((s) => s !== especialidad)
                    )
                  }
                  className="text-violet-500 hover:text-violet-700 font-bold focus:outline-none"
                  aria-label={`Quitar filtro ${especialidad}`}
                >
                  ✕
                </button>
              </span>
            ))}
            <button
              onClick={() => setSelectedSpecialties([])}
              className="ml-2 text-sm text-red-500 hover:text-red-700 underline transition"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex py-5">
          {specialties.map((especialidad) => (
            <p
              key={especialidad.specialty_id}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
                selectedSpecialties === especialidad.specialty_name
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => toggleSpeciality(especialidad.specialty_name)}
            >
              {especialidad.specialty_name}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-5 px-6">
          {console.log("Filtered Dr", filteredDoctors)}
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <ItemCard
                key={doctor.doctor_id}
                name={doctor.first_name}
                second_name={doctor.last_name}
                profession={doctor.specialties[0]}
                image={doctor.image[0]}
                available={doctor.availability}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No hay doctores disponibles con los filtros seleccionados.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctors;
