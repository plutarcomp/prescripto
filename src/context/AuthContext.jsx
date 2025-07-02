import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const backendUrl = import.meta.env.VITE_API_BACKEND_URL;

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${backendUrl}/api/auth/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log("User fetched successfully:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        return { success: true };
      } else if (response.status === 404) {
        console.error("No user found");
        throw new Error("No user found");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message || error);
      return {
        success: false,
        message:
          error.response?.data?.message || error.message || "Error desconocido",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const register = async (
    email,
    password,
    nombre,
    apellido_paterno,
    phone_number
  ) => {
    try {
      const response = await axios.post(`${backendUrl}/api/auth/register`, {
        email: email,
        password: password,
        first_name: nombre,
        last_name: apellido_paterno,
        role_id: 2,
        phone_number: phone_number,
      });
      
      if (response.status === 201) {
        return { success: true };
      } else {
        return {
          success: false,
          message: "No se pudo registrar el usuario.",
        };
      }
    } catch (err) {
      console.error("Error al registrar:", err.response);

      const message =
        err.response?.data?.mensaje ||
        err.response?.data?.message ||
        "Hubo un error al registrar. Intenta nuevamente.";

      return {
        success: false,
        message,
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
