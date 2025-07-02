import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-4">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo Prescripto"
          className="w-44 cursor-pointer"
        />

        <ul className="inline-flex gap-3 font-semibold md:flex items-start gap-5 font-medium hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">INICIO</li>
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">DOCTORES</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">NOSOTROS</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">CONTACTO</li>
          </NavLink>
        </ul>

        {user ? (
          <div className="justify-self-end hidden md:block">
            <UserMenu />
          </div>
        ) : (
          <div className="flex flex-row justify-end">
            <button
              onClick={() => navigate("/auth?mode=login")}
              className="bg-primary text-white px-4 py-3 m-1 rounded-full font-light hidden md:block"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => {
                navigate("/auth?mode=register");
              }}
              className={`bg-primary text-white px-8 py-3 m-1 rounded-full font-light hidden md:block`}
            >
              Crear cuenta
            </button>
          </div>
        )}

        <div className="flex md:hidden justify-end items-center gap-4 ">
          <img
            src={assets.menu_icon}
            alt="Icono Menú"
            className="w-6 md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-white transition-all transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-400 ease-in-out lg:hidden z-50`}
          >
            <div className="flex justify-end p-4">
              <img
                src={assets.cross_icon}
                alt="Icono Tache"
                className="w-7 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            {user ? (
              <div className="px-5 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={user.profileImage || "/default-avatar.png"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <p className="text-sm font-medium">{user.first_name}</p>
                </div>
                <ul className="flex flex-col gap-3 text-sm">
                  <NavLink
                    to="/perfil"
                    onClick={toggleMenu}
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    <li className="hover:underline">Mi perfil</li>
                  </NavLink>
                  <NavLink
                    to="/citas"
                    onClick={toggleMenu}
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    <li className="hover:underline">Mis citas</li>
                  </NavLink>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                      navigate("/login");
                    }}
                    className="text-left text-red-600"
                  >
                    Cerrar sesión
                  </button>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => {
                  toggleMenu();
                  navigate("/auth");
                }}
                className="ml-5 mt-4 bg-primary text-white px-4 py-2 rounded-full"
              >
                Iniciar Sesión
              </button>
            )}

            <ul className="gap-3 font-semibold md:flex items-center gap-5 font-medium cursor-pointer mt-10 mx-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="hover:underline">HOME</li>
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="hover:underline">ALL DOCTORS</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="hover:underline">ABOUT</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="hover:underline">CONTACT</li>
              </NavLink>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hiden z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Navbar;
