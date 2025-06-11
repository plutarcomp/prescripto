import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

// const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     profession: "Cardiologo",
//     image: assets.doc1,
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Dr. Jane Smith",
//     profession: "Neurólogo",
//     image: assets.doc2,
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Dr. Alice Brown",
//     profession: "Dermatólogo",
//     image: assets.doc3,
//     available: true,
//   },
//   {
//     id: 4,
//     name: "Dr. Bob Johnson",
//     profession: "Pediatra",
//     image: assets.doc4,
//     available: false,
//   },
//   {
//     id: 5,
//     name: "Dr. Sarah Lee",
//     profession: "Ortopedista",
//     image: assets.doc5,
//     available: true,
//   },
//     {
//     id: 6,
//     name: "Dr. Emily Davis",
//     profession: "Ginecólogo",
//     image: assets.doc6,
//     available: true,
//     },
//     {
//     id: 7,
//     name: "Dr. Michael Wilson",
//     profession: "Gastroenterólogo",
//     image: assets.doc7,
//     available: false,
//     },
//     {
//     id: 8,
//     name: "Dr. David Martinez",
//     profession: "Endocrinologist",
//     image: assets.doc8,
//     available: true,
//     },
//     {
//     id: 9,
//     name: "Dr. Laura Garcia",
//     profession: "Endocrinólogo",
//     image: assets.doc9,
//     available: false,
//     },
//     {
//     id: 10,
//     name: "Dr. Daniel Rodriguez",
//     profession: "Urólogo",
//     image: assets.doc10,
//     available: true,
//     },

// ];

const DoctorSection = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDoctors();
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

  return (
    <section className="py-5 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {!error ? (
          allDoctors.map((doctor) => (
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
          <div className="text-red-500">{error}</div>
        )}
      </div>
    </section>
  );
};

export default DoctorSection;
