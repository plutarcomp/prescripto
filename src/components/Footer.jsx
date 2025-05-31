import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";
import Address from "./Address";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="md:mx-10">
      <div className="flex flex-col justify-between sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div className="text-gray-600 my-4 justify-between">
          <img
            className="mb-5 w-40"
            src={assets.logo}
            alt="Logo Prescripto"
            onClick={() => navigate("/")}
          />
          <p>
            <strong>Prescripto</strong> es tu guía confiable para encontrar
            doctores de diversas especialidades médicas, como medicina general,
            dermatología, ginecología, pediatría, neurología y
            gastroenterología. Accede a un catálogo de profesionales de la salud
            verificados y agenda tu consulta de manera fácil y segura.
          </p>
        </div>
        <div>
          <p className="uppercase font-semibold text-lg text-gray-600 my-4">Compañía</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/">
              <li className="">HOME</li>
            </NavLink>
            <NavLink to="/doctors">
              <li className="">ALL DOCTORS</li>
            </NavLink>
            <NavLink to="/about">
              <li className="">ABOUT</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="">CONTACT</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <Address
            PC={"06600"}
            street={"Av. Paseo de la Reforma 222"}
            city={"CDMX"}
            country={"México"}
          />
        </div>

      </div>
    <hr/>
    <p className="py-5 text-sm text-center">Prescripto 2025 ® Copyright. - Todos los derechos reservados.</p>
</div>
    </>
  );
};

export default Footer;
