import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";



const DoctorSection = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const backendUrl = import.meta.env.VITE_API_BACKEND_URL;
  const getAllDoctors = async () => {
    const response = await axios
      .get(`${backendUrl}/api/doctors`)
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

  return (
    <section className="py-5 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {!error ? (
          allDoctors.map((doctor) => (
            <ItemCard
              key={doctor.doctor_id}
              name={doctor.first_name}
              second_name={doctor.last_name}
              profession={doctor.specialties}
              image={doctor.image[0]}
              available={doctor.availability}
            />
          ))
        ) : (
          <div className="text-red-500">{error}</div>
        )}
      </div>
    </section>
  );
};

export default DoctorSection;
