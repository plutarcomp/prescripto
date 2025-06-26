import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

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
            <li className="">HOME</li>
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">ALL DOCTORS</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">ABOUT</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "forced-colors:appearance-auto font-extrabold underline"
                : ""
            }
          >
            <li className="">CONTACT</li>
          </NavLink>
        </ul>

        {user ? (<><p>Bienvenido, {user.first_name}</p><button onClick={logout}>Cerrar sesión</button></>) : (<button> Iniciar Sesión</button>)}

        <button
       loginform
          onClick={() => navigate("/auth")}

          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create account
        </button>

        <div className="flex justify-end items-center gap-4 ">
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
            <ul className="gap-3 font-semibold md:flex items-center gap-5 font-medium cursor-pointer mt-10 mx-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="">HOME</li>
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="">ALL DOCTORS</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="">ABOUT</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "forced-colors:appearance-auto font-extrabold underline"
                    : ""
                }
              >
                <li className="">CONTACT</li>
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
