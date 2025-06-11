import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import axios from "axios";
import Filter from "../components/Filter";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState(null);
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

  const handleClick = (specialties) => {
    if (selectedSpecialties === specialties) {
      setSelectedSpecialties(null);
      setFilterDoctors([]);
    } else {
      const specialtiesDoctors = allDoctors.filter(
        (doc) => doc.availability && doc.specialties.includes(specialties)
      );
      setSelectedSpecialties(specialties);
      setFilterDoctors(specialtiesDoctors);
    }
  };

  return (
    <>
      <p className="text-gray-600 ">
        Descubre a nuestro equipo de especialistas
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        <div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex py-5">
          {specialties.map((especialidad) => (
            <p
              key={especialidad.specialty_id}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-colors duration-300 cursor-pointer hover:bg-gray-200 ${
                selectedSpecialties === especialidad.specialty_name
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => handleClick(especialidad.specialty_name)}
            >
              {especialidad.specialty_name}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-5 px-6">
          {(selectedSpecialties ? filterDoctors : allDoctors).map((doctor) => (
            <ItemCard
              key={doctor.doctor_id}
              name={doctor.first_name}
              second_name={doctor.last_name}
              profession={doctor.specialties[0]}
              image={doctor.image[0]}
              available={doctor.availability}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
